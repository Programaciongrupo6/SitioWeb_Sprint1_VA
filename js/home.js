const barraLateral = document.getElementById('nav_drawer')
const contenedor = document.getElementById('contenedor')
const logo = document.getElementById('logo_0')


window.addEventListener('scroll', function () {
    if (window.pageYOffset < 200) {
        barraLateral.style.left = (window.pageYOffset-200)+"px";
        contenedor.style.margin= "0px 0px 0px "+window.pageYOffset+"px";
        contenedor.style.width = "calc(100% - "+window.pageYOffset+"px)";
        

    }else if( window.pageYOffset >= 200){
        barraLateral.style.left ="0px";
        contenedor.style.margin= "0px 0px 0px 200px";
        contenedor.style.width = "calc(100% - 200px)";
    }

    // document.getElementById('descripcion').innerHTML = window.pageYOffset + 'px';
});

