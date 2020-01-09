let fechas = [];
let fechActual = Date.now();
let interval2 = setInterval(comprobarTamanio,3000);
let interval = setInterval(añadirFecha,3000);


    function añadirFecha(){
        let fechaActual2 = Date.now();
        fechas.push(fechaActual2);

        for(let i =0; i<=fechas.length;i++){
            console.log(fechas[i]);
        } 
    }

     function comprobarTamanio(){
        if(fechas.length == 4){
            for(let i = 0; i<=fechas.length;i++){
            fechas.shift();
            }
        } else{
            añadirFecha();
        }
    }

