class Empleado{ //clase padre

    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    concentrarse(){
        return this.nombre+" "+this.apellido+", se esta concentrando en la siguiente jugada.<br>";
    }

    viajar(){
        return this.nombre+" "+this.apellido+", viajará con el equipo.<br>";
    }

}



class Futbolista extends Empleado{

    constructor(nombre,apellido,dorsal,demarcacion){
        super(nombre,apellido);
        this.dorsal=dorsal;
        this.demarcacion=demarcacion;
        super.viajar();
        super.concentrarse();
    }

    jugarPartido(){
        
        return this.nombre+" "+this.apellido+", jugará el siguiente partido.<br>";
    }

    entrenar(){
        return this.nombre+" "+this.apellido+", entrenará antes del partido.<br>";
    }

}



class Entrenador extends Empleado{

    constructor(nombre,apellido,idFederacion){
        super(nombre,apellido);
        this.idFederacion=idFederacion;
        super.viajar();
        super.concentrarse();
    }

    dirigirPartido(){
        return this.nombre+" "+this.apellido+", dirigirá el partido como entrenador.<br>";
    }

    dirigirEntrenamiento(){
        return this.nombre+" "+this.apellido+", dirigirá el entrenamiento como entrenador.<br>";
    }

}


class Masajista extends Empleado{

    constructor(nombre,apellido,titulacion,experiencia){
        super(nombre,apellido);
        this.titulacion=titulacion;
        this.experiencia=experiencia;
        super.viajar();
        super.concentrarse();
    }

    darMasaje(){
        return this.nombre+" "+this.apellido+" es el/la masajista del equipo.<br>";
    }

}

//---------------------------------- MAIN -------------------------------
document.write("<div align='center'><h4><u>Equipo</u></h4></div>")
//Futbolista

let f1 = new Futbolista('Cristiano','Ronaldo',15,'delantero');
let f2 = new Futbolista('Fernando','Torres',20,'medio');
let f3 = new Futbolista('Daniel','Ceballos',10,'defensa');

document.write("<b><u>Futbolistas: </u></b>")
document.write("<br>");
document.write(f1.viajar());
document.write("<br>");
document.write(f2.entrenar());
document.write("<br>");
document.write(f2.jugarPartido());
document.write("<br>");
document.write(f3.concentrarse());
document.write("<br>");
document.write(f3.jugarPartido());
document.write("<br>");
document.write("<br>");

//Entrenador

let e1 = new Entrenador('Luis','Medina',5842361);
let e2 = new Entrenador('Amanda','Ruiz',5428430);
let e3 = new Entrenador('Alejandro','Cortés',45124778);

document.write("<b><u>Entrenadores: </u></b>")
document.write("<br>");
document.write(e1.dirigirEntrenamiento());
document.write("<br>");
document.write(e1.dirigirPartido());
document.write("<br>");
document.write(e2.viajar());
document.write("<br>");
document.write(e3.concentrarse());
document.write("<br>");
document.write(e3.viajar());
document.write("<br>");
document.write("<br>");


//Masajista

let m1 = new Masajista('Sonia','Perez',5);
let m2 = new Masajista('Cristian','Martínez',20);
let m3 = new Masajista('Adolfo','Casanova',2);

document.write("<b><u>Masajistas: </u></b>")
document.write("<br>");
document.write(m1.darMasaje());
document.write("<br>");
document.write(m1.concentrarse());
document.write("<br>");
document.write(m2.viajar());
document.write("<br>");
document.write(m2.darMasaje());
document.write("<br>");
document.write(m3.viajar());


