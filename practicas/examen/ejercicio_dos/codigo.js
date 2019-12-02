let horaCompleta = new Date();

function mostrarReloj() {

   //Obtenemos la hora 

    let horas = prompt("Introduce la hora:");
    let minutos = prompt("Introduce los minutos:");
    let segundos = prompt("Introduce lo segundos:");


  //Comprobamos que la hora la de bien

    if(segundos >59){

        minutos = minutos +1;
        segundos = 0;
    }
    if(minutos >59){
        horas = horas +1;
        minutos = 0;
    }

    if(horas > 24) {
        horas = horas - 24;
    }
    
    //Hacemos los intervalos de hora y mostramos el reloj

    if(horas >=12 || (horas<=14 && minutos <= 59)){

        return document.write(horas+":"+minutos+":"+segundos+" Es medio dia");

    }else if(horas >=15 || (horas<=20 && minutos <= 59)){

        return document.write(horas+":"+minutos+":"+segundos+"Estamos en la tarde");

    }else if(horas >=21 || (horas<=06 && minutos <= 59)){

        return document.write(horas+":"+minutos+":"+segundos+" Es de noche");

    }else if(horas >=07 || (horas<=11 && minutos <= 59)){

        return document.write(horas+":"+minutos+":"+segundos+" Es mañana");

    }
    
}

//configuramos el intervalo de hora para que se vaya refrescando
  window.onload = function() {
    setInterval(mostrarReloj, 1000);
  }