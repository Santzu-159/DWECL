
class Empleado{

    
    constructor(nombre,apellido,dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }


     mostrarNombrecompleto(){
         console.log("Empleado--> Nombre: "+this.nombre+" Apellido: "+this.apellido);
     }

     toString();
}


class Operario extends Empleado{

    constructor(nombre,apellido,dni,departamento,turno){
        super(nombre,apellido,dni);
        this.departamento = departamento;
        this.turno = turno;
    }

    mostrarDptYTurno(){
        console.log("Departamento: "+this.departamento+" Turno: "+this.turno);
    }

    toString();
}

class Tecnico extends Operario{
    
    constructor(nombre,apellido,dni,departamento,turno,especialidad,sueldo){
        super(nombre,apellido,dni,departamento,turno);
        this.especialidad = especialidad;
        this.sueldo = sueldo;
    }

    mostrarEpecialiYsueldo(){
        console.log("Especialidad: "+this.especialidad+" Sueldo: "+this.sueldo);
    }

   
    toString();
}

let tecnico1 = new Empleado("Luis","Rodriguez Marín","25368947Q","Asistencia","Mañana","Redes",1200);

console.log(tecnico1.especialidad);
console.log(tecnico1.mostrarEpecialiYsueldo());
console.log(mostrarDptYTurno());
console.log(tecnico1.mostrarNombrecompleto());
console.log(tecnico1.dni);