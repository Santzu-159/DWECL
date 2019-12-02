let ventana;
let tiempo;

function abrir(){
   ventana = window.open("","Ejercicio2","width=400, height=400, top="+Math.floor(Math.random() * screen.height)+", left="+Math.floor(Math.random() * screen.width))
    tiempo =setInterval(disminuir, 1000);
}

function disminuir(){
    console.log(ventana.innerWidth-40);
    
    if(ventana.innerWidth-40<=80 || ventana.innerHeigth-40<=80){
        clearInterval(tiempo);
        tiempo =setInterval(aumentar, 1000);
    }else{
        ventana.resizeBy(-40,-40);

    }
}

function aumentar(){

    if(ventana.innerWidth+60<400){
    ventana.resizeBy(60,60);
    }else{
        clearInterval(tiempo);
    }
    console.log(ventana.innerWidth-40);

}

function cerrar(){
    clearInterval(tiempo);
    ventana.close();
}