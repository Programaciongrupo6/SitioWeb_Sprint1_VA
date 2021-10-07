const jsonData = {
  "recetas": [
    {
      "id": "receta_1",
      "titulo": "Brownie",
      "ruta": "img/recetas/receta_1.jpg",
      "Difilcultad": "Fácil",
      "TiempoTotal": "30 minutos",
      "Elaboracion": "10 minutos",
      "Coccion": "20 minutos",
      "ingredientes": [
        {
          "ingrediente": "Banano",
          "cantidad": "180 g"
        },
        {
          "ingrediente": "Huevos",
          "cantidad": "2 unid"
        },
        {
          "ingrediente": "Esencia de vainilla",
          "cantidad": "5 ml"
        },
        {
          "ingrediente": "Cacao puro en polvo sin azúcar",
          "cantidad": "50 g"
        },
        {
          "ingrediente": "Chocolate negro sin azúcar picado",
          "cantidad": "80 g"
        },
        {
          "ingrediente": "Bicarbonato sódico",
          "cantidad": "6 g"
        },
        {
          "ingrediente": "Sal",
          "cantidad": "1 g"
        },
        {
          "ingrediente": "Canela molida (opcional)",
          "cantidad": "1 g"
        },
        {
          "ingrediente": "Leche o bebida vegetal",
          "cantidad": "10 ml"
        }
      ],
      "descripcion": [
        "Precalentar el horno a 175ºC y cubrir con papel de hornear un molde cuadrado de unos 20 cm de lado. Si es más pequeño, las piezas de brownie saldrán más gruesas y algo más difíciles de cortar, pero también más esponjosas.",
        "Pelar los bananos y cortarlos en trozos. Colocar en un recipiente con los huevos y batir con un tenedor, machacándolos bien, o usar una batidora. También se puede emplear un procesador de alimentos o batidora de vaso. Incorporar el resto de ingredientes, salvo el chocolate, y batir un poco más hasta que no queden grumos secos.",
        "Añadir el chocolate negro picado o troceado y remover con suavidad. Llenar el molde y hornear durante unos 20 minutos. Al pinchar el centro con un palillo debe salir ligeramente manchado, pero no mojado. Dejar enfriar fuera del horno unos 10 minutos antes de desmoldar y trasladar con el propio papel a una rejilla.",
        "Esperar a que se enfríe por completo antes de cortar en piezas. Se cortará mejor si lo dejamos una o dos horas en la nevera, para que se asiente la miga. Guardar en un recipiente hermético en la nevera, sobre todo si hace mucho calor."
      ]
    },
    {
      "id": "receta_2",
      "titulo": "Pastel de manzana, avena y almendra",
      "ruta": "img/recetas/receta_2.jpg",
      "Difilcultad": "Fácil",
      "TiempoTotal": "55 minutos",
      "Elaboracion": "10 minutos",
      "Coccion": "45 minutos",
      "ingredientes": [
        {
          "ingrediente": "Manzanas grandes (peladas y sin corazón)",
          "cantidad": "400 g"
        },
        {
          "ingrediente": "Huevos",
          "cantidad": "2 unid"
        },
        {
          "ingrediente": "Harina de avena",
          "cantidad": "30 g"
        },
        {
          "ingrediente": "Almendra molida",
          "cantidad": "30 g"
        },
        {
          "ingrediente": "Ralladura de limón ",
          "cantidad": "A gusto"
        },
        {
          "ingrediente": "Canela molida y más para espolvorear",
          "cantidad": "1 cucharadita"
        },
        {
          "ingrediente": "Levadura química",
          "cantidad": "1 cucharadita"
        },
        {
          "ingrediente": "Almendras para cubrir",
          "cantidad": "A gusto"
        },
        {
          "ingrediente": "Leche o bebida vegetal",
          "cantidad": "10 ml"
        }
      ],
      "descripcion": [
        "Precalentar el horno a 180ºC y engrasar con un poco de aceite un molde redondo de fondo desmontable, de unos 18-20 cm de diámetro, o forrar con papel antiadherente de hornear. La base es recomendable forrarla siempre con este papel.",
        "Lavar las manzanas, pelarlas y rallarlas finas o picarlas. Cuanto más pequeños sean los trocitos, más se fundirán en la masa. Mezclar con el zumo de limón y disponer en un recipiente. Añadir todos los demás ingredientes y batir con varillas, o triturar a velocidad baja si se desea con una batidora o robot unos segundos.",
        "Una vez homogénea, llevar al molde y cubrir con almendras al gusto y más canela. Hornear durante unos 40-45 minutos. Comprobar el punto con un palillo; el tiempo final depende del molde y tipo de horno. Esperar un poco fuera del horno antes de abrir y dejar enfriar por completo.",
        "Gana con el reposo de unas horas, cuando se asienta el relleno. Servir con más canela molida al gusto y guardar lo que sobre en la parte menos fría de la nevera."
      ]
    }
  ]
};
let sectionItem = document.getElementById("section_Receta_vista");


