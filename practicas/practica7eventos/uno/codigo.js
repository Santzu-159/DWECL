window.onload = function(){

    let enlaces=document.getElementsByTagName("a"); //cogemos todas las etiquetas a del html

    for(let i = 0; i<enlaces.length; i++){
        //enlaces[i].addEventListener("click",function(){llamada(enlaces[i]);});  //otra forma
        enlaces[i].onclick=
            function(){
                llamada(enlaces[i]);
            };
    }
}

function llamada(element){
    let idParrafoAnt=element.previousElementSibling; //obtenemos  el elemento del mismo nivel pero se encuentra antes
    ocultar(idParrafoAnt);
}

//funcion para ocultar
function ocultar(elem){    

    if(elem.style.display=="none"){

        elem.style.display="block";
    }else{
        elem.style.display="none";
    }
}