    //var total = document.getElementById("total");
    //alert(total.innerHTML);

    var total = document.getElementById("total");
    var formattedtext = floatToMoneyText(moneyTxtFLoat(total.innerHTML));
    //alert(formattedtext === total.innerHTML); // true

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
    //writeTotal(3.143302);     