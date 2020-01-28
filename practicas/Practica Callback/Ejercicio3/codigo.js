let scriptCorrecto= "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js";
let scriptIncorrecto="https://cdnjs.pepito.com/ajax/libs/lodash.js/4.17.11/lodash.js"

window.onload=function(){
    loadScript(scriptCorrecto);
    loadScript(scriptIncorrecto);
}

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;

    let promesa = new Promise((resolve, reject) => {
        script.onload=()=>resolve();
        script.onerror=()=>reject();
    })
  
    promesa
        .then(()=>console.log("El script se ha cargado correctamente."))
        .catch(()=>console.log(new Error(`Error al cargar el script:  ${src}`)));
  
    document.head.append(script);
  }