import '../css/style.css';
import {char} from "./arr.js"

function newCard(el) { 
  document.querySelector(".container").insertAdjacentHTML(
  'beforeend',
  `<div class="gallery">
  <h2 class="card-name">${el.charName}</h2>
  <h3 class="card-char">${el.cardName}</h3>
  <img class="image" src="${el.img}" alt=""></img>
  </div>`)
}

char.forEach(el => newCard(el));

