    var texto;
    function pegaNumeroCorretoDaTela() {
        return parseFloat(prompt(texto).replace(",",".").replace("o","0"));
    }
    var numero;
    function transformaDecimalEmTexto() {
       return numero.toFixed(2).replace(".",",");
    }
