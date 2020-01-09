//Cambiamos abeja por avispa:

var texto = "A la abeja semejante, para que cause placer, el epigrama ha de ser: pequeño, dulce y punzante.";
document.write(texto.replace("abeja","avispa"));

//Espaciado
document.write("<br>");

//Extraemos el teléfono:

var cad = 'My phone number is: 555 123-4567.';
document.write(cad.substring(20,31));

//Espaciado
document.write("<br>");

//Extraemos dos numeros de teléfono:
var cad = 'My phone number is: 555 123-4567. My cell number is: 555 987-5432.';
var patron = "(^5{3})\s([0-9]{3})\-([0-9]{4})";
cadResultado = cad.match(patron);
document.write(cadResultado);