let numeroDni= prompt("Introduzca el número del DNI:");
let letraDni = prompt("Introduzca la letra del DNI:");

if(!numeroDni.isNaN && numeroDni>'0' && numeroDni<'99999999') {
   
    let letras= ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let resto= numeroDni%23;
    alert('Resto: ' + resto);

    let letraCorrecta = letras[resto];
    if (letraCorrecta == letraDni) {

        document.write("Dni válido"); 

    } else {

        document.write("Dni inválido."); 

    }
            
} else {

    alert("El número proporcionado no es válido.");
    
}


/* NaN es Not a Number
devuelve true si la variable es "not a number"
nos interesa que sea "a number" por eso lo negamos con !*/
