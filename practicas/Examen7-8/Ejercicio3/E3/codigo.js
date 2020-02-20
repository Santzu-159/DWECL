window.onload = function(){

    //Eventos que necesitamos cuando realizamos acciones con el chat

    let texto1 = document.getElementById("texto1");
    texto1.addEventListener("keypress",function(e) {
        if (e.key === "Enter") {
          add('usuario1',texto1);
        }
    });

    document.getElementById("botonAnadir1")
    .addEventListener('click',function(){
        add('usuario1',texto1);
    });

    let texto2 = document.getElementById("texto2");
    texto2.addEventListener("keypress",function(e) {
        if (e.key === "Enter") {
            add('usuario2',texto2);
        }
    });

    document.getElementById("botonAnadir2")
    .addEventListener('click',function(){
        add('usuario2',texto2);
    });

    document.getElementById("botonLimpiar")
    .addEventListener('click',limpiar);

   
    if(localStorage.getItem('chat')==null){ //Comprobamos si el chat esta vacío
        localStorage.setItem('chat',"");
    }else{
        this.escribir();
    }

}

function add(usuario,texto){
    if(localStorage.getItem(usuario)==null){
        let value = prompt('Por favor, introduce tu nombre'); //Pedimos que nos introduzca el nombre si no lo tenemos
        localStorage.setItem(usuario,value); //Lo "guardamos"
    }

    let nombre = localStorage.getItem(usuario); //Obtenemos el usuario y lo guardamos en la variable nombre

    localStorage.setItem(nombre,texto.value);

    localStorage.setItem('chat', localStorage.getItem('chat')+nombre+" : "+ localStorage.getItem(nombre)+"\n");

   this.escribir(); 
   texto.value="";
}


function escribir(){
   document.getElementById('textarea').innerHTML=localStorage.getItem('chat');//funcion para escribir en el chat
}


function limpiar(){
   localStorage.setItem('chat',""); //funcion para limpiar el chat
   //eliminamos los usuarios
   localStorage.removeItem('usuario1');
   localStorage.removeItem('usuario2');
   escribir(); //llamamos de nuevo a la funcion de escribir
}