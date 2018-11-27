const encode = (textoInicial, offset_uno) => {
  let textoFinal = "";
  const neoOffset = offset_uno%26;
  const textoMayus = textoInicial.toUpperCase();
  for(var i=0; i<textoMayus.length; i++){
    if( textoMayus [i]==" "){
    textoFinal +=" ";
  }
  else{
    textoFinal+= String.fromCharCode((textoMayus.charCodeAt(i)-65+neoOffset)%26+65);
  }}
  return textoFinal;

}

const decode = (textoInicial2, offset1) => {
  let textoFinal2 = "";
  const newoffset1 = offset1%26;
  const texto_Mayus = textoInicial2.toUpperCase();
  for(var i=0; i<texto_Mayus.length; i++){
    if( texto_Mayus [i]==" "){
      textoFinal2 +=" ";
    }
    else{
    textoFinal2+= String.fromCharCode((texto_Mayus.charCodeAt(i)+65-newoffset1)%26+65);
  }}
  return textoFinal2;

}

//console.log(descifrado("beba", 1));
window.cipher = {
  encode: encode,
  decode: decode
};
