let ventana;

function abrirVentana(){
    ventana = window.open("","Ventana abierta","width=500, height=500");    
}

function cerrarVentana(){
    ventana.close();
}

function disminuirVentana(){
    ventana.resizeBy(-40,-40);
}

function posicionarVentana(){
    ventana.moveTo(0,0);
}

function desplazarVentana(){
    ventana.moveBy(20, 20);
}