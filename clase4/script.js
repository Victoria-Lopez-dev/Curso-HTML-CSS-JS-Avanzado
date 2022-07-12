// if(condicion){
//     /* cosas que hago */
// }

//                  0       1       2   
let listaALumnos =[{nombre:"Juan"},{nombre:"Maria"},{nombre:"Valeria"},{nombre:"Valeria"},{nombre:"Valeria"},{nombre:"Valeria"}]//length = 3
let main= document.querySelector('main')
console.log(listaALumnos[0])
console.log(listaALumnos[1])
console.log(listaALumnos[2])

/*BUCLES */

// let i=0
//i++ es igual a escribir i=i+1
//i-- es igual a escribir i=i-1

/*    inicial      condicion           final   */
//      i=3            
// for (let i= 2; i >=0; i--) {
//     alert(listaALumnos[i])
// }

for (let i = 0; i < listaALumnos.length; i++) {
    let item= document.createElement('p');
    item.classList.add('texto')
    item.innerHTML=listaALumnos[i].nombre;

    main.appendChild(item)
    
}


