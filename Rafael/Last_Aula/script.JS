

// No click do botao ele adiconara um lista
$("#adicionar").on("click", function () {

//Pegando o valor do input
    let valor = $("#digite").val()

//Criando uma linha
        $("ul").append("<li>" + valor + "</li>")
})


//No click do botao ele apagara oque foi criado
$("#remover").on("click", function (){

//Ele apagara a lista
$("ul").empty();

})