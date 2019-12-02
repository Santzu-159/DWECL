let salarios = {
    Juan: 10000,
    Alicia: 16000,
    Lucas: 13000
};


let total=0;

for(let salario in salarios){
    
    total+=salarios[salario];
}

document.write(total);

