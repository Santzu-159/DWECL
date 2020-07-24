window.onload= function(){

    document.getElementById("form").onsubmit = function(e){
        e.preventDefault(); //Para que no se redirija la página en el submit para no perder los datos.
    }

    document.getElementById("form").addEventListener("submit",validar); //Cuando se pulse submit, se ejecuta el método de validacion

}

//funcion de validación
function validar(){

    //Declaramos las variables
    const userName = document.getElementById("username");
    userName.parentElement.className='form-control';
    const email = document.getElementById("email");
    email.parentElement.className='form-control';
    const password = document.getElementById("password");
    password.parentElement.className='form-control';
    const confirmPassword = document.getElementById("password2");
    confirmPassword.parentElement.className='form-control';

    //Patron del formato del email
    const patron = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //Validamos
    if(userName.value.trim().length > 3 && userName.value.trim().length < 15){
        userName.parentElement.className+=' success';
    }else{
        userName.parentElement.className+=' error';
        userName.nextElementSibling.textContent="El nombre de usuario debe de tener entre 3 y 15 caracteres.";
    }

    if(patron.test(String(email.value.trim()).toLowerCase())){
        email.parentElement.className+=' success';
    }else{
        email.parentElement.className+=' error';
        email.nextElementSibling.textContent="El email debe de tener formato de email.";
    }

    if(password.value.trim().length <6 || password.value.trim().length>25){
            password.parentElement.className+=' error';
            password.nextElementSibling.textContent="La contraseña debe de tener entre 6 y 25 caracteres.";

        }else if(confirmPassword.value.trim().length <6 || confirmPassword.value.trim().length>25){
            confirmPassword.parentElement.className+=' error';
            confirmPassword.nextElementSibling.textContent="La contraseña debe de tener entre 6 y 25 caracteres.";

        }else if(password.value.trim() != confirmPassword.value.trim()){
            password.parentElement.className+=' error';
            confirmPassword.nextElementSibling.textContent="Las contraseñas deben de coincidir";

            confirmPassword.parentElement.className+=' error';
            confirmPassword.nextElementSibling.textContent="Las contraseñas deben de coincidir";

        }else{
            password.parentElement.className+=' success';
            confirmPassword.parentElement.className+=' success';
        }

}