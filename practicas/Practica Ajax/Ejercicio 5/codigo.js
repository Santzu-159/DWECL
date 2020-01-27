let httpRequest;

if (window.XMLHttpRequest) {
  httpRequest = new XMLHttpRequest();

} else if (window.ActiveXObject) {
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");

} else {
  console.error("Error: El navegador no admite AJAX.");
}

httpRequest.onload = obtenerRespuesta;
httpRequest.open("GET", "persona.json", true);
httpRequest.overrideMimeType("text/plain");
httpRequest.send(null);

function obtenerRespuesta() {

  let respuesta = JSON.parse(httpRequest.responseText);
  let container = document.createElement("div");
  container.className='container mt-5 text-center';
  let lista = document.createElement("ul");

  for (let i = 0; i < respuesta.personas.length; i++) {
    let item = obtenerElemeto(respuesta.personas[i]);
    lista.appendChild(item);
  }

  document.body.appendChild(container);
  container.appendChild(lista);
}

function obtenerElemeto(persona) {

  let item = document.createElement("li");
  item.innerHTML =
    "<b>Alumno:</b> " +
    persona.nombre +
    ", <b>Edad:</b> " +
    persona.edad +
    ", <b>Domicilio:</b> " +
    persona.ciudad;
  return item;

}