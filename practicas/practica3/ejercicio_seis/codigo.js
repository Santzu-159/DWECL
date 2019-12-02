let nombre= prompt("Introduzca su nombre:");
let pApellido= prompt("Introduzca su primer apellido:");
let sApellido= prompt("Introduzca su segundo apellido:");

let completo = nombre+" "+pApellido+" "+sApellido;
let sinEspacios = completo.trim();


document.write("Longitud de la cadena: "+sinEspacios.length+"<br>");
document.write("Cadena en mayúscula: "+sinEspacios.toUpperCase()+"<br>");
document.write("Cadena en minuscula: "+sinEspacios.toLowerCase()+"<br>");

let separado = completo.split(" ");

document.write("Nombre: "+separado[0]+"<br>Apellido 1: "+separado[1]+"<br>Apellido 2:"+separado[2]+"<br>");

document.write("Sugerencia 1 de nombre de usuario: ");
//cogemos el primer caracter del nombre:
let nom1 = nombre.charAt(0);
//cogemos el primer caracter
let ape2 = sApellido.charAt(0);

//lo juntamos
let usuario1 = nom1+pApellido+ape2;
document.write(usuario1.toLowerCase()+"<br>");


document.write("Sugerencia 2 de nombre de usuario: ");
let nom2 = nombre.substring(0,3);
let primerA = pApellido.substring(0,3);
let segundoA = sApellido.substring(0,3);

let usuario2 = nom2+primerA+segundoA;
document.write(usuario2.toLowerCase());







