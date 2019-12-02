const iceCreams =[
    {flavor: 'pineaple', color: 'white'},
    {flavor: 'strawberry', color: 'red'},
    {flavor: 'watermelon', color: 'red'},
    {flavor: 'kiwi', color: 'green'},
    {flavor: 'mango', color: 'yellow'},
    {flavor: 'pear', color: 'green'},
];


//Obtener un Array con los helados de color rojo

let colores = iceCreams.filter(iceCreams => iceCreams.color == 'red') ;

document.write('<b><br>Frutas de color rojo:</b>');

for (let c in colores){

    document.write("<br>"+colores[c].flavor+" -> "+colores[c].color);

}

//Obtenemos un array de solo sabores

document.write('<br><br><b>Todos los sabores de frutas:</b>');

let sabores = iceCreams.map(iceCreams => iceCreams.flavor);

document.write("<br>"+sabores);
