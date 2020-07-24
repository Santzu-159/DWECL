let valor;

window.onload = function(){

    let monedaBase = document.getElementById("currency-one");
    let monedaCambio = document.getElementById("currency-two");
    let btn = document.getElementById('swap');

    llamadaAPI(monedaBase.value,monedaCambio.value);

    monedaBase.addEventListener('change',function(){
        llamadaAPI(monedaBase.value,monedaCambio.value);
    });

    monedaCambio.addEventListener('change',function(){
        llamadaAPI(monedaBase.value,monedaCambio.value);
    });

    btn.addEventListener('click',intercambio);

}


function llamadaAPI (monedaBase,monedaCambio){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){

        if(this.readyState==4 && this.status==200){

            let archivoJson = JSON.parse(this.responseText).rates;
            let resultado = document.getElementById("rate");

            valor = archivoJson[monedaCambio];
            resultado.innerHTML = archivoJson[monedaBase]+" "+monedaBase+" = "+archivoJson[monedaCambio]+" "+monedaCambio;

        }
    }

    xhr.open("GET",'https://api.exchangerate-api.com/v4/latest/'+monedaBase,true);
    xhr.send();

   }

   function intercambio(){

    let input1 = document.getElementById('amount-one');
    let input2 = document.getElementById('amount-two');

    input2.value = Math.round(input1.value*valor*100/100);

   }
