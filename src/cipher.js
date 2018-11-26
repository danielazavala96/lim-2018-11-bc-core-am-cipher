//window.cipher = {
  // ...
//};
const inputTextoInicial = document.getElementById("textcipher");
const inputOffset = document.getElementById("offset");
const textoResult = document.getElementById("resultcipher");
const buttonCipher = document.getElementById("btnEnviar_1");

const cifrado = (textoInicial, offset_uno) => {
  let textoFinal = "";
  const neoOffset = offset_uno%26;
  const textoMayus = textoInicial.toUpperCase();
  for(var i=0; i<textoMayus.length; i++){
    textoFinal+= String.fromCharCode((textoMayus.charCodeAt(i)-65+neoOffset)%26+65);
  }
  return textoFinal;

}

buttonCipher.addEventListener("click", function(){
  let offset = parseInt(inputOffset.value);
  let textoInicial = inputTextoInicial.value;
  textoResult.value = cifrado(textoInicial, offset);
  console.log(cifrado(textoInicial, offset));
})

const inputTextoInicial2 = document.getElementById("textcipher_1");
const inputOffset2 = document.getElementById("offset1");
const textoResult2 = document.getElementById("resultcipher_1");
const buttonCipher2 = document.getElementById("btnEnviar_2");

const descifrado = (textoInicial2, offset1) => {
  let textoFinal2 = "";
  const newoffset1 = offset1%26;
  const texto_Mayus = textoInicial2.toUpperCase();
  for(var i=0; i<texto_Mayus.length; i++){
    textoFinal2+= String.fromCharCode((texto_Mayus.charCodeAt(i)+65-newoffset1)%26+65);
  }
  return textoFinal2;

}
buttonCipher2.addEventListener("click", function(){
  let offset1 = parseInt(inputOffset2.value);
  let textoInicial2 = inputTextoInicial2.value;
  textoResult2.value = descifrado(textoInicial2, offset1);
  console.log(descifrado(textoInicial2, offset1));
})
//console.log(descifrado("beba", 1));
