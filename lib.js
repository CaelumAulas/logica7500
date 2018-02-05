    
    // global é do mal
    //parâmetros // argumento // local
    function pegaNumeroCorretoDaTela(txt) {
        return parseFloat(prompt(txt).replace(",",".").replace("o","0"));
    }

    function transformaDecimalEmTexto(num) {
       return num.toFixed(2).replace(".",",");
    }
    
    function mostra(msg){
        const tag = document.createElement("p")
        document.body.appendChild(tag)
        tag.innerHTML = msg
    }

    // // função com parâmetro
    // function prompt(msg){
    //     // seilah
    //     msg
    // }
