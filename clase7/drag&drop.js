//Eventos
let titulo = document.querySelector('h1');
//una forma, utilizando el evento como atributo
function alertaMouseOver() {
    alert("Se realizo un mouseover en el titulo")
}

//utilizando el metodo addEventListener
titulo.addEventListener('mouseover',()=>{
    titulo.style.color="red";
})



// let moverCohete=()=>{
//     let imagenC= document.querySelector('img');
//     let zonaDestino = document.querySelector(".container")
//      imagenC.style.display="none";
//     zonaDestino.innerHTML=` <img src="./imagenes/cohete.jpg">`


// }

// Alternativa de funcion: function moverCohete() {
    
// }

//Drag and drop - API 

//1- que el elemento sea 'arrastrable' ya sea por defecto o forzado ( atributo draggable=true)
// Nos da Eventos

// Elemento que voy a arrastrar
//Eventos del elemento a arrastrar:

//dragstart -> cuando se inicia el arrastre
//dragend -> cuando la imagen se suelta 
//drag -> mientras esta siendo arrastrado

//setData(tipo, dato) STRINGS 
//Text - URL - "text/plain" - "text/html" - "text/uri-list"

let cohete= document.querySelector('img');

// cohete.addEventListener('dragstart',(event)=>{
//     console.log("se inicio el arraste");

//    event.dataTransfer.setData("Text","./imagenes/cohete.jpg")
// })

// cohete.addEventListener('dragend',()=>{
//     console.log("se solto el elemento");
//     cohete.style.display="none";
    
// })

// cohete.addEventListener('drag',()=>{
//     console.log("evento drag escuchando...")
// })


let zonaDestino = document.querySelector(".container")
//Zona de destino 
//Eventos de la zona destino

//dragenter -> se activa cuando pasamos con el maus + el elemento arrastrado
//dragleave -> lo contrario al dragenter
//dragover-> drag  se ejecuta siempre que el elemento + mouse esten sobre ela zona destino
//drop -> cuando suelto el elemento dentro de la zona de destino

// zonaDestino.addEventListener('dragenter',()=>{
//     console.log("esta el mouse con el elemento")
// })
// zonaDestino.addEventListener('dragleave',()=>{
//     console.log("evento dragleave")
// })



// zonaDestino.addEventListener('dragover',(event)=>{
   
//     event.preventDefault()//para que yo pueda manipular lo que pase cuando se suelte el elemento.Para que me "deje" usar el evento 'drop'
// })

// zonaDestino.addEventListener('drop',(event)=>{
//     let infoSrc=event.dataTransfer.getData("Text");
    
//     zonaDestino.innerHTML=`<img src="${infoSrc}"/>`;
//      cohete.style.display="none";


// })

/*--- ---*/

//Elemento a arrastrar : dragstart
//Zona destino : dragover - drop 


/*-- dataTransfer --*/
//Objeto que nos brinda ? evento 
//objeto -> metodos y propiedades
//metodos:
//setData() -> "guardar info"
//getData() -> obtener esa info que guardamos
//clearData()
//setDragImage()
//propiedades
//files -> array 




/*-------------------------------------------------*/ 
//cuando traemos un archivo desde la "compu" al sitio
zonaDestino.addEventListener('dragover',(event)=>{
   
    event.preventDefault()
});
zonaDestino.addEventListener('drop',(event)=>{
   
    let archivoAcargar=event.dataTransfer.files[0];
    console.log(archivoAcargar)//

    if(archivoAcargar.type == "application/pdf"){
    zonaDestino.innerHTML=`<img src="./imagenes/img-pdf.png"/><p>${archivoAcargar.name}</p>`
    }

});


cohete.addEventListener('click',(event)=>{
     console.log(event.target)
})


