let registros = [];
function agregarRegistro(){
    let usuario = document.getElementById("in_usuario").value;
    let contrasena = document.getElementById("in_contrasena").value;
    registros.push({usuario,contrasena});
}

function filtrarPorContrasena(arreglo,filtro){
    let formularios = arreglo.filter(formulario => (formulario.contrasena).length <= filtro);
    console.log(formularios);
    return formularios;
}

module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;