import {char} from "./arr.js"

const DOMSelectors = {
  reset: document.getElementById("reset"),
  theme: document.getElementById("changeTheme"),
  starpro: document.getElementById("starpro"),
  cospro: document.getElementById("cospro"),
  rhythlin: document.getElementById("rhythlin"),
  newdi: document.getElementById("newdi"),
  card: document.querySelectorAll(".gallery")
}

function starproFilter() {
    const starpro = char.filter((el) => el.agency.includes("STARMAKER PRODUCTION"))
    starpro.forEach((el) => newCard(el))
}

function cosproFilter() {
    let keepCard = char.filter((el) => el.agency.includes("COSMIC PRODUCTION")).target.parentElement
    console.log(keepCard)

}

function rhythlinFilter() {
    char.filter((el) => el.agency.includes("Rhythm Link"))
}

function newdiFilter() {
    char.filter((el) => el.agency.includes("New Dimension"))
}

DOMSelectors.starpro.addEventListener("click", function(event) {
    event.preventDefault()
    starproFilter();
}
)

DOMSelectors.cospro.addEventListener("click", function(event) {
    event.preventDefault()
    cosproFilter();
})

DOMSelectors.rhythlin.addEventListener("click", function(event) {
    event.preventDefault()
    rhythlinFilter();
})

DOMSelectors.newdi.addEventListener("click", function(event) {
    event.preventDefault()
    newdiFilter();
})
