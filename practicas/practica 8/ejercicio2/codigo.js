const cname = "cookie";
let contador;

window.onload= function(){
    contador = getCookie(cname);
    if(contador == ""){
        contador = 0;
        setCookie(cname,contador,2);
    }
    document.getElementById("valorCookie").value=this.getCookie(cname);

    let enviar = document.getElementById("enviar");
    let borrar =document.getElementById("borrar");
    let recargar =document.getElementById("recargar");

    document.getElementById("form").onsubmit = function(e) {
        e.preventDefault();
      };
    
      enviar.addEventListener("click",confirmar);
      borrar.addEventListener("click",this.removeCookie);
      recargar.addEventListener("click",function(){location.reload();});
}

function setCookie(cname,cvalue,exdays){

    //document.cookie = "nombre = valor; expires = fecha; path = /ruta;"; Ejemplo de cookie
    let fecha = new Date();
    fecha.setTime(fecha.getTime()+exdays*24*60*60*1000); //le indicamos la fecha de expiracion en milisegundos
    document. cookie = cname + "="+cvalue+";expires="+fecha.toUTCString()+";";

}

function getCookie(cname){

    let aux = document.cookie.split(";");

    for (let i = 0; i<aux.length; i++){
        let aux2 = aux[i].split("=");
        if(aux2[0].trim()==cname){
            return aux2[1];
        }
    }
    return "";

}

function confirmar(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.checkValidity() == false || pass.checkValidity() == false){
        contador++;
        setCookie(cname,contador,2);
    }
}


function removeCookie(){

    setCookie(cname,"",0);
    valor.value = "";

}