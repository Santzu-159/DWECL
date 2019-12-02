//creamos el array de jugador 

let jugador ={
    nombre:'Luis',
    apellido:'Rodriguez',
    empleo:'Oficinista',
    nivel:'10',
    puntuacion:'800',


//añadimos el constructor para inicializar los elementos del array

    init: function(nombre,apellido,empleo,nivel,puntuacion){

        this.nombre=nombre;
        this.apellido=apellido;
        this.empleo=empleo;
        this.nivel=nivel;
        this.puntuacion=puntuacion;

    ;},

//metodo toString

    toString: function(){

        return "<div align='center'>"+
                        "<table border ='1px'>"+
                            "<tr>"+
                                "<td><b>Nombre: </b></td>"+
                                "<td>"+this.nombre+"</td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td><b>Apellido: </b></td>"+
                                "<td>"+this.apellido+"</td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td><b>Empleo: </b></td>"+
                                "<td>"+this.empleo+"</td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td><b>Nivel: </b></td>"+
                                "<td>"+this.nivel+"</td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td><b>Puntuación: </b></td>"+
                                "<td>"+this.puntuacion+"</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>";
          
    },

    //metodo para resetear la puntuacion

    eliminarPunt: function(){
        this.puntuacion=0;
    }

};


//Creamos a los jugadores

let jugador1 = Object.create(jugador);
let jugador2= Object.create(jugador);

jugador1.init('Pepito','Grillo','Aconsejador','100','1000000');
jugador2.init('Mona','Lisa','Modelo','50','256032');

//guardamos los jugadores en un array

let arrJugador = [jugador1, jugador2];

//Mostramos los jugadores

arrJugador.forEach(

    function(j){
    document.write(j.toString());
    document.write("<br>");
    }
    
);

//eliminamos la puntuacion del jugador2
document.write("<div align='center'>Eliminación de la puntuación de jugador 2: </div><br>");
jugador2.eliminarPunt();
document.write(jugador2.toString());