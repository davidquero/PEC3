import { getMarvelDataFor } from "./api";

let form = document.querySelector("form");
form.addEventListener("submit", event => {
  let hero = form.elements.search.value;

  if (hero != null && hero !== "") {
    getMarvelDataFor(hero);
  }

  event.preventDefault();
});

let comics = document.getElementById("comicList");
// Empty de comics list
while (comics.firstChild) {
  comics.removeChild(comics.firstChild);
}

let comic = document.createElement("li");
comic.className = "comicListItem";

let title = document.createElement("h2");
title.innerHTML =
  "Marvel Masterworks: The Amazing Spider-Man Vol. 20 (Hardcover)";
comic.appendChild(title);

let characters = document.createElement("h3");
characters.innerHTML = "Characters";
comic.appendChild(characters);

let personajes = document.createElement("ul");
personajes.className = "companions";

let imgcar1 = document.createElement("img");
imgcar1.className = "portrait";
imgcar1.src = "http://i.annihil.us/u/prod/marvel/i/mg/e/03/526952357d91c.jpg";
imgcar1.title = "Black Cat";
imgcar1.alt = "Black Cat";
let imgcar1li = document.createElement("li");
imgcar1li.appendChild(imgcar1);
personajes.appendChild(imgcar1li);

let imgcar2 = document.createElement("img");
imgcar2.className = "portrait";
imgcar2.src = "http://i.annihil.us/u/prod/marvel/i/mg/6/10/4fe364b0a2177.jpg";
imgcar2.title = "Dazzler";
imgcar2.alt = "Dazzler";
let imgcar2li = document.createElement("li");
imgcar2li.appendChild(imgcar2);
personajes.appendChild(imgcar2li);

let imgcar3 = document.createElement("img");
imgcar3.className = "portrait";
imgcar3.src = "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/5261a85a501fe.jpg";
imgcar3.title = "Doctor Strange";
imgcar3.alt = "Doctor Strange";
let imgcar3li = document.createElement("li");
imgcar3li.appendChild(imgcar3);
personajes.appendChild(imgcar3li);

let imgcar4 = document.createElement("img");
imgcar4.className = "portrait";
imgcar4.src = "http://i.annihil.us/u/prod/marvel/i/mg/5/70/4c003d3b033e8.jpg";
imgcar4.title = "Mesmero";
imgcar4.alt = "Mesmero";
let imgcar4li = document.createElement("li");
imgcar4li.appendChild(imgcar4);
personajes.appendChild(imgcar4li);
comic.appendChild(personajes);

let descriptionHeading = document.createElement("h3");
descriptionHeading.innerHTML = "Description";
comic.appendChild(descriptionHeading);

let description = document.createElement("p");
description.className = "description";
description.innerText =
  "Collects Amazing Spider-Man (1963) #203-212, Annual (1964) #14";
comic.appendChild(description);

comics.appendChild(comic);

console.log(comics);
