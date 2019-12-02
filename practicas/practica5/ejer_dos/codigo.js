let pilots = [
    {
      id: 2,
      name: "Wedge Antilles",
      faction: "Rebels",
    },
    {
      id: 8,
      name: "Ciena Ree",
      faction: "Empire",
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire",
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels",
    }
];  

let faccion = pilots.filter(function(pilots) { return pilots.faction == 'Rebels';});
 
faccion = pilots.filter(pilots => pilots.faction == 'Rebels') ;

document.write('<b><br>Los Rebeldes son:</b>');

for (let f in faccion){

    document.write("<br>"+faccion[f].name);

}