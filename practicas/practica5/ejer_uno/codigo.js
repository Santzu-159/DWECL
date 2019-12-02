let pilotos = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },

    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },

    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];

let total = pilotos.reduce(function(acumulador, pilotos) { return acumulador + pilotos.years;},0);

total = pilotos.reduce((acumulador, pilotos) => acumulador + pilotos.years, 0);
document.write("<b>El total de años es: </b>"+total+"<br>");

let datos= pilotos.reduce((mayorP,pilotos) => mayorP.years<pilotos.years ? mayorP=pilotos : mayorP=mayorP);

document.write("<b>El piloto de más años trabajados es: </b>"+datos.name);


    



