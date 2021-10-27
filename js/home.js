// menu
const barraLateral = document.getElementById('nav_drawer')
const contenedor = document.getElementById('contenedor')
const logo = document.getElementById('logo_0')
const menuImg = document.getElementById('menu-img')
let bandera = true


// cocina interactiva
let sliderCI = document.querySelector(".slider-container")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let interval = 3000;

let slider1 = document.getElementsByClassName("slider1")
let slider2 = document.getElementsByClassName("slider2")
let slider3 = document.getElementsByClassName("slider3")



// window.addEventListener('scroll', function () {
//     if (window.pageYOffset < 200) {
//         barraLateral.style.left = (window.pageYOffset - 200) + "px";
//         contenedor.style.margin = "0px 0px 0px " + window.pageYOffset + "px";
//         contenedor.style.width = "calc(100% - " + window.pageYOffset + "px)";


//     } else if (window.pageYOffset >= 200) {
//         barraLateral.style.left = "0px";
//         contenedor.style.margin = "0px 0px 0px 200px";
//         contenedor.style.width = "calc(100% - 200px)";
//         bandera = false
//     }
    
// });
// document.getElementById('descripcion').innerHTML = window.pageYOffset + 'px';

function viewMenu() {
    menuImg.style.transition = "all 1.0s";

    if (bandera) {
        //saca el menu
        menuImg.style.left = "200px";
        barraLateral.style.left = "0px";
        contenedor.style.margin = "0px 0px 0px 200px";
        contenedor.style.width = "calc(100% - 200px)";
        bandera = false
    } else {
        //esconde el menu
        menuImg.style.left = "00px";
        barraLateral.style.left = "-200px";
        contenedor.style.margin = "0px 0px 0px 0px";
        contenedor.style.width = "calc(100% - 0px)";
        bandera = true
    }
}

// slider.oninput = function () {
//     console.log(this.value)

//     if (this.value == 0) {
//         contentCarrousel.style.animation = "rotarAtrasFull 50s infinite linear";
//     } else if (this.value == 1) {
//         contentCarrousel.style.animation = "rotarAtras 50s infinite linear";
//     } else if (this.value == 2) {
//         contentCarrousel.style.animation = "rotar 50s infinite linear";
//     } else if (this.value == 3) {
//         contentCarrousel.style.animation = "rotarAdelante 50s infinite linear";
//     } else if (this.value == 4) {
//         contentCarrousel.style.animation = "rotarAdelanteFull 50s infinite linear";

//     }
// }

window.addEventListener("resize", function () {
    width = sliderIndividual[0].clientWidth;
    console.log(width)
})

setInterval(() => {
    slides()
}, interval);

function slides() {
    let valor = (-(width-(00))*contador);
    sliderCI.style.transform = "translate("+valor+"px)";
    sliderCI.style.transition  = "transform .7s"
    contador++;

    if (contador == sliderIndividual.length) {
        setTimeout(function () {
            sliderCI.style.transform = "translate(0px)";
        sliderCI.style.transition  = "transform 0s"
        contador = 1;
        }, 1500)
    }
}





document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -50,
        shift: 5,
        padding: 5,
        numVisible: 6,
        indicators: true,
        noWrap: false
    });
});


function rec_1() {
    document.addEventListener.onclick(window.open('pags/recetas.html?receta=receta_1'));
}
function rec_2() {
    document.addEventListener.onclick(window.open('pags/recetas.html?receta=receta_2'));
}
function rec_3() {
    document.addEventListener.onclick(window.open('pags/recetas.html?receta=receta_3'));
}
function rec_4() {
    document.addEventListener.onclick(window.open('pags/recetas.html?receta=receta_4'));
}
