import '../css/style.css';
import {char} from "./arr.js"
import {DOMSelectors} from './dom.js';

function newCard(arr) { 
  arr.forEach(el=> {
    document.querySelector(".container").insertAdjacentHTML(
      'beforeend',
      `<div class="gallery">
      <h2 class="card-name">${el.charName}</h2>
      <h3 class="card-char">${el.cardName}</h3>
      <img class="image" src="${el.img}" alt=""></img>
      <p>${el.dateAvailable}</p>
      </div>`)  
  });
}

function clearCards() {
  document.querySelectorAll(".gallery").remove
}

newCard(char)

function Ag_filter(agency) {
  clearCards()
  const arr = char.filter(el => el.agency.includes(agency))
  console.log(arr)
  newCard(arr)
}

DOMSelectors.starpro.addEventListener("click", function(event) {
  event.preventDefault()
  Ag_filter("STARMAKER PRODUCTION");

}
)

DOMSelectors.cospro.addEventListener("click", function(event) {
  event.preventDefault()
  clearfields()
  Ag_filter("COSMIC PRODUCTION");
}
)

DOMSelectors.rhythlin.addEventListener("click", function(event) {
  event.preventDefault()
  clearfields()
  Ag_filter("Rhythm Link");
}
)

DOMSelectors.newdi.addEventListener("click", function(event) {
  event.preventDefault()
  clearfields()
  Ag_filter("NEW DIMENSION");
}
)
