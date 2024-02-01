$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault(); // preventDefault() impede que o formulário reset quando aperta o Salvar
        const novaTarefa = $("#Tarefas").val();

        const tarefaExistente = $('ul li')
            .toArray()
            .some((li) => $(li).text() === novaTarefa);
        if (tarefaExistente) {
            alert("Essa tarefa já existe!");
            return;
        }

        const listaTarefa = $(`<li class="has-marker">${novaTarefa}</li>`);
        $(listaTarefa).appendTo("ul");
        $("#Tarefas").val(""); //Limpa o input após colocar a tarefa
    });
    $("ul").on("click", "li", function(){
        $(this).toggleClass("checked");
    })
})
