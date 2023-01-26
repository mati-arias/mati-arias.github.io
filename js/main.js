let boton = document.getElementById('boton');


let hideText = document.getElementById('hideText');


boton.addEventListener('click',toggleText);

function toggleText() {
  hideText.classList.toggle('show');
  console.log(toggleText)
 }


let boton2 = document.getElementById('boton2');


let hideText2 = document.getElementById('hideText2');


boton2.addEventListener('click',toggleText2);

function toggleText2() {
  hideText2.classList.toggle('show');
  console.log(toggleText)
 }


let boton3 = document.getElementById('boton3');


let hideText3 = document.getElementById('hideText3');


boton3.addEventListener('click',toggleText3)

function toggleText3() {
  hideText3.classList.toggle('show');
  console.log(toggleText)
 }