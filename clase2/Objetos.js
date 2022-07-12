//Objetos
//Alumno
//nombre, apellido, edad, cursoInsc

let alumno1={
    nombre:"Juan",
    edad:32,
    turnoTarde:true,
    apellido:"Perez"
}
//  clave    valor   
// propiedad:valor


let alumno2={
    nombre:"Ana",
    apellido:"Lopez",
    edad:60,
    cursoInsc:["HTML,CSS","JavaScript","Bootstrap"]
}
//Array de alumnos

let alumnos=[alumno1,alumno2]

console.log(alumno2.apellido )// "Lopez"

alumno1.cursoInsc= "JavaScript";
delete alumno1.turnoTarde
console.log(alumno1)

let unNuevoAlumno={
    nombre:"Bla",
    apellido:"Blabla",
    edad:20
}

alumnos.push({
    nombre:"Bla",
    apellido:"Blabla",
    edad:20
})


function agregarAlumno(nombreAlumno,apellidoAlumno,edadAlumno) {
    let nuevaCarga={
        nombre:nombreAlumno,//"Maria"
        apellido:apellidoAlumno,// "Gutierrez"
        edad:edadAlumno//15
    }
    alumnos.push(nuevaCarga)
    
}

agregarAlumno("Jose","Gomez",40);
agregarAlumno("Maria","Gutierrez",15)

function agregar() {
    //esta funcion la llamo en un evento y obtengo el valor del input para cargarlo en el array
  let input=document.querySelector("input")

    alumnos.push({
        nombre:input.value
    } )
}

