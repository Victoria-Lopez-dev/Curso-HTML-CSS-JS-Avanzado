
// let boton = document.querySelector('button');

//CALLBACK

// boton.addEventListener('click',()=>{
//     console.log("click!!")
// })


//FETCH -> tipo de promesas
//tipo de peticion GET -> quiero que me traiga datos
async function traerInfo() {

   let informacion;

   await fetch('https://rickandmortyapi.com/api/character')
    .then((respuesta)=> respuesta.json())
    .then((data)=> informacion=data)
    .catch((error)=>console.log(error)); 

     return informacion

}


async function muestreImg() {
    let info = await traerInfo();

    console.log(info)
    info.results.forEach((personaje)=>{
        if(personaje.status === "Alive"){
            let imagen = document.createElement('img');
            imagen.setAttribute("src",`${personaje.image}`)
            document.querySelector('.container').appendChild(imagen)
        }
        if(personaje.name[0] =="A"){
            console.log(personaje.name)
        }

    })
 
}
//arrow function
// const muestreImg= async ()=>{}
//fetch ( va a buscar el recurso , y cuando lo tenga va por el then o por el catch)

//hace el fetch y mostralo por consola

