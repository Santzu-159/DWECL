//Variables donde se almacenan los números introducidos
let numero1 = prompt("Introduzca el primer numero:");
let numero2 = prompt("Introduzca el segundo numero:");


if(numero1>numero2){ //Si numero1 es mayor que numero 2, nos realiza la suma y la resta
    let suma = parseInt(numero1)+parseInt(numero2); //usamos parseInt por que por defecto lo toma como una cadena y entonces no opera
    let resta = parseInt(numero1)-parseInt(numero2);//por tanto tenemos que darle formato numero
    alert(numero1+" + "+numero2+" = "+suma+"\n"+numero1+" - "+numero2+" = "+resta);
}else{
    let producto = parseInt(numero1)*parseInt(numero2);
    let division = parseInt(numero1)/parseInt(numero2);
    alert(numero1+" * "+numero2+" = "+producto+"\n"+numero1+" / "+numero2+" = "+division);
}