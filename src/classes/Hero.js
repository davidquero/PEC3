import Character from "./Character.js";

export default class Hero extends Character {
  constructor(id, name, description, image) {
    super(id, name, description, image);
    this.comics = [];
    this.companions = [];
  }

  addComic(comic) {
    this.comics.push(comic);
  }

  addCompanion({ id, name, description, image }) {
    this.companions.push(new Character(id, name, description, image));
  }

  isCompanionAlreadyFetched(name) {
    return this.companions.includes(name) || name === this.name;
  }

  ///////////////////////////////////////////////////////////////////////////
  // Función que actualiza los datos de la página con los del héroe para el
  // que se hace la búsqueda y llama a la función para actualizar la lista
  // de cómics de este héroe.
  ///////////////////////////////////////////////////////////////////////////
  showData() {
    console.log("\n");
    console.log(
      `%c${this.getName()} %c(id: ${this.getId()})`,
      "color: red",
      "color: gray"
    );
    console.log(`%c${this.getDescription()}`, "color: gray; ");
    console.log("\n");
    console.log("%cComics with other Marvel characters", "color: gray");
    console.log("-------------------------------------");

    // Se actualiza la imagen principal del héroe en la página
    let image = document.querySelector("img");
    image.src = this.getImage();
    image.alt = this.getName();
    image.title = this.getName();

    // Se actualizan el nombre y la descripción del héroe en la página
    let heroDescription = document.getElementById("heroDescription");
    heroDescription.querySelector("h1").innerHTML = this.getName();
    heroDescription.querySelector("p").innerHTML = this.getDescription();

    // Se obtiene la lista de cómics y se vacía, para eliminar los
    // resultados de una consulta anterior
    let comics = document.getElementById("comicList");
    while (comics.firstChild) {
      comics.removeChild(comics.firstChild);
    }

    // Se actualiza la lista de cómics
    this.comics.forEach(comic => comic.showData(this.companions, comics));
  }
}
