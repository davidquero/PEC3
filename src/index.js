import { getMarvelDataFor } from "./api";

let form = document.querySelector("form");
form.addEventListener("submit", event => {
  let hero = form.elements.search.value;

  if (hero != null && hero !== "") {
    getMarvelDataFor(hero);
  }

  event.preventDefault();
});
