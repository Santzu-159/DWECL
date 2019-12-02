let array =[0,7,2,3,4,2,6,2,8,2];

alert("El array antes de modificarlo con Splice: \n"+array);

for(i = 0; i<array.length;i++){ //hacemos un for para que recorra todo el array (con .length que nos dice su longitud)

    if(array[i]==2){ //si se encuentra un dos lo reemplaza por dos unos. 
        array.splice(i,1,1,1);
    }
}
alert("El array despues de modificarlo con Splice: \n"+array);