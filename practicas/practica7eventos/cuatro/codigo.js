window.onload=function(){

    let presentacion=document.getElementById("presentacion");
    let cambio=document.getElementById("cambio");
    let pulsar=document.getElementById("pulsar");
    let ccolor=document.getElementById("ccolor");

    pulsar.addEventListener("click",cambioColor);

    cambio.addEventListener("mouseenter",cambioTexto);
    cambio.addEventListener("mouseout",cambioTexto);

    document.addEventListener("keyup",pulsaTecla);
    document.addEventListener("keydown",pulsaTecla);
}    


function cambioColor(evento){


    if(document.getElementById("ccolor").style.backgroundColor=="pink"){

        document.getElementById("ccolor").style.backgroundColor="orange";

    }else{

        document.getElementById("ccolor").style.backgroundColor="pink";
    }

}

function cambioTexto(evento){


    if(evento.type=="mouseenter"){

        evento.target.innerHTML = "Una... Pelusilla!!";

    }else if(evento.type=="mouseout"){

        evento.target.innerHTML = "¿Que es una pelusa en una silla?";
       
    }

}

function pulsaTecla(evento){

    let letra = evento.key;

    if(evento.type=="keyup" && letra == "z"){
    
        document.getElementById("presentacion").style.border="double";

    }else if(evento.type=="keydown" && letra == "z"){

        document.getElementById("presentacion").style.border="dotted";
       
    }

}