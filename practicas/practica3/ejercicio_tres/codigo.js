let horas = prompt("Introduce la hora:");
let minutos = prompt("Introduce los minutos:");
let segundos = prompt("Introduce los segundos:");
let horario = "";

if(horas >24 || minutos > 60 || segundos >60){

    alert("hora no válida");

}else{

    document.write("Son las "+horas+":"+minutos+":"+segundos+" horas.<br>");
}


if( horas > 12 ){
    horas = horas-12;
    horario = "PM";
}else{
    horario = "AM";
}

document.write(horas+":"+minutos+" "+horario);

