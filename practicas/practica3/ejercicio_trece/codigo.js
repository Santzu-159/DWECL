    // antes de la llamada
    let menu = {
        width: 200,
        height: 300,
        title: "Mi menu"
    };
    
    multiplicarNumeros(menu);
    
    // Después de la llamada
    // menu = { width: 400,  height: 600,  title: "Mi menu" };

    document.write("Modificado:<br>")
    mostrar(menu);

    function multiplicarNumeros(num){
        for(let valor in num){
            if(Number.isInteger(num[valor])){
                num[valor]=num[valor]*2;
            }
        }
    }

    function mostrar(objeto){
        for(let valor2 in objeto){
            document.write(valor2+": "+objeto[valor2]+"<br>");
        }
    }

