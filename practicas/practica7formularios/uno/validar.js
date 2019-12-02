window.onload=function(){
    let boton = document.getElementById('enviar');
    document.getElementById("miFormulario").onsubmit= function(e){e.preventDefault();};
    boton.addEventListener("click",validar);
} 

function validar(){

    let nom = document.getElementById('nombre');
    let telf = document.getElementById('telefono');
    let dia = document.getElementById('dia');
    let mes = document.getElementById('mes');
    let ano = document.getElementById('ano');
    let mayor = document.getElementById('mayor');

    if(nom == null || nom.value.length == 0){
    document.write('ERROR: El campo nombre no debe ir vacío.');
    }

    if(telf == null || telf.value.length == 0 || isNaN(telf.value)){
    document.write('<br>ERROR: Debe ingresar un telf válido.');
    }

    if(isNaN(dia.value) || dia == null || dia.value.length == 0 || isNaN(mes.value) 
    ||mes == null || mes.value.length == 0 || isNaN(ano.value) ||ano == null || ano.value.length== 0){
        document.write('<br>ERROR: Debes de elegir una fecha válida.');
    }

    if(!mayor.checked){
        document.write('<br>ERROR: Tienes que ser mayor de edad.');
    }
    
    document.write("<br><a href='index.html'>Volver</a>");
}
 