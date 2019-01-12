import { BASE_URL, API_PUBLIC_KEY } from "./config";
import Hero from "./classes/Hero";

export const fecthEndPoint = url =>
  fetch(url).then(response => response.json());

export const getCharactersUrl = heroName =>
  `${BASE_URL}/characters?name=${heroName}&apikey=${API_PUBLIC_KEY}`;

export const getComicsUrl = id =>
  `${BASE_URL}/comics?characters=${id}&apikey=${API_PUBLIC_KEY}`;

export const createHero = character =>
  new Hero(
    character.getId(),
    character.getName(),
    character.getDescription(),
    character.getImage()
  );

///////////////////////////////////////////////////////////////////////////
// Función que recibe un mensaje como parámetro y realiza las siguientes
// acciones:
// - oculta el velo en caso de que se estuviera haciendo una búsqueda
// - escribe en consola el mensaje recibido
// - muestra una ventana con el mensaje recibido
///////////////////////////////////////////////////////////////////////////
export const showMessage = message => {
  showSearching(false);
  console.log(`❗️ERROR: ${message}`);
  alert(`❗️ERROR: ${message}`);
};

//////////////////////////////////////////////////////////////////////////////
// Función que recibe un valor lógico que indica si se va a realizar una
// búsqueda o si esta ya ha finalizado, realizando las siguientes acciones
// según este valor:
// - Si es true:
//    * oculta el scroll para evitar cualquier acción del usuario
//    * hace visible el div con la imagen que indica que la búsqueda está
//      en marcha
// - Si es false:
//    * permite que haya scroll para que el usuario pueda consulta la página
//    * oculta el div con la imagen que indica que la búsqueda está en marcha
// Independiente del valor del parámetro de entrada, siempre se resetean los
// valores de scroll de la página
//////////////////////////////////////////////////////////////////////////////
export const showSearching = visible => {
  window.scrollTo(0, 0);
  document.getElementsByTagName("body")[0].style.overflow = visible
    ? "hidden"
    : "scroll";
  document.getElementById("searching").style.display = visible
    ? "block"
    : "none";
};
