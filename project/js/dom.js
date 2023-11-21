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

DOMSelectors.starpro.addEventListener("click", function(event) {
    event.preventDefault()
    starproFilter();
}
)

function starproFilter() {
    const starpro = char.filter((el) => el.agency.includes("STARMAKER PRODUCTION"))
    console.log(starpro)
}