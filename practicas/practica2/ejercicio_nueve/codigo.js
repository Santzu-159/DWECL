let valores = [true,5,false,"hola","adios",2];


if(valores[3].length>valores[4].lentgh){

    
    document.write(valores[3]+" es mayor que "+valores[4]+"<br>");

}else{

    document.write(valores[4]+" es mayor que "+valores[3]+"<br>");
}


document.write(valores[0]&&valores[2]+"<br>");// false
document.write(valores[0]||valores[2]);//true

document.write("<br><br>");

let suma = parseInt(valores[1])+parseInt(valores[5]); 
let resta = parseInt(valores[1])-parseInt(valores[5]);
document.write("Suma: "+valores[1]+" + "+valores[5]+" = "+suma+"<br>Resta: "+valores[1]+" - "+valores[5]+" = "+resta+"<br>");

let producto = parseInt(valores[1])*parseInt(valores[5]);
let division = parseInt(valores[1])/parseInt(valores[5]);
document.write("Multiplicación: "+valores[1]+" * "+valores[5]+" = "+producto+"<br>División: "+valores[1]+" / "+valores[5]+" = "+division+"<br>");

let modulo = parseInt(valores[1])%parseInt(valores[5]);
document.write("Modulo: "+valores[1]+" * "+valores[5]+" = "+modulo+"<br>");
