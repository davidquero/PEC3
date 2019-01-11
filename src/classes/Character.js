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

  showData(characters) {
    let img = document.createElement("img");
    img.className = "portrait";
    img.src = this.image;
    img.title = this.name;
    img.alt = this.name;
    img.setAttribute("onclick", 'searchHero("' + img.title + '")');

    let li = document.createElement("li");
    li.appendChild(img);
    characters.appendChild(li);

    console.log(
      `%c${this.name} %c(id: ${this.id}) %c(image: ${this.image})`,
      "color: lightsalmon",
      "color: gray",
      "color: lightsalmon"
    );
  }
}
