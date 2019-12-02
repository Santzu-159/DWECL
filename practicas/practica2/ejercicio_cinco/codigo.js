let numero1 =10;
let numero2 = 5;
let numero3 = 15;

function ordenar(numero1,numero2,numero3){ //le pasamos los numeros como paramentro
    //validamos y ordenamos
    if(numero1>numero2 && numero1>numero3){ 
        if(numero2>numero3){
            alert(numero1>numero2>numero3);
        }else{
            alert(numero1>numero3>numero2);
        }
    }else if(numero2>numero3){
            if(numero1>numero3){
                alert(numero2>numero1>numero3);
            }else{
                alert(numero2>numero3>numero1);
            }
    }else{
        if(numero1>numero2){
            alert(numero3>numero1>numero2);
        }else{
            alert(numero3>numero2>numero1);
        }
    }






}