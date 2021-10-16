let registros = [];
function agregarRegistro(){
    let usuario = document.getElementById("in_usuario").value;
    let contrasena = document.getElementById("in_contrasena").value;
    registros.push({usuario,contrasena});
}


/*function filtrarPorContrasena(arreglo, filtro) {
    let nuevoArray = []
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i].contrasena.length <= filtro) {
            let usuarioi = arreglo[i].usuario;
            let contrasenai = arreglo[i].contrasena;
            let objetoArray = { usuario: usuarioi, contrasena: contrasenai }
            nuevoArray.push(objetoArray);
        }
    }
    console.log(nuevoArray)
    return (nuevoArray)
}*/

// function filtrarPorContrasena(arreglo,filtro){
//     let formularios = arreglo.filter(formulario => (formulario.contrasena).length <= filtro);
//     console.log(formularios);
//     return formularios;
// }



module.exports.registros = registros;
module.exports.filtrarPorContrasena = filtrarPorContrasena;
module.exports.agregarRegistro = agregarRegistro;