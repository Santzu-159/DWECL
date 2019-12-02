let radio = prompt("Introduce el radio: ");

document.write("El valor del radio es: "+radio+" cm.<br>");

let diametro = 2*radio;
document.write("El valor del diametro es: "+diametro+" cm.<br>");

let perimetro = 2*Math.PI*radio;
document.write("El valor del perimetro es: "+perimetro+" cm2.<br>");

let area = Math.PI*Math.pow(radio,2);
document.write("El valor del area del circulo es: "+area+" cm2.<br>");

let areaEs = 4*Math.PI*Math.pow(radio,2);
document.write("El valor del area de la esfera es: "+areaEs+" cm3.<br>");

let volumen = 4/3*Math.PI*Math.pow(radio,3);
document.write("El valor del volumen de la esfera es: "+volumen+" cm3.<br>");
