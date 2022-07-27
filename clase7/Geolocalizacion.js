//API incorporada a HTML5 - nos permite saber la ubicacion del dispositivo del usuario

//1- preguntar si nos da permiso para saber su ubicacion
//2 - traernos la ubicacion
// 2-a) getCurrentPosition() -> pregunta la ubicacion una unica vez
// 2- b) watchPosition() ->pregunta cada vez que cambia la ubicacion
let texto = document.querySelector('p');

const EncontroSuUbicacion =(position)=>{
    console.log(position)
    texto.textContent=`La persona esta ubicada en las coordenadas:
    latitud:${position.coords.latitude} ; 
    longitude:${position.coords.longitude}; 
    con un error de ${position.coords.accuracy} metros`
}

// 3 codigos de error 
//1 -> el usuario no dio permiso
//2 -> no lo llego a ubicar
//3-> no hay tiempo suficiente /tardo mucho
const errorUbicacion =(error)=>{
    console.log("Error en la ubicacion")

    console.log(error)
        if(error.code == 1){
        texto.textContent=`No tuvimos autorizacion para saber su ubicacion`;   
    }else{
         texto.textContent=`${error.message}`
    }
}

const objetoDeConfig ={
    enableHighAccuracy:true, //hace que la busqueda sea lo mas exacta posible - no abusar por que consume muchos recursos
   // timeout:200,limite de tiempo :2segundos (lo colocamos en milisegundos)
   //  maximumAge:;tiempo entre cada solicitud (lo colocamos en milisegundos)
  
}

// console.log(navigator)

//el orden                                  la funcion Ok   ,  funcion No , objeto
navigator.geolocation.getCurrentPosition(EncontroSuUbicacion,errorUbicacion,objetoDeConfig)
//                      watchPosition
