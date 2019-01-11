import { getMarvelDataFor } from "./api";

document.getElementById("loading").style.display = "none";

let form = document.querySelector("form");
form.addEventListener("submit", event => {
  let hero = form.elements.search.value;

  if (hero != null && hero !== "") {
    getMarvelDataFor(hero);
    form.elements.search.value = "";
  }

  event.preventDefault();
});

window.searchHero = function searchHero(hero) {
  getMarvelDataFor(hero);
};
