class Vehiculo{

    constructor(numRuedas,color,nombre,vMax){

        this.numRuedas=numRuedas;
        this.color=color;
        this.nombre=nombre;
        this.vMax=vMax;
    }

    toString(){
        return "<br><br><div align='center'>"+
                        "<table border ='1px'>"+
                            "<tr>"+
                                "<td><b>Numero de ruedas: </b></td>"+
                                "<td>"+this.numRuedas+"</td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td><b>Color: </b></td>"+
                                "<td>"+this.color+"</td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td><b>Nombre: </b></td>"+
                                "<td>"+this.nombre+"</td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td><b>Velocidad Máxima: </b></td>"+
                                "<td>"+this.vMax+"</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div><br><br>";
    }

    static mayorNumRuedas(vehiculo1,vehiculo2){

        if(vehiculo1.numRuedas>vehiculo2.numRuedas){
            return "El vehículo 1 tiene más ruedas.";

        }else if(vehiculo2.numRuedas>vehiculo1.numRuedas){
            return "El vehículo 2 tiene más ruedas.";

        }else{
            return "Los dos vehículos tienen la misma cantidad de ruedas.";
        }

    }
}

class Automovil extends Vehiculo{

    constructor(numRuedas,color,nombre,vMax,nPasajerosT,nPasajerosAct){

        super(numRuedas,color,nombre,vMax);
        this.nPasajerosT=nPasajerosT;
        this.nPasajerosAct=nPasajerosAct;

    }

    toString(){
        return "<div align='center'>"+
        super.toString()+
                        "<table border ='1px'>"+
                            "<tr>"+
                                "<td><b>Numero total de pasajeros: </b></td>"+
                                "<td>"+this.nPasajerosT+"</td>"+
                            "</tr>"+
                            "<tr>"+
                                "<td><b>Numero actual de pasajeros: </b></td>"+
                                "<td>"+this.nPasajerosAct+"</td>"+
                            "</tr>"+
                        "</table>"+
                    "</div>";
    }
}



class Suv extends Automovil{

    constructor(numRuedas,color,nombre,vMax,reductora,traccion){

        super(numRuedas,color,nombre,vMax);
        this.reductora=reductora;
        this.traccion=traccion;

    }


    cNieve(){
       return "El coche es apto para circular por nieve, recuerde llevar cadenas.";
    }

    cTierra(){
       return "El coche es apto para circular por todo tipo de terreno.";
    }

}

//-------------------------------- MAIN -------------------------------------------

a1 = new Automovil(3,'Azul Electrico','Ford Focus',280,5,2);
a2 = new Automovil(5,'Gris Nardo','Audi',190,4,1);

s1 = new Suv(4,'Blanco','Jeep',280,5,3,'si','si');
s2 = new Suv(6,'Negro','Land Rover',190,5,0,'no','si');



document.write(a1.toString());
document.write("<br>");
document.write(Vehiculo.mayorNumRuedas(a2,s2));
document.write("<br>");
document.write(s1.cTierra());
document.write("<br>");
document.write(s2.cNieve());

