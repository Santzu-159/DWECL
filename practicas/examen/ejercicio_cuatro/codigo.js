let nombre = prompt("Introduce el nombre:");
let apellido = prompt("Introduce tu apellido:");
let email = prompt("Introduce el email:");
let pass = prompt ("Introduce la contraseña:");


function comprobarNombre(nombre){

    if(nombre.match("[A-Z][a-zA-Z]{10}")){

        return alert("Su nombre es: "+nombre);

    }else{

        return alert("El nombre debe de empezar por mayúscula.");
    }

}

comprobarNombre(nombre);



function comprobarApellido(apellido){

    if(apellido.match("([a-zA-Z]{10})\s([a-zA-Z]{10})")){

        return alert("Su apellido es: "+apellido);

    }else{

        return alert("El apellido debe de constar de dos palabras separadas por un espacio.");
    }

}

comprobarApellido(apellido);


function comprobarEmail(email){

    if(email.match("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")){

        return alert("Su email es: "+email);

    }else{

        return alert("El email debe de tener el formato xxxx.yyyy@xxxx.xxx");
    }

}

comprobarEmail(email);




function comprobarPass(pass){

    if(pass.match("^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8}$")){

        return alert("Su contraseña es: "+pass);

    }else{

        return alert("La contraseña debe de tener al menos una letra mayuscula, una letra minúscula y un dígito.<br> Y sçolo 8 caracteres");
    }

}

comprobarPass(pass);



