function tema(){
   let temaEstilo= sessionStorage.getItem("tema");

   if(temaEstilo === "noche"){
    document.querySelector('body').classList.add("fondo");
   }
}

// let nombre= prompt("Ingrese un nombre")

// sessionStorage.setItem("nombre-ingresado",nombre)

let infoProd=localStorage.getItem("productos-seleccionados");
let objetoProd=JSON.parse(infoProd)
console.log(infoProd.precio)// transformo de string a objeto 



console.log(localStorage.getItem("objeto sin info"))
//JSON ->   JSON.stringify() Array a JSON
//JSON.parse() transformar de JSON a Array de objetos [], {}
`[{
    nombreProd:"silla",
    precio:200
},
{
    nombreProd:"silla",
    precio:200
},{
    nombreProd:"silla",
    precio:200
}

]`