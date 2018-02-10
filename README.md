# Dominando JavaScript com jQuery

Link: https://www.casadocodigo.com.br/products/livro-javascript-jquery

Kanban: https://josemalcher.net/kanban/public/task/240/c1b8680b9e2b4305daf46fb0f202491ea8b958010a14999aebf4e6238976

Repsitório: https://github.com/josemalcher/Livro-Dominando-JavaScript-com-jQuery

---

## <a name="indice">Índice</a>

- [1 - Apresentação](#parte1)   
- [2 - Refazendo uma loja virtual](#parte2)   
- [3 - Adicionando JavaScript](#parte3)   
- [4 - Um JavaScript diferente em cada navegador](#parte4)   
- [5 - Simplifique com jQuery](#parte5)   
- [6 - Dominando eventos e manipulação de DOM com jQuery](#parte6)   
- [7 - Não tenha medo do AJAX e do JSON](#parte7)   
- [8 - Um gerenciador de tarefas com AJAX](#parte8)   
- [9 - jQuery UI](#parte9)   
- [10 - jQuery Mobile](#parte10)   
- [11 - Orientação a objetos no JavaScript](#parte11)   
- [12 - Um pouco de programação funcional](#parte12)   
- [13 - Criando plugins para jQuery](#parte13)   
- [14 - Dicas para usar melhor o jQuery](#parte14)   
- [15 - E o que vem agora?](#parte15)   



---

## <a name="parte1">1 - Apresentação</a>

- Lista: http://forum.casadocodigo.com.br/
- repo do livro: https://github.com/pbalduino/livro-js-jquery


[Voltar ao Índice](#indice)

---

## <a name="parte2">2 - Refazendo uma loja virtual</a>

A figura a seguir nos dá uma ideia melhor de como o servidor vai receber menos requisições.

![cap2_EsquemaDeRequisicoes_ao_servidor](https://github.com/josemalcher/Livro-Dominando-JavaScript-com-jQuery/blob/master/img_git/cap2_EsquemaDeRequisicoes_ao_servidor.png?raw=true)


[Voltar ao Índice](#indice)

---

## <a name="parte3">3 - Adicionando JavaScript</a>

Document Object Model (ou Objeto Modelo do Documento), e é criada automaticamente pelo browser toda vez que carregamos um arquivo XML ou HTML válido. Esse arquivo é chamado de Documento, e cada item dentro dele (textos, imagens, botões, caixas de texto) é chamado genericamente de Elemento.

![ExibindoDOMcomoArvore.PNG](https://github.com/josemalcher/Livro-Dominando-JavaScript-com-jQuery/blob/master/img_git/cap3_ExibindoDOMcomoArvore.PNG?raw=true)

### 3.4 LOCALIZANDO O VALOR TOTAL DO CARRINHO

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CAP 3 - Adicinado JS</title>
</head>
<body>
    
    <table>
        <tbody>
            <tr>
                <td>
                    <div>R$ 29,90</div></dif>
                </td>
                <td>
                    <input type="number">
                </td>
            </tr>
        </tbody>
        <tr>
            <td></td>
            <td>Total da compra</td>
            <td><div id="total">R$ 29,90</div></td>
            <td></td>
        </tr>
    </table>

</body>
<script type="text/javascript"> //somente para estudos...isso aqui!!!
    
    //var total = document.getElementById("total");
    //alert(total.innerHTML);

    var total = document.getElementById("total");
    var formattedtext = floatToMoneyText(moneyTxtFLoat(total.innerHTML));
    alert(formattedtext === total.innerHTML); // true

    function moneyTxtFLoat(text){
        var cleanText = text.replace("R$ ", "").replace(",", ".");
        return parseFloat(cleanText);
    }

    function floatToMoneyText(value){
        var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
        text = "R$ " + text;
        return text.substr(0, text.length - 2) + "," + text.substr(-2);
    }
    function readTotal(){
        var total = document.getElementById("total");
        return moneyTxtFLoat(total.innerHTML);
    }
    
    // 3.6 ALTERANDO O CAMPO DO TOTAL
    function writeTotal(value){
        var total = document.getElementById("total");
        total.innerHTML = floatToMoneyText(value);
    }
    

</script>
</html>
```
### 3.5 USANDO === E ==

A linha iniciada por => indica o resultado da expressão e não deve ser digitada:
```javascript
2 == 2;
=> true
1 == "1";
=> true
0 == [];
=> true
0 == "";
=> true
```

Porém, quando você utiliza === , o JavaScript não converte tipos e verifica a igualdade dos valores, sem truques:

```javascript
2 === 2;
=> true
1 === "1";
=> false
0 === [];
=> false
0 === "";
=> false
```
A menos que você tenha um motivo realmente bom para usar o operador de equivalência, use sempre === para evitar que erros

### 3.7 INCLUINDO UM ARQUIVO JAVASCRIPT NA PÁGINA
```html
<script src='javascripts/rodus.js' type='text/javascript'></script>
```

### 3.10 CALCULANDO OS SUBTOTAIS DOS ITENS

```html
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src='javascripts/rodus.js' type='text/javascript'></script>
    <title>CAP 3 - Adicinado JS</title>
</head>

<body>
    <table>
        <tbody>
            <tr class="produto">
                <td>
                    <div class="price">R$ 29,90</div>
                </td>
                <td>
                    <input type="number" class="quantity">
                </td>
            </tr>
            <tr class="produto">
                <td>
                    <div class="price">R$ 59,90</div>
                </td>
                <td>
                    <input type="number" class="quantity">
                </td>
            </tr>
            <tr class="produto">
                <td>
                    <div class="price">R$ 99,90</div>
                </td>
                <td>
                    <input type="number" class="quantity">
                </td>
            </tr>
        </tbody>
        <tr>
            <td></td>
            <td>Total da compra</td>
            <td>
                <div id="total">R$ 189,70</div>
            </td>
            <td></td>
        </tr>
    </table>

</body>

</html>
```

```javascript
//var total = document.getElementById("total");
//alert(total.innerHTML);

//var total = document.getElementById("total");
//var formattedtext = floatToMoneyText(moneyTxtFLoat(total.innerHTML));
//alert(formattedtext === total.innerHTML); // true

function moneyTxtFLoat(text) {
    var cleanText = text.replace("R$ ", "").replace(",", ".");
    return parseFloat(cleanText);
}

function floatToMoneyText(value) {
    var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
    text = "R$ " + text;
    return text.substr(0, text.length - 2) + "," + text.substr(-2);
}
function readTotal() {
    var total = document.getElementById("total");
    return moneyTxtFLoat(total.innerHTML);
}

// 3.6 ALTERANDO O CAMPO DO TOTAL
function writeTotal(value) {
    var total = document.getElementById("total");
    total.innerHTML = floatToMoneyText(value);
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
function calculateTotalProducts() {
    var produtos = document.getElementsByClassName("produto");

    var totalProdutos = 0;

    for (var pos = 0; pos < produtos.length; pos++) {
        var priceElements = produtos[pos].getElementsByClassName("price");
        var priceText = priceElements[0].innerHTML;
        var price = moneyTextToFloat(priceText);

        var qtyElements = produtos[pos].getElementsByClassName("quantity");
        var qtyText = qtyElements[0].value;
        var quantity = moneyTextToFloat(qtyText);

        var subtotal = quantity * price;

        totalProdutos += subtotal;

    }

    return totalProdutos;
}

```



[Voltar ao Índice](#indice)

---

## <a name="parte4"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte5"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte6"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte7"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte8"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte9"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte10"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte11"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte12"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte32"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte14"></a>


[Voltar ao Índice](#indice)

---

## <a name="parte15"></a>


[Voltar ao Índice](#indice)

---