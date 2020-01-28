let p1 = new Promise((resolve, reject) => { setTimeout(resolve, 1000, "Primera premisa"); });

let p2 = new Promise((resolve, reject) => { setTimeout(resolve, 3000, "Segunda Premisa"); });

let p3 = new Promise((resolve, reject) => { setTimeout(resolve, 2000, "Tercera Premisa"); });



function promiseAll(){
    Promise.all([p1,p2,p3]).then(values => console.log(values)); //espera que termine todas y ejecuta todas.
}

function promiseRace(){
    Promise.race([p1,p2,p3]).then(values => console.log(values)); //muestra la que antes termina de ejecutarse
}                                                                                 