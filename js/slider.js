let slider = document.getElementById("rangeCarrousel");
let tituloReceta = document.getElementById('titulo-receta');


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    console.log( this.value)

    document.documentElement.style.setProperty('--velocidad', this.value + "deg");
    
    resultado =getComputedStyle(document.documentElement).getPropertyValue('--velocidad');
    console.log(resultado)
    //setTimeout(function(){ root.style.setProperty('--velocidad', 35 + "deg"); }, 500);

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