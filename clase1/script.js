//variables: utilizamos let- const ; tratamos de evitar el var
//scope- alcance 
//variables globales
let palabra = "Hola";
const numero=321321;
let verdadero=true ;

//funciones
//definicion
function saludar(saludo) {
    //variable local
    let otraVariable="soy un string"
    alert(palabra)
    console.log(saludo)
}


//otra forma de decinirlo
let saludar2=(saludo)=>{
       //variable local
       let otraVariable="soy un string"
       alert(palabra)
       console.log(saludo) 
}

// saludar2("parametro")
// console.log(otraVariable)//tira error por ser una variable local

// saludar("HOLAAAA")
// saludar(numero)

function promedio(num1,num2) {
    
    let suma = num1+num2
    console.log(suma/2)
}

// promedio(20,40)
// promedio(2,1)


/*--------------------    ----------------------*/

let unTexto=document.querySelector("#text1");
let boton= document.querySelector("button");// el primer elemento que cumple con ese selecto
let texto2 = document.getElementById("text2");

let botones= document.querySelectorAll("button");//todos los button que encuentre
let imagenes= document.getElementsByTagName("img");//todas las imagenes que encuentre

let tarjetas = document.getElementsByClassName("card");//todos los elementos que comparten esa clase

let indicar=()=>{
    console.log("paso el mouse por arriba")
}
//una opcion de agregar eventos
boton.addEventListener('mouseover',indicar);

botones[0].addEventListener('click',()=>{
    texto2.classList.add("card");
});


//otra opcion es en vez de usar el addEventListener usamos los atributo "on..".
//Ejempo: onclick, onmouseover,etc..

/*--------------- Array - listas - Vectores -------------*/
// indice   0       1      2    3               4
let lista1=["hola",1231 ,true,indicar,numero ];
let encontrado=false;

//bucles
// for (tradicional o el for-of)
//while
//do while
//forEach , map  -> funciones creadas por JS 

//condicionales
//if if/else
//operador ternario
//switch

for (let i = 0; i < lista1.length; i++) {
 
    if(lista1[i]=== 1234533){
        lista1.push(palabra);
        console.log("Se encontro el item")
        encontrado=true; 
    }
   
}

if(encontrado === false){
    console.log("item no encontrado")
}

// PARA LA PROXIMA CLASE:
//arrancar con Objetos 
//Video y Audio