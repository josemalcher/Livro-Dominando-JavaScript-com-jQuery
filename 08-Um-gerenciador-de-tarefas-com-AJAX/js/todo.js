$(function () {

    var meu_login = "malcher.malch@gmail.com";
    var server = "http://livro-capitulo07.herokuapp.com";
    var $lastClicked;

    function loadTarefas() {
        $("#tarefa").empty();
        $.getJSON(server + "/tarefas", {usuario: meu_login})
            .done(function (data) {
                console.log("Data ", data);
                for (var tarefa = 0; tarefa < data.length; tarefa++) {
                    addTarefa(data[tarefa].texto, data[tarefa].id);
                }
            });
    }

    function updateTarefa(text, id) {
        $.post(server + "/tarefa", {tarefa_id: id, texto: text});
    }

    function onTarefaDeleteClick() {

        $(this).parent('.tarefa-item')
            .unbind('click')
            .hide('slow', function () {
                $(this).remove();
            });
    }

    function addTarefa(text, id) {
        id = id || 0;

        var $tarefa = $("<div />")
            .addClass("tarefa-item")
            .append($("<div />")
                .addClass("tarefa-id")
                .text(id))
            .append($("<div />")
                .addClass("tarefa-text")
                .text(text))
            .append($("<div />")
                .addClass("tarefa-delete"))
            .append($("<div />")
                .addClass("clear"));
        $("#tarefa-list").append($tarefa);
        $(".tarefa-delete").click(onTarefaDeleteClick);
        $(".tarefa-item").click(onTarefaItemClick);
    }

    function onTarefaKeydown(event) {
        if (event.which === 13) {
            addTarefa($("#tarefa").val());
            $("#tarefa").val("");
        }
    }

    function onTarefaEditKeydown(event) {
        if (event.which === 13) {
            savePendingEdition($lastClicked);
            $lastClicked = undefined;
        }
    }

    function onTarefaItemClick() {

        if (!$(this).is($lastClicked)) {
            if ($lastClicked !== undefined) {
                savePendingEdition($lastClicked);
            }

            $lastClicked = $(this);

            var text = $lastClicked.children('.tarefa-text').text();
            var id = $lastClicked.children('.tarefa-id').text();
            var content = "<div class='tarefa-id'>" + id + "</div>" +
                "<input type='text' class='tarefa-edit' value='" + text + "'>";
            //var content = "<input type='text' class='tarefa-edit' value='" +   text + "'>";

            $lastClicked.html(content);

            $(".tarefa-edit").keydown(onTarefaEditKeydown);
        }

    }

    function savePendingEdition($tarefa) {
        var text = $tarefa.children('.tarefa-edit').val();
        var id = $tarefa.children('.tarefa-id').text();
        $tarefa.empty();
        $tarefa.append("<div class='tarefa-id'>" + id + "</div>")
               .append("<div class='tarefa-text'>" + text + "</div>")
               .append("<div class='tarefa-delete'></div>")
               .append("<div class='clear'></div>");
        /*$tarefa.append("<div class='tarefa-text'>" + text + "</div>")
            .append("<div class='tarefa-delete'></div>")
            .append("<div class='clear'></div>");*/
        updateTarefa(text, id);

        $(".tarefa-delete").click(onTarefaDeleteClick);

        $tarefa.click(onTarefaItemClick);
    }

    $(".tarefa-delete").click(onTarefaDeleteClick);

    $(".tarefa-item").click(onTarefaItemClick);

    $("#tarefa").keydown(onTarefaKeydown);
});

/*
//Codigo antigo

$(function () {

    var meu_login = "malcher.malch@gmail.com";
    var server = "http://livro-capitulo07.herokuapp.com";
    var $lastClicked;

    /!* Livro
    function onTarefaDeleteClick() {
        $(this).parent('.tarefa-item').off('click').hide('slow', function() {
                $(this).remove();
            });
    }*!/

    function addTarefa(text) {
        var $tarefa = $("<div />")
            .addClass("tarefa-item")
            .append($("<div />")
            .addClass("tarefa-text").text(text))
            .append($("<div />")
            .addClass("tarefa-delete"))
            .append($("<div />")
            .addClass("clear"));
        $("#tarefa-list").append($tarefa);
        $(".tarefa-delete").click(onTarefaDeleteClick);
        $(".tarefa-item").click(onTarefaItemClick);
    }

    /!* 6.4 REMOVENDO ITENS COM ESTILO *!/
    function onTarefaDeleClick() {
        $(this).parent('.tarefa-item').hide('slow', function () {
            $(this).remove();
        });
    }

    $('.tarefa-delete').click(onTarefaDeleClick);

    /!* 6.5 EDITANDO ITENS *!/
    function onTarefaEditKeydown(event) {
        if (event.which === 13) {
            savePendingEdition($(this));
        }
    }

    function savePendingEdition(tarefa) {
        console.log("E aqui vamos salvar nossa tarefa");
    }

    function onTarefaItemClick() {
        var text = $(this).children('.tarefa-texto').text();
        var content = "<input type='text' class='tarefa-edit' value=' " + text + " '>";
        $(this).html(content);
        $('.tarefa-edit').keydown(onTarefaEditKeydown);

    }

    $(".tarefa-item").click(onTarefaItemClick);


});
*/
