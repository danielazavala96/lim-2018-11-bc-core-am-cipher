const encode = (creatorText, offset) => {
  let textoFinal = "";
  const new-offset = offset%26;
  const textoMayus = creatorText.toUpperCase();
  for(var i=0; i<textoMayus.length; i++){
    if( textoMayus [i]==" "){
    textoFinal +=" ";
  }
  else{
    textoFinal+= String.fromCharCode((textoMayus.charCodeAt(i)-65+new-offset)%26+65);
  }}
  return textoFinal;

}

const decode = (discoverText, offset1) => {
  let textoFinal2 = "";
  const new-offset2 = offset1%26;
  const texto_Mayus = discoverText.toUpperCase();
  for(var i=0; i<texto_Mayus.length; i++){
    if( texto_Mayus [i]==" "){
    textoFinal2 +=" ";
    }
    else{
    textoFinal2+= String.fromCharCode((texto_Mayus.charCodeAt(i)+65-new-offset2)%26+65);
  }}
  return textoFinal2;

}

//console.log(descifrado("beba", 1));
window.cipher = {
  encode: encode,
  decode: decode
};
