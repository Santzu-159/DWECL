let ventana;

function abrir(){
   ventana = window.open("","index","toolbar=yes, scrollbars=yes, resizable=no, width=400, height=400, left=500")
    document.getElementById("ancho").innerHTML = ventana.innerWidth;
    document.getElementById("alto").innerHTML = ventana.innerHeight;
}

function cerrar(){
    ventana.close();
    document.getElementById("ancho").innerHTML ="";
    document.getElementById("alto").innerHTML = "";
}

function aumentar(){
    ventana.resizeBy(100,100);
    
    document.getElementById("ancho").innerHTML = ventana.innerWidth+100;
    document.getElementById("alto").innerHTML = ventana.innerHeight+100;
}

function disminuir(){
    ventana.resizeBy(-100,-100);
    
    document.getElementById("ancho").innerHTML = ventana.innerWidth-100;
    document.getElementById("alto").innerHTML = ventana.innerHeight-100;
}

function posicionar(){
    ventana.moveTo(0,0);
}

function desplazar(){
    ventana.moveBy(10, 0);
}