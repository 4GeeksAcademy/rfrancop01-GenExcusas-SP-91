/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ['Mi vecina', 'Mi perro', 'El perro de mi vecina', 'El ratón',];
  let action = ['se comió', 'cortó', 'quemó', 'cocinó',];
  let what = ['mi proyecto', 'la silla', 'el teclado', 'el html',];
  let when = ['hoy', 'ayer', 'durante el paseo', 'la semana pasada',];

  let excuse1 = Math.floor(Math.random() * who.length);
  let excuse2 = Math.floor(Math.random() * action.length);
  let excuse3 = Math.floor(Math.random() * what.length);
  let excuse4 = Math.floor(Math.random() * when.length);

  document.querySelector(".excuse").innerHTML = 
    who[excuse1] + ' ' + action[excuse2] + ' ' + what[excuse3] + ' ' + when[excuse4]
};

