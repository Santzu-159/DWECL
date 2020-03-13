let seleccionada;
window.onload=function(){

    //let tr = document.getElementsByTagName("tr")[0];
    //let td = tr.document.getElementsByTagName("td")[0];
    let filas = document.getElementsByTagName("tr");
                seleccionada = filas[1];
                for(let i =0; i<filas.length; i++){
                    filas[i];
                }

    let td = seleccionada.getElementsByTagName("td");
    //td[2].innerHTML = document.getElementById("age").value;
    
    for(i=0;i< td.length; i++){
        td.style.backgroundColor = "red";
    }

} 

