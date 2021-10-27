let minutos = 1;
let segundos = 0;

//definimos y ejecutamos los segundos de la

function cargarSegundo(){
    let txtSegundos;

    if(segundos<0){
        segundos = 59;
    }

    //Mostrar segundos en pantalla
    if(segundos <10){
        txtSegundos =  `0${segundos}`;
    }else{
        txtSegundos = segundos;
    }

    if(minutos == 0 && segundos == 0){
           setTimeout(() =>{
            segundos = 0;
        },0)
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;
    cargarMinutos(segundos)
}

// Definimos  y ejecutamos los minutos

function cargarMinutos(segundos){
    let txtMinutos;

    if(segundos == -1 && minutos !== 0){
        setTimeout(() =>{
            minutos--;
        },500)
    }else if(segundos == -1 && minutos == 0){
        setTimeout(() =>{
            minutos = 0;
        },500)
    }

    // Mostrar minutos en pantalla
    if(minutos <10){
        txtMinutos  = `0${minutos}`;
    }else{
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
}
//Ejecutamos la funcion cada segundo
setInterval(cargarSegundo, 1000);
