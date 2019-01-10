export default class Comic {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.characterNames = [];
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  addCharacter(characterName) {
    this.characterNames.push(characterName);
  }

  showData(characters) {
    console.log(`%c[Comic]: ${this.title}`, "color: indianred");

    this.characterNames.forEach(name => {
      const character = characters.find(character => character.name === name);
      character.showData();
    });

    console.log("\n");
  }
}
