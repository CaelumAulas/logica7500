    
    // global é do mal
    //parâmetros // argumento // local
    function pegaNumeroCorretoDaTela(txt) {
        return parseFloat(prompt(txt).replace(",",".").replace("o","0"));
    }

    function transformaDecimalEmTexto(num) {
       return num.toFixed(2).replace(".",",");
    }

    // // função com parâmetro
    // function prompt(msg){
    //     // seilah
    //     msg
    // }
