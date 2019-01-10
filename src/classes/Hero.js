import Character from "./Character.js";

export default class Hero extends Character {
  constructor(id, name, description) {
    super(id, name, description);
    this.comics = [];
    this.companions = [];
  }

  addComic(comic) {
    this.comics.push(comic);
  }

  addCompanion({ id, name, description }) {
    this.companions.push(new Character(id, name, description));
  }

  isCompanionAlreadyFetched(name) {
    return this.companions.includes(name) || name === this.name;
  }

  showData() {
    console.log("\n");
    console.log(
      `%c${this.name} %c(id: ${this.id})`,
      "color: red",
      "color: gray"
    );
    console.log(`%c${this.description}`, "color: gray; ");
    console.log("\n");
    console.log("%cComics with other Marvel characters", "color: gray");
    console.log("-------------------------------------");

    this.comics.forEach(comic => comic.showData(this.companions));
  }
}
