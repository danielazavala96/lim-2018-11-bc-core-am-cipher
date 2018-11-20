//const botonClick = document.getElementById("crear");

////function cipher_1(){
//document.getElementById("root").style.display = "none";
//document.getElementById("inicio").style.display = "none";
//document.getElementById("creador").style.display = "block";

//Asociar el evento a crear
//botonClick.addEventListener("click" , cipher_1);
//llamar mensaje hacia otro input


const buttonCipher = document.getElementById("btnEnviar_1");
const textoInicial = document.getElementById("textcipher");
const textoResult = document.getElementById("resultcipher");

const cifrado = () => {
  const textoInicial = document.getElementById("textcipher").value;
  return textoInicial;

}
buttonCipher.addEventListener("click", () => {

  textoResult.value = cifrado();

})
