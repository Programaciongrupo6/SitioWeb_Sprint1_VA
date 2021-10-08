let slider = document.getElementById("rangeCarrousel");
let tituloReceta = document.getElementById('titulo-receta');
let contentCarrousel = document.getElementById('content-carrousel');


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  console.log(this.value)
  /*
  var style = document.styleSheets[0];
  console.log(style)
  style.insertRule("@keyframes rotar{from{ ransform: rotateY(0deg); }to{ transform: rotateY(" + this.value + "deg);}}", 43);
  */
  if (this.value == 0) {
    contentCarrousel.style.animation = "rotarAtrasFull 50s infinite linear";
  } else if (this.value == 1) {
    contentCarrousel.style.animation = "rotarAtras 50s infinite linear";
  } else if (this.value == 2) {
    contentCarrousel.style.animation = "rotar 50s infinite linear";
  }else if (this.value == 3) {
    contentCarrousel.style.animation = "rotarAdelante 50s infinite linear";
  }else if (this.value == 4) {
    contentCarrousel.style.animation = "rotarAdelanteFull 50s infinite linear";

  }




  /*
    document.documentElement.style.setProperty('--velocidad', this.value + "deg");
  
    resultado = getComputedStyle(document.documentElement).getPropertyValue('--velocidad');
    console.log(resultado)
    setTimeout(function () { root.style.setProperty('--velocidad', 35 + "deg"); }, 50);
  */
  /*
let tituloReceta = document.getElementById('titulo-receta');
  let sectionRecetas = document.getElementById('section_Recetas')
  let recetaTitleVista = document.getElementById('receta_title_vista')
  tituloReceta.style.cssText = 'padding-top: 30px; ba';
  sectionRecetas.style.cssText = 'height: 60vh; background: rgb(255 245 217);';
  sectionItem.style.cssText = 'background: rgb(255 245 217);'
  recetaTitleVista.style.cssText = 'margin-top: 0px;'
  */
}