// function validar_nombreUsuario(String){
//    let input = document.getElementById("in_usuario");
//    let btn = document.getElementById("btn_enviar_registro");
//    btn.addEventListener("submit", () => {
//       let regxp = /^([a-zA-Z0-9_-]){3,9}$/;
//       return(regxp.test(input.value));
//    });
// }

// function validar_contrasena(String){
//    let input = document.getElementById("in_contrasena");
//    let btn = document.getElementById("btn_enviar_registro");
//    btn.addEventListener("submit", () => {
//       let regxp = /^([a-zA-Z0-9_-]){6,20}$/;
//       return(regxp.test(input.value));
//    });
// }



function validar_nombreUsuario(String){
   let input = document.getElementById("in_usuario");
   let regxp = /^([a-zA-Z0-9_-]){3,9}$/;
      if(input != regxp){
      alert("Nombre: "+regxp.test(input.value));
      }
   }

function validar_contrasena(String){
   let input = document.getElementById("in_contrasena");
   let regxp = /^([a-zA-Z0-9_-]){6,20}$/;
      if(input != regxp){
      alert("Contraseña: "+regxp.test(input.value));
      }
   }


//module.exports.validar_nombreUsuario = validar_nombreUsuario;
//module.exports.validar_contrasena = validar_contrasena;

