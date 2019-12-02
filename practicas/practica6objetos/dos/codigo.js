//creamos el array de jugador 

class Jugador {

    constructor(nombre,ape,empl,niv,punt){

        this.nombre=nombre;
        let apellido=ape;
        let empleo=empl;
        let nivel=niv;
        let puntuacion=punt;

        

        //metodo toString

        this.toString =function(){

            return "<div align='center'>"+
                            "<table border ='1px'>"+
                                "<tr>"+
                                    "<td><b>Nombre: </b></td>"+
                                    "<td>"+this.nombre+"</td>"+
                                "</tr>"+
                                "<tr>"+
                                    "<td><b>Apellido: </b></td>"+
                                    "<td>"+apellido+"</td>"+
                                "</tr>"+
                                "<tr>"+
                                    "<td><b>Empleo: </b></td>"+
                                    "<td>"+empleo+"</td>"+
                                "</tr>"+
                                "<tr>"+
                                    "<td><b>Nivel: </b></td>"+
                                    "<td>"+nivel+"</td>"+
                                "</tr>"+
                                "<tr>"+
                                    "<td><b>Puntuación: </b></td>"+
                                    "<td>"+puntuacion+"</td>"+
                                "</tr>"+
                            "</table>"+
                        "</div>";
            
        }

        //metodo para resetear la puntuacion

        this.eliminarPunt = function(){
            puntuacion=0;
        }
    }

}


//Creamos a los jugadores

let jugador1 = new Jugador('Pepito','Grillo','Aconsejador','100','1000000');
let jugador2 = new Jugador('Mona','Lisa','Modelo','50','256032');

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