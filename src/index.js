import { getMarvelDataFor } from "./api";
import { showMessage, showSearching } from "./utils";

// Se establece el valor inicial de la búsqueda como no activa
showSearching(false);

// Se obtiene el formulario del documento para hacer que,
// cuando éste submita, realice la búsqueda del héroe según
// el valor del campo de búsqueda, realizando las siguiente
// acciones:
// - Si el campo de búsqueda está vacío se mostrará un mensaje
// indicando que debe introducirse el nombre de un héroe para hacer
// la búsqueda
// - Si el campo de búsqueda está informado, se limpiará y, a
// continuación, se llamará a la API que realiza la búsqueda del
// héroe pasándole como argumento el valor del campo de búsqueda
// antes de haberlo limpado
let form = document.querySelector("form");
form.addEventListener("submit", event => {
  let hero = form.elements.search.value;
  if (hero != null && hero !== "") {
    form.elements.search.value = "";
    getMarvelDataFor(hero);
  } else {
    showMessage("You must enter the name o a hero to perform the search");
  }
  event.preventDefault();
});

// Función para realizar la búsqueda del héroe
window.searchHero = function searchHero(hero) {
  // Llama al método de la API que realiza la búsqueda
  getMarvelDataFor(hero);
};