function mensajeFuncion(params) {
  let recetasArray = jsonData.recetas
  for (let i = 0; i < recetasArray.length; i++) {
    const element = recetasArray[i];
    if (params == element.id) {

      divDeleted = document.getElementById("receta_1");
      if (!divDeleted) { }
      else {
        sectionItem = divDeleted.parentNode;
        sectionItem.removeChild(divDeleted);
      }
      mostrarReceta(element)

    }
  }
}

function mostrarReceta(params) {
  //crear los ingredientes
  let ingredientesString = ''
  for (let i = 0; i < params.ingredientes.length; i++) {
    ingredientesString += '<tr><td>' + params.ingredientes[i].ingrediente + '</td><td>' + params.ingredientes[i].cantidad + '</td></ >'
  }
  let tablaIngredientes = '<table class="table table-striped table-bordered"><thead><tr><td>INGREDIENTES</td><td>CANTIDAD</td></tr></thead><tbody>' + ingredientesString + '</tbody></table>'

  // crear el parrafo
  let descripcionString = ''
  for (let i = 0; i < params.descripcion.length; i++) {
    descripcionString += params.descripcion[i] + '<br><br>'
  }
  descripcionString = '<p>' + descripcionString + '</p>'
  let htmlParte1 = '<h1 id="receta_title_vista">' + params.titulo + '</h1>'
  let htmlParte2 = '<img src="' + params.ruta + '" alt="">'
  let htmlParte3 = '<h2>Difilcultad: <span>' + params.Difilcultad + '</span></h2>'
  let htmlParte4 = '<h2>Tiempo Total: <span>' + params.TiempoTotal + '</span></h2>'
  let htmlParte5 = '<h2>Elaboración: <span>' + params.Elaboracion + '</span></h2>'
  let htmlParte6 = '<h2>Cocción: <span>' + params.Coccion + '</span></h2>'
  let htmlParte7 = '<div><h3>Que necesitamos...</h3>' + tablaIngredientes + '<div id="separador"></div>' + descripcionString + '<div id="separador_receta"></div></div>'

  let htmlUnido = '<div class="receta" id="receta_1">' + htmlParte1 + htmlParte2 + htmlParte3 + htmlParte4 + htmlParte5 + htmlParte6 + htmlParte7 + '</div>'
  sectionItem.innerHTML += htmlUnido

  let tituloReceta = document.getElementById('titulo-receta');
  let sectionRecetas = document.getElementById('section_Recetas')
  let recetaTitleVista = document.getElementById('receta_title_vista')
  tituloReceta.style.cssText = 'padding-top: 30px; ba';
  sectionRecetas.style.cssText = 'height: 60vh; background: rgb(255 245 217);';
  sectionItem.style.cssText = 'background: rgb(255 245 217);'
  recetaTitleVista.style.cssText = 'margin-top: 0px;'


}