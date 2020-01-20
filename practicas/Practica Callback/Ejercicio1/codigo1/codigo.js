
function primeraLlamada(){
    llamadaServidor(2000,callback);
}

function callback(error,numSegundos){

    if(error != null){
        console.log("Error ocurrido en el segundo: "+numSegundos);
    }else{
        if(numSegundos == 2000){
            console.log("La primera llamada ha tardado 2000");
            llamadaServidor(3000,callback);
        }else if(numSegundos == 3000){
            console.log("La segunda llamada ha tardado 3000");
            llamadaServidor(4000,callback);
        }else{
            console.log("La tercera llamada ha tardado 4000");
            console.log("Hemos terminado todo perfecto");
        }
    }
}

function llamadaServidor( numSegundos , callback){
    setTimeout( 
        function() { 
            console.log(`Llamada al servidor de ${numSegundos} sg.`); 
            callback(null,numSegundos);
        }, 
    numSegundos);

}