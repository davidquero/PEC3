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

    // Update the image
    let image = document.querySelector("img");
    image.src = this.getImage();
    image.alt = this.getName();
    image.title = this.getName();

    // Update the hero name and description
    let heroDescription = document.getElementById("heroDescription");
    heroDescription.querySelector("h1").innerHTML = this.getName();
    heroDescription.querySelector("p").innerHTML = this.getDescription();

    let comics = document.getElementById("comicList");
    // Empty de comics list
    while (comics.firstChild) {
      comics.removeChild(comics.firstChild);
    }

    // Update the companions list
    this.comics.forEach(comic => comic.showData(this.companions, comics));
  }
}
