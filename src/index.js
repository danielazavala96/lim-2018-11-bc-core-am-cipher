const botonClick = document.getElementById("crear");

function cipher_1(){
document.getElementById("root").style.display = "none";
document.getElementById("inicio").style.display = "none";
document.getElementById("creador").style.display = "block";
}
//Asociar el evento a crear
botonClick.addEventListener("click" , cipher_1);
//llamar mensaje hacia otro input

const resultMessage = document.getElementById("cifrar");
const result = "";

 function resultado_1() {
   string = document.getElementById('cifrar').value;
   resultMessage.innerHTML = result;

 }
