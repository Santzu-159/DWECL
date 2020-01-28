document.getElementById('cargarDatos').addEventListener('click',run);

function run(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            cargarDatos(this);
        }
    }
    xhr.open("GET",'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick ',true);
    xhr.send();

}


function cargarDatos(xhr){
let maquillaje = JSON.parse(xhr.responseText);
alert(maquillaje[0].name);

}



