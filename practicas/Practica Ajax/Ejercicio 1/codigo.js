  
document.getElementById('cAlumnos').addEventListener('click',todos);
function todos(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        //readyState 4 es que la petición ha finalizado y ya está lista
        //status 200 es el estatus Ok
        if(this.readyState==4 && this.status==200){
            textXML(this);

        }
    }
    xhr.open("GET","alumnos.xml",true);
    xhr.send();
}

function textXML(xml){
    document.getElementById('cAlumnos').style.display='none';
    let docXML = xml.responseXML;
    let tabla  = "<tr><th>Nombre</th><th>Apellidos</th><th>Nota</th><th>Convocatoria</th></tr>";
    let alumnos = docXML.getElementsByTagName("alumno");
    for(let i=0;i<alumnos.length;i++){
        tabla+="<tr><td>";
        tabla+=alumnos[i].getElementsByTagName("nombre")[0].textContent;
        tabla+="</td><td>";
        tabla+=alumnos[i].getElementsByTagName("apellido")[0].textContent;
        tabla+="</td><td>";
        nota=alumnos[i].getElementsByTagName("nota")[0];
        tabla+=nota.textContent;
        tabla+="</td><td>";
        tabla+=nota.getAttribute("convocatoria");
        tabla+="</td></tr>";
    }
    document.getElementById('tAlumnos').innerHTML=tabla;
}