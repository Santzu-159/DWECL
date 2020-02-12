const name = "patata";
let item = document.getElementById("item");
let ull = document.getElementsByTagName("ul")[0];

if (typeof Storage == "undefined") {
    alert("El navegador NO soporta WebStorage");
  } else {
    
    mostrar();

    document.getElementById("miFormulario").onsubmit = function(e) {
        e.preventDefault();
      };

      document.getElementById("clear").addEventListener("click", function() {
        localStorage.clear();
        ull.innerHTML = "";
      });
    
      item.addEventListener("keypress", function(e) {
    
          
        if (e.key === "Enter") {
          añadir(name, item.value);
          item.value = "";

        }
      });
}

function añadir(name,value){

    if(localStorage.getItem(name)!=null){
        localStorage.setItem(name,localStorage.getItem(name)+"<li>"+value+"</li>");
    }else{
        localStorage.setItem(name,"<li>"+value+"</li>");

    }

    mostrar();
}

function mostrar(){
    
 ull.innerHTML = localStorage.getItem(name);
}