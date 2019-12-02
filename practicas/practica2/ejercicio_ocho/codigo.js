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



alert("Vector de tamaño 10: \n".concat(vector));
