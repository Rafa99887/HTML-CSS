$("#Adicionar").on("click", function(){



let text = $("#Valor").val()


let linha = (
    $("<th></th>")
        .append("<td>" + text + "</td>")
)


$("tbody").append(linha)

})