/*
Canvas - API ( Interfaz de Programacion de Aplicaciones)
API - funciones complejas de una manera simple
API HTML5 Canvas - Geolocalizacion 
API externas - crear Gifs
API conector entre servidor y programa - Ricky y Morty
*/



//DOM

    let canvas = document.querySelector('canvas');
    let lienzo =canvas.getContext("2d");

    console.log(lienzo)

//formas primitivas :rectangulos - trazos 

//fillRect() strokeRect() clearRect()
//fillRect(x,y,wi,hei)

// lienzo.fillStyle="blue";//color del relleno
// lienzo.strokeStyle="red";//color del borde
// // lienzo.globalAlpha=0.9; transparencia : numero del 0 al 1; 
// lienzo.fillRect(50,80,50,50)


//Trazos 

//que inicie
//donde se posiciona el "lapiz" para iniciar el trazado
//trazos
//donde termina el trazado
lienzo.fillStyle="pink";

lienzo.beginPath();
lienzo.strokeStyle="green";
lienzo.moveTo(100,20);// mover el "lapiz" pero que no traze 
lienzo.lineTo(120,80);//traza una recta
lienzo.lineTo(120,20);
lienzo.stroke();
lienzo.closePath();

//lienzo: 300 x 300
//curvas
let grados45= Math.PI/ 180 * 45

lienzo.beginPath();
lienzo.moveTo(200,200);
lienzo.lineTo(200,120);
//arc(x,y,radio,ang. inicio,ang. final , direccion)
//radianes 
//Math.PI -> 180 grados
//Math.PI/180 * 45
//true -false
lienzo.arc(200,120,80,grados45,Math.PI,true);
lienzo.fill();// si utilizo .fill() no hace falta colocar el closePath()

lienzo.beginPath();
lienzo.moveTo(100,250);

//quadraticCurveTo(cpx,cpy,x,y)
lienzo.quadraticCurveTo(150,220,100,290);
lienzo.moveTo(100,250);
lienzo.quadraticCurveTo(50,220,100,290);
lienzo.stroke();
lienzo.closePath();

lienzo.strokeStyle="brown";

lienzo.beginPath();
lienzo.moveTo(220,220);
//bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x,y)
lienzo.bezierCurveTo(100,220,300,300,120,290);
lienzo.stroke();
lienzo.closePath();



/*------*/
//evento
//canvas.addEventListener('click',)
function size(valorW,valorH) {
    // lienzo.fillStyle="blue";
    lienzo.fillRect(50,80,valorW,valorH)
}

function cambiarUb() {
    lienzo.fillStyle="violet"
    lienzo.clearRect(50,80,10,10);
    size(120,50)
}

// let cambiarUb=()=>{
//     lienzo.fillStyle="violet"
//     lienzo.clearRect(50,80,10,10);
//     size(120,50)
// }












