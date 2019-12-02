function validar(){
    
    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad");
    let telefono = document.getElementById("telefono");
    let mensajeE = document.getElementById("mensajeError");
    let texto="";
    if(!nombre.checkValidity()){

        if(nombre.validity.valueMissing){
            denotarError(nombre,"El campo nombre no puede estar vacío.");
        }

        if(nombre.validity.patternMismatch){
            denotarError(nombre,"El campo nombre debe de contener de 2 a 15 letras mayusculas y/o minusculas.");
        }

        if(nombre.validity.tooShort){

            denotarError(nombre,"El campo nombre no puede tener menos de 2 caracteres");
        }

        if(nombre.validity.tooLong){
            denotarError(nombre,"El campo nombre no puede tener mas de 15 caracteres");
        }
        
    }else{
        borrarError(nombre);
    }


    if(!edad.checkValidity()){
        if(edad.validity.valueMissing){
            texto=texto+"El campo edad no puede estar vacío.<br>";
        }

        if(edad.validity.rangeUnderflow){
            texto=texto+"El campo edad no puede ser inferior a 18 años.<br>";
        }

        if(nombre.validity.rangeOverflow){
            texto=texto+"El campo edad no puede ser superior a 100 años.<br>";
        }
    }



    if(!telefono.checkValidity()){
         if(telefono.validity.valueMissing){
            texto=texto+"El campo telefono no puede estar vacío.<br>";
        }

        if(telefono.validity.patternMismatch){
            texto=texto+"El campo telefono debe de contener exclusivamente 9 números.<br>";
        }
    }

    if(texto==""){
        console.log("Hagoclick");
        document.getElementById("miFormulario").submit();
        
    }

}


function denotarError(elemt,mensajeError){
    
    let mensajeE = document.getElementById("mensajeError");
    let texto = mensajeE.innerHTML+mensajeError+"<br>";
 
    mensajeE.innerHTML = texto;
    elemt.className="error";

}

function borrarError(elemt){
    elemt.className="";
    document.getElementById("mensajeError").innerHTML="";
}