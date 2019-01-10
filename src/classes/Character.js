export default class Character {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  showData() {
    console.log(
      `%c${this.name} %c(id: ${this.id})`,
      "color: lightsalmon",
      "color: gray"
    );
  }
}
