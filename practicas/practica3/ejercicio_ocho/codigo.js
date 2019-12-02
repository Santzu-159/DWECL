let frase = "Test 123123329";
let patron="[0-9]{9}"; //busca 9 numeros entre el 0 y el 9


document.write(frase+"<br>");

document.write((frase.match(patron))[0]);

//match es un método string que ejecuta una busqueda por coincidencia en una frase y 
//devuelve un array con información (la frase coincidente) si lo encuentra o null si no existe coincidencia
