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

  getDescription() {
    return this.description;
  }

  getImage() {
    return this.image;
  }

  showData() {
    console.log(
      `%c${this.name} %c(id: ${this.id}) %c(image: ${this.image})`,
      "color: lightsalmon",
      "color: gray",
      "color: lightsalmon"
    );
  }
}
