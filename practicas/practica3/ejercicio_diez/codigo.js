document.write("<b>American Express : </b>^3[47][0-9]{13}$<br>");
document.write("- El simbolo de la potencia(^) indica que el siguiente caracterer debe de ser el primero en aparecer, en este caso, el 3.<br>"+
                "- Los corchetes ([]) indican que deben de aparecer uno de los caracteres que tenga dentro, en este caso, el 4 o el 7.<br>"+
                "- Los corchetes con caracteres separados con un guión, indican los limites, es decir, <br> en nuestro caso, el caracter debe de encontrarse entre el 0 y el 9, ambos incluidos.<br>"+
                "- Las llaves indican la cantidad de caracteres que debe de cumplir el patrón anterior. Es decir, debe de haber 13 números del 0 al 9.<br><br>");

document.write("<b>Dinner's Club :</b>^3(?:0[0-5]|[68][0-9])[0-9]{11}$<br>");
document.write("- El primer caracter debe de ser 3.<br>"+
                "- (?: No captura el grupo de tokkens que se encuentran entre los parentesis.<br>"+
                "- El siguiente caracter debe de ser 0.<br>"+
                "- El caracter debe de encontrarse entre 0 y 5.<br>"+
                "- Es una expresión que indica que se debe de cumplir una de las dos expresiones, (es un OR).<br>"+
                "- El caracter debe de ser el 6 o el 7.<br>"+
                "- El caracter debe de encontrarse entre 0 y 9.<br>"+
                "- Esta ultima condicion se repite 11 veces.<br>"+
                "- $ Indica final de la cadena o línea.<br><br>");

document.write("<b>Discover :</b>^6(?:011|5[0-9]{2})[0-9]{12}$<br>");
document.write("- El primer caracter debe de ser 6.<br>"+
                "- (?: No captura el grupo de tokkens que se encuentran entre los parentesis.<br>"+
                "- El siguiente caracter debe de ser 0.<br>"+
                "- El siguiente caracter debe de ser 1.<br>"+
                "- El siguiente caracter debe de ser 1.<br>"+
                "- Es una expresión que indica que se debe de cumplir una de las dos expresiones, (es un OR).<br>"+
                "- Debe de haber dos caracteres comprendidos entre el 0 y el 9.<br>"+
                "- Debe de haber doce caracteres comprendidos entre el 0 y el 9.<br>"+
                "- $ Indica final de la cadena o línea.<br><br>");

document.write("<b>Master Card :</b>5[1-5][0-9]{14}$<br>");
document.write("- El primer caracter debe de ser 5.<br>"+
                "- El caracter debe de encontrarse entre 1 y 5.<br>"+
                "- Debe de haber 14 caracteres entre 0 y 9.<br>"+
                "- $ Indica final de la cadena o línea.<br><br>");


document.write("<b>Visa :</b>^3[47][0-9]{13}$<br>");
document.write("- El primer caracter debe de ser 3.<br>"+
                "- Los corchetes ([]) indican que deben de aparecer uno de los caracteres que tenga dentro, en este caso, el 4 o el 7.<br>"+
                "- Debe de haber 13 caracteres entre 0 y 9.<br>"+
                "- $ Indica final de la cadena o línea.<br><br>");

document.write("<b>Visa, Mastercard, Discover :</b>^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$<br>");
document.write("- Si coincide con el comienzo de la cadena, o de la línea si el indicador de multilínea (m) está habilitado<br>"+
                "- No captura el grupo de tokens que se encuentran entre el paréntesis.<br>"+
                "- El siguiente caracter debe de ser 4.<br>"+
                "- El siguiente caracter debe de ser un dígito.<br>"+

                "- Grupo de captura #1, agrupa varios tokens y crea un grupo de captura para extraer una subcadena o usar una referencia inversa.<br>"+
                "- Debe de haber un caracter o un espacio.<br>"+
                "- Coincidencia entre 0 y 1 del token anterior.<br>"+
                "- El siguiente caracter debe de ser un dígito.<br>"+
                "- 6 coincidencias del token anterior.<br>"+
                "- Coincidencia con el grupo de captura #1.<br>"+
                "- El siguiente caracter debe de ser un dígito.<br>"+
                "- 5 coincidencias del token anterior.<br>"+
                "- Es una expresión que indica que se debe de cumplir una de las dos expresiones, (es un OR).<br>"+
                "- (?: No captura el grupo de tokkens que se encuentran entre los parentesis.<br>"+
                "- El siguiente caracter debe de ser 4.<br>"+
                "- El siguiente caracter debe de ser un dígito.<br>"+
                "- 3 coincidencias del token anterior.<br>"+
                "- Es una expresión que indica que se debe de cumplir una de las dos expresiones, (es un OR).<br>"+
                "- El siguiente caracter debe de ser 5.<br>"+
                "- El caracter debe de encontrarse entre 1 y 5.<br>"+
                "- El siguiente caracter debe de ser un dígito.<br>"+
                "- 2 coincidencias del token anterior.<br>"+
                "- Actua igual que un OR. Coincide con la expresión antes o después del \'|\'.<br>"+
                "- El siguiente caracter debe de ser 6.<br>"+
                "- El siguiente caracter debe de ser 0.<br>"+
                "- El siguiente caracter debe de ser 1.<br>"+
                "- El siguiente caracter debe de ser 1.<br><br>"+
                "- Grupo de captura #2, agrupa varios tokens y crea un grupo de captura para extraer una subcadena o usar una referencia inversa.<br>"+
                "- Debe de haber un caracter o un espacio.<br>"+
                "- Coincidencia entre 0 y 1 del token anterior."+
                "- El siguiente caracter debe de ser un dígito.<br>"+
                "- 4 coincidencias del token anterior.<br>"+
                "- Coincidencia con el grupo de captura #2.<br>"+
                "- El siguiente caracter debe de ser un dígito.<br>"+
                "- 4 coincidencias del token anterior.<br>"+
                "- Coincidencia con el grupo de captura #2.<br>"+
                "- El siguiente caracter debe de ser un dígito.<br>"+
                "- 4 coincidencias del token anterior.<br>"+
                "- $ Final de cadena o, final de línea si el indicador de multilínea (m) está habilitado.<br><br>");
