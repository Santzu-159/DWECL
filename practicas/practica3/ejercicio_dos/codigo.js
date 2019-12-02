let fechaIni = prompt("Introduce la fecha de inicio con el formato: YYYY-MM-DD");
let fechaFin = prompt("Introduce la fecha final con el formato: YYYY-MM-DD");

let fechaInicio = new Date(fechaIni);
let fechaFinal = new Date(fechaFin);

let miliSegDia = 86400000;

let miliDiferencia = fechaInicio - fechaFinal;

let dias = miliDiferencia / miliSegDia;

if(dias <0){

    dias = -dias;
}

alert("Hay "+dias+ "de diferencia entre las dos fechas introducidas.");

