$(function () {

    /* 6.4 REMOVENDO ITENS COM ESTILO */
    function onTarefaDeleClick() {
        //console.log($(this).parent('.tarefa-item').text().trim());
        $(this).parent('.tarefa-item').hide('slow', function () {
            $(this).remove();
        });
    }

    $('.tarefa-delete').click(onTarefaDeleClick);

    /* 6.5 EDITANDO ITENS */
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



});
