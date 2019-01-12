export default class Comic {
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.characterNames = [];
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  ////////////////////////////////////////////////////////////////////////
  // Propiedad que devuelve la descripción del cómic.
  // Comprueba que no esté vacía, devolviendo un valor que indica que el
  // cómic no tiene descripción en caso afirmativo.
  ////////////////////////////////////////////////////////////////////////
  getDescription() {
    return this.description != null && this.description !== ""
      ? this.description
      : "No description";
  }

  addCharacter(characterName) {
    this.characterNames.push(characterName);
  }

  ///////////////////////////////////////////////////////////////////////////
  // Función que recibe una lista de personajes y una lista de cómics, crea
  // un elemento para el cómic actual, al que añade la lista de personajes
  // que ha recibido como parámetro y, finalmente, añade el elemento creado
  // para el cómic actual a la lista de cómics recibida como parámetro.
  ///////////////////////////////////////////////////////////////////////////
  showData(characters, comics) {
    console.log(`%c[Comic]: ${this.getTitle()}`, "color: indianred");

    // Se crea el elemento de la lista de cómics en el que se va a añadir
    // el cómic actual
    let comic = document.createElement("li");
    comic.className = "comicListItem";

    // Se crea el título para el cómic y se añade al elemento que se ha
    // creado para la lista de cómic
    let title = document.createElement("h2");
    title.innerHTML = this.getTitle();
    comic.appendChild(title);

    // Se crea el encabezado para la lista de personajes del cómic
    // y se añade al elemento que se ha creado para el cómic actual
    let charactersHeading = document.createElement("h3");
    charactersHeading.innerHTML = "Characters";
    comic.appendChild(charactersHeading);

    // Se crea una lista para los personajes compañeros del cómic que
    // se ha recibido como parámetro y se añade al elemento que se ha
    // creado para el cómic actual
    let charactersList = document.createElement("ul");
    charactersList.className = "companions";
    this.characterNames.forEach(name => {
      const character = characters.find(
        character => character.getName() === name
      );
      character.showData(charactersList);
    });
    comic.appendChild(charactersList);

    // Se crea el encabezado para la lista de personajes del cómic
    // y se añade al elemento que se ha creado para el cómic actual
    let descriptionHeading = document.createElement("h3");
    descriptionHeading.innerHTML = "Description";
    comic.appendChild(descriptionHeading);

    // Se crea la descripción para el cómic y se añade al elemento
    // que se ha creado para el cómic actual
    let description = document.createElement("p");
    description.className = "description";
    description.innerText = this.getDescription();
    comic.appendChild(description);

    // Se añade el elemento que se ha creado para el cómic a la lista
    // de cómics
    comics.appendChild(comic);

    console.log("\n");
  }
}
