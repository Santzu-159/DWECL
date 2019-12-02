let vector= [];
let vector2=[];
let aleatorio;
let menorNum = 1001;

for(i=0;i<10;i++){
    aleatorio= Math.round(Math.random()*1001); //generamos numeros aleatorios
    vector[i]=aleatorio; //introducimos los numeros aleatorios dentro del array

    if(aleatorio < menorNum){ //comprobamos si el numero aleatorio es menor que el numero máximo de elementos.
        menorNum = aleatorio;
    }
}

for(i=0;i<vector.length;i++){

    if(vector[i]==menorNum){ //para saber si la posicion en la que estamos es en la que se encuentra el numero mas pequeño
        vector2=vector.slice(i);
    }
}

alert("Vector de tamaño 10: \n".concat(vector));
alert("Vector modificado: \n".concat(vector2));
