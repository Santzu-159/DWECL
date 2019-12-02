let email = prompt("Introduce tu email:"); //pedimos el email

if(validacion(email)){//hacemos la llamada de la funcion que nos valida si el email esta correctamente escrito o no
    document.write("El email es correcto."); //si contiene todos los valores, imprime que es correcto
}else{ //si no, dice lo contrario
    document.write("El email es incorrecto.");
}

function validacion(email){//funcion que nos chace la validación.
    let patron =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/; //creamos el patron
    if(patron.test(email)){ //test nos devuelve true si existe coincidencia con el patron usado y false si no
        return true;
    }else{
        return false;
    }
}