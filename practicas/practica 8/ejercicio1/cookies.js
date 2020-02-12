const cname = "cookie";
let valor = document.getElementById("valor");

window.onload = function(){

    document.getElementById('guardar').addEventListener('click',function(){
        let fecha = new Date();
        hora = fecha.getHours()+":";
        if(fecha.getMinutes()<10){
            hora+="0";
        }
        hora += fecha.getMinutes();
        setCookie(cname,hora,90)
    });
    document.getElementById('obtener').addEventListener('click',function(){
        valor.value = getCookie(cname);
    });
    document.getElementById('borrar').addEventListener('click',function(){
        removeCookie(cname);
    });
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

function removeCookie(cname){

    setCookie(cname,"",0);
    valor.value = "";

}