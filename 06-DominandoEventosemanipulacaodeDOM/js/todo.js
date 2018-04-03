$(function(){

    /* 6.4 REMOVENDO ITENS COM ESTILO */
    function onTarefaDeleClick() {
        //console.log($(this).parent('.tarefa-item').text().trim());
        $(this).parent('.tarefa-item').hide('slow', function () {
            $(this).remove();
        });
    }

    $('.tarefa-delete').click(onTarefaDeleClick);


});
