//const botonClick = document.getElementById("emisor");

//function cipher_1(){
//document.getElementById("root").style.display = "none";
//document.getElementById("invitado").style.display = "none";
//document.getElementById("creador").style.display = "block";
//}
//Asociar el evento a crear
//botonClick.addEventListener("click" , cipher_1);
//llamar mensaje hacia otro input
const inicioPantalla = () => {
  document.getElementById("creador").style.display = "none";
  document.getElementById("root").style.display = "block";
  document.getElementById("invitado").style.display = "none";
}
inicioPantalla();

let botonclean1 = document.getElementById("borrar1")
let borrarCampo1 = document.getElementById("resultcipher")
let borrarCampoInicial = document.getElementById("textcipher")
let borrarOffset1 = document.getElementById("offset")
function cleanField1(){
    borrarCampo1.value = "";
    borrarCampoInicial.value = "";
    borrarOffset1.value = "";
}
botonclean1.addEventListener("click", cleanField1);

const botonCrea = document.getElementById("emisor");
const pantallaNumb1 = () => {
  document.getElementById("creador").style.display = "block";
  document.getElementById("root").style.display = "none";
  document.getElementById("invitado").style.display = "none";
}
botonCrea.addEventListener("click",pantallaNumb1);

const botonBack = document.getElementById("back1")
const volverInicio1 = () => {
  document.getElementById("root").style.display = "block";
  document.getElementById("creador").style.display = "none";
  document.getElementById("invitado").style.display = "none";
}
botonBack.addEventListener("click",volverInicio1);

let botonclean = document.getElementById("borrar")
let borrarCampo = document.getElementById("resultcipher_1")
let limpiarTexto = document.getElementById("textcipher_1")
let limpiarOffset = document.getElementById("offset1")
function cleanField(){
    borrarCampo.value = "";
    limpiarTexto.value = "";
    limpiarOffset.value = "";
}

botonclean.addEventListener("click", cleanField);

const botonDescubre = document.getElementById("receptor")
const pantallaNumb2 = () => {
  document.getElementById("invitado").style.display = "block";
  document.getElementById("root").style.display = "none";
  document.getElementById("creador").style.display = "none";
}
botonDescubre.addEventListener("click",pantallaNumb2);

const botonBack2 = document.getElementById("back2")
const volverInicio2 = () => {
  document.getElementById("root").style.display = "block";
  document.getElementById("invitado").style.display = "none";
  document.getElementById("creador").style.display = "none";
}
botonBack2.addEventListener("click",volverInicio2);
