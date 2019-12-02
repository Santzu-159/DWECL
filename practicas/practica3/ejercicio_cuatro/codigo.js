
let opcion;
do{
    opcion = prompt("Elija el número de la operación que desea ejecutar:\n"+
                        "1.- Potencia\n"+
                        "2.- Raíz\n"+ 
                        "3.- Redondeo\n"+ 
                        "4.- Trigonometría\n"
                        );

    switch (opcion){

        case "1": 
                let base= prompt("Introduce la base:");
                let exponente= prompt("Introduce el exponente");
                potencia(base,exponente);
                break;

        case "2": 
                let num = prompt("Introduce un número entero positivo:");
                raiz(num);
                break;

        case "3": let decimal = prompt("Introduce un número decimal:");
                redondeo(decimal);
                break;

        case "4": 
                let angulo = prompt("Introduzca un ángulo entre 0 y 360:");
                trigonometria(angulo);
                break;

    }
}while(opcion<0 || opcion > 4);   


function pontecia(base,exponente){

    document.write("La potencia de "+base+" elevado a "+exponente+" es: "+Math.pow(base,exponente));

}

function raiz(num){

    document.write("La raiz de "+num+" es: "+Math.sqrt(num));

}

function redondeo(decimal){

    document.write("Redondeo de "+decimal+" a la alta es: "+round(num)+"<br>");
    document.write("Redondeo de "+decimal+" a la baja es: "+floor(num));

}

function trigonometria(angulo){

    document.write("El seno de "+angulo+" es: "+Math.sin(angulo)+"<br>");
    document.write("El coseno de "+angulo+" es: "+Math.cos(angulo)+"<br>");
    document.write("La tangente de "+angulo+" es: "+Math.tan(angulo));

}