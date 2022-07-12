let video=document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");



window.addEventListener('load',()=>{
  document.getElementById('showTime').innerHTML=` Duracion video : ${video.duration}`;
  
});

 

playBoton.addEventListener('click',()=>{
    video.play()
   
});

pauseBoton.addEventListener('click',()=>{
    video.pause();

    //con currentTime podemos acceder al tiempo exacto en el que se encuentra el video.
//Por lo que con esta funcion podemos acceder a que tiempo nos encontramos
    console.log(video.currentTime)
    
});


