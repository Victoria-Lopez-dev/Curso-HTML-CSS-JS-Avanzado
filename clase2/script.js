let video= document.querySelector(".video1"); // buscamos a la etiqueta video

let video2=document.querySelector(".video2");
let duracion=document.querySelector(".duracion")
function inicio() {
    video.play()//reproduce el video
    console.log("video en reproduccion")
    duracion.textContent=`${video.duration}`
}
function pausar() {
    video.pause()
}

video2.addEventListener('play',()=>{
    //escucha cuando inicia la reproduccion para hacer las acciones que indiquemos debajo
    console.log("video en reproduccion")
})
video2.addEventListener('pause',()=>{
    //escucha cuando se pausa la reproduccion o
    console.log("video pausado")
})
