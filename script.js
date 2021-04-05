//CONTAR RESPUESTAS CORRECTAS-----------------------------------
const contarRespuestas = function() {
	let contador = 0;
	for(a of document.getElementsByClassName("correcto")){
		if(a.checked){
			contador++;
		}
	}
	document.getElementById("contadorTotal").innerHTML = contador;
}


//GUARDAR NICKNAME-----------------------------------

const guardarNombre = () => {
  let input = document.getElementById("nombre");
  nombreDeUsuario = input.value;
   let nombreUsuario = document.getElementById("nombre-usuario");
  nombreUsuario.innerHTML = nombreDeUsuario;
}




//FUNCION HIDDEN-----------------------------------
document.getElementById("yesButton")
        .addEventListener("click", function() {
  document.getElementById("inicio").hidden = true;
  document.getElementById("nickname").hidden = false;
	}, false);
 
  document.getElementById("nicknameButton")
        .addEventListener("click", function() {
  document.getElementById("nickname").hidden = true;
  document.getElementById("categorias").hidden = false;
}, false);

//PREGUNTAS CLASICOS-----------------------------------

document.getElementById("clasicoButton")
        .addEventListener("click", function() {
  document.getElementById("categorias").hidden = true;
  document.getElementById("pregclas1").hidden = false;
}, false);

document.getElementById("nextButton1")
        .addEventListener("click", function() {
  document.getElementById("pregclas1").hidden = true;
  document.getElementById("pregclas2").hidden = false;
}, false);

document.getElementById("nextButton2")
        .addEventListener("click", function() {
  document.getElementById("pregclas2").hidden = true;
  document.getElementById("pregclas3").hidden = false;
}, false);

document.getElementById("NextButton3")
        .addEventListener("click", function() {
  document.getElementById("pregclas3").hidden = true;
 document.getElementById("playAgain").hidden = false;
 contarRespuestas();
}, false);

//PREGUNTAS ACTUALES-----------------------------------
document.getElementById("actualButton")
        .addEventListener("click", function() {
  document.getElementById("categorias").hidden = true;
  document.getElementById("pregact1").hidden = false;
}, false);

document.getElementById("nextButton11")
        .addEventListener("click", function() {
  document.getElementById("pregact1").hidden = true;
  document.getElementById("pregact2").hidden = false;
}, false);

document.getElementById("nextButton22")
        .addEventListener("click", function() {
  document.getElementById("pregact2").hidden = true;
  document.getElementById("pregact3").hidden = false;
}, false);

document.getElementById("nextButton33")
        .addEventListener("click", function() {
  document.getElementById("pregact3").hidden = true;
  document.getElementById("playAgain").hidden = false;
  contarRespuestas();
}, false);




//JUGAR DE NUEVO----------------------------
document.getElementById("clasicoAgainButton")
        .addEventListener("click", function() {
  document.getElementById("playAgain").hidden = true;
  document.getElementById("pregclas1").hidden = false;
}, false);

document.getElementById("actualAgainButton")
        .addEventListener("click", function() {
  document.getElementById("playAgain").hidden = true;
  document.getElementById("pregact1").hidden = false;
}, false);
