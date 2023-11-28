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
  const orig = document.querySelector(".container")
  orig.innerHTML = ""
}

newCard(char)

//old 
/* function Ag_filter(agency) {
  clearCards()
  const arr = char.filter(el => el.agency.includes(agency))
  //console.log(arr)
  newCard(arr)
}

 DOMSelectors.starpro.addEventListener("click", function(event) {
  event.preventDefault()
  Ag_filter("STARMAKER PRODUCTION");
  unitSelect.value = ""
}
)

DOMSelectors.cospro.addEventListener("click", function(event) {
  event.preventDefault()
  Ag_filter("COSMIC PRODUCTION");
  unitSelect.value = ""
}
)

DOMSelectors.rhythlin.addEventListener("click", function(event) {
  event.preventDefault()
  Ag_filter("Rhythm Link");
  unitSelect.value = ""
}
)

DOMSelectors.newdi.addEventListener("click", function(event) {
  event.preventDefault()
  Ag_filter("NEW DIMENSION");
  unitSelect.value = ""
}
)
 */

//OPTIMIZED !!!!!
let buttons = document.querySelectorAll(".button")
buttons.forEach((button) => button.addEventListener("click", function() {
  let agency = button.textContent
  let arr = char.filter((el) => el.agency.includes(agency))
  clearCards()
  newCard(arr)
  unitSelect.value = ""
}))

DOMSelectors.reset.addEventListener("click", function(event) {
  event.preventDefault()
  clearCards()
  newCard(char)
  unitSelect.value = ""
})

DOMSelectors.unitSelect.addEventListener("change", function(event) {
  event.preventDefault()
  clearCards()
  let arr = char.filter(el => el.units.includes(unitSelect.value))
  newCard(arr)
})

DOMSelectors.theme.addEventListener("click", function() {
  if (document.body.classList.contains("purple")) {
    document.body.classList.add("green")
    document.body.classList.remove("purple")
  }
  else {
    document.body.classList.add("purple")
    document.body.classList.remove("green")
  } 
})