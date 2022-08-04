let titulo = document.querySelector("h1")
console.log(titulo)
if(titulo !== null){
    titulo.addEventListener('click',()=>{console.log("hola")})
}

let botonCompra = document.querySelectorAll(".boton-compra");
let contador =0;

let datoProducto={
    nombreProd:"silla",
    precio:200
}

function actualizar(){
    //si tiene cosas cargadas por comprar
   let valorCompra= localStorage.getItem("chango-valor");
   let contadorProducto=document.querySelector(".circulo");
   contadorProducto.textContent=valorCompra;

   //si tiene un tema de estilo
   let temaEstilo= sessionStorage.getItem("tema");

   if(temaEstilo === "noche"){
    document.querySelector('body').classList.add("fondo");
   }
}

//pliegue y despliegue del navegador
function desplegar(){
    let botonesTema=document.querySelectorAll(".boton");
    botonesTema.forEach((btn)=> btn.classList.toggle("show"))
}

//cambio de tema 
function noche() {
    let botones=document.querySelectorAll(".boton");

    botones.forEach((btn)=> btn.classList.add("botonNight"));
    document.querySelector('body').classList.add("fondo");

    sessionStorage.setItem("tema","noche");
    
   
}

//carrito de compras
botonCompra.forEach((btn)=>{

    btn.addEventListener("click",()=>{
        let contadorProducto=document.querySelector(".circulo");
        contador++
        contadorProducto.textContent=contador
        localStorage.setItem("chango-valor",contador)
        localStorage.setItem("productos-seleccionados",JSON.stringify(datoProducto))

        localStorage.setItem("objeto sin info",datoProducto)
    })
})

function borrarDatoChango(){
    localStorage.removeItem("chango-valor")
}

//sessionStorage.setItem("nombre","Usuario correcto")
/*--------------*/
// function name() {
    
// localStorage.setItem("variable1","Juan Carlos");
// sessionStorage.setItem("dato2","sfhskdjhfkjshfjdk")
// }
// //setItem(clave,valor) ->guardar info

// // name()
// //getItem(clave)-> acceder al dato guardado

// let dato= localStorage.getItem("variable1")

// let dato2=sessionStorage.getItem("dato2")

// console.log(dato)
// console.log(dato2)

// //removeItem()

// localStorage.removeItem("nombre");

// sessionStorage.removeItem("dato2");

// SIEMPRE GUARDO STRINGS con web Storage (localStorage o sessionStorage)

//para guardar array o objetos utilizo el JSON.stringify() para transformarlo a string

//lo busco , pero como me devuelve un string lo transformo de nuevo a array o objeto con JSON.parse()