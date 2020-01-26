  
document.getElementById('cAlumnos').addEventListener('click',todos);
function todos(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            cargarHTML(this);

        }
    }
    xhr.open("GET","alumnos.html",true);
    xhr.send();
}

function cargarHTML(xhr){
    document.getElementById('cAlumnos').style.display='none';
    document.getElementById('tAlumnos').innerHTML=xhr.responseText;
}