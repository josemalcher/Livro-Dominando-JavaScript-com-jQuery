//var total = document.getElementById("total");
//alert(total.innerHTML);

//var total = document.getElementById("total");
//var formattedtext = floatToMoneyText(moneyTxtFLoat(total.innerHTML));
//alert(formattedtext === total.innerHTML); // true

function moneyTextToFloat(text) {
    var cleanText = text.replace("R$ ", "").replace(",", ".");
    return parseFloat(cleanText);
}

function floatToMoneyText(value) {
    var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
    text = "R$ " + text;
    return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

/*function readTotal() {
    var total = document.getElementById("total");
    return moneyTextToFloat(total.innerHTML);
}*/
function readTotal() {
    var total = $("#total").text();
    return moneyTextToFloat(total);
}

// 3.6 ALTERANDO O CAMPO DO TOTAL
/*function writeTotal(value) {
    var total = document.getElementById("total");
    total.innerHTML = floatToMoneyText(value);
}*/
function writeTotal(value) {
    var text = floatToMoneyText(value);
    $("#total").text(text);
}

//writeTotal(3.143302);

/* var produtos = document.getElementsByClassName("produto");
console.log(produtos);

for(var pos = 0; pos < produtos.length; pos++) {
    var priceElements =  produtos[pos].getElementsByClassName("price");
    var priceText = priceElements[0].innerHTML;
    var price = moneyTxtFLoat(priceText);
    console.log(price);
} */
/*function calculateTotalProducts() {
    //var produtos = document.getElementsByClassName("produto");
    var produtos = $(".produto");
    var total = 0;
    for(var pos = 0; pos < produtos.length; pos++) {
        var $produto = $(produtos[pos]);
        var quantity = moneyTextToFloat(
            $produto.find(".quantity").val());
        var price = moneyTextToFloat(
            $produto.find(".price").text());
        total += quantity * price;
    }
    return total;
}*/

function calculateTotalProducts() {
    var produtos = $(".produto");
    var total = 0;

    $(produtos).each(function (pos,produto) {
        var $produto = $(produto);
        var quantity = moneyTextToFloat($produto.find(".quantity").val());
        var price = moneyTextToFloat($produto.find(".price").text());
        //console.log(produto);
        console.log(price);
        total += quantity * price;

    });
    return total;

}

/*
function quantidadeMudou() {
    writeTotal(calculateTotalProducts());
}
function onDocumentoLoad() {
    var textEdits = document.getElementsByClassName("quantity");
    for(var i = 0; i < textEdits.length; i++) {
        textEdits[i].onchange = quantidadeMudou;
    }
}
*/
function onDocumentoLoad() {
    var textEdits = document.getElementsByClassName("quantity");
    for(var i = 0; i < textEdits.length ; i++){
        textEdits[i].onchange = function () {
            writeTotal(calculateTotalProducts());
        }
    }
}

window.onload = onDocumentoLoad;