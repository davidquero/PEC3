export default class Character {
  constructor(id, name, description, image) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.image = image;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  ////////////////////////////////////////////////////////////////////////
  // Propiedad que devuelve la descripción del personaje.
  // Comprueba que no esté vacía, devolviendo un valor que indica que el
  // personaje no tiene descripción en caso afirmativo.
  ////////////////////////////////////////////////////////////////////////
  getDescription() {
    return this.description != null && this.description !== ""
      ? this.description
      : "No description";
  }

  getImage() {
    return this.image;
  }

  //////////////////////////////////////////////////////////////////////////
  // Función que recibe una lista de personajes, crea un elemento para
  // el personaje actual y lo añade a esta lista que recibe como parámetro.
  //////////////////////////////////////////////////////////////////////////
  showData(characters) {
    // Se crea un elemento para la imagen del personaje, informando
    // todos los atributos necesarios, así como el evento "onclick"
    // para que la imagen sea clicable, desde donde se llama a la
    // función searchHero pasándole como parámetro el nombre de este
    // personaje, que es la encargada de realizar la búsqueda
    let img = document.createElement("img");
    img.className = "portrait";
    img.src = this.getImage();
    img.title = this.getName();
    img.alt = this.getName();
    img.setAttribute("onclick", 'searchHero("' + this.getName() + '")');

    // Se crea el elemento de la lista de personajes en el que se va a
    // añadir la imagen de este personaje
    let li = document.createElement("li");
    li.appendChild(img);

    // Se añade el elemento que se ha creado para el personaje a la lista
    // de personajes
    characters.appendChild(li);

    console.log(
      `%c${this.getName()} %c(id: ${this.getId()}) %c(image: ${this.getImage()})`,
      "color: lightsalmon",
      "color: gray",
      "color: lightsalmon"
    );
  }
}
