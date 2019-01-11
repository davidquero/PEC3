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
    img.src = this.getImage();
    img.title = this.getName();
    img.alt = this.getName();
    img.setAttribute("onclick", 'searchHero("' + this.getName() + '")');

    let li = document.createElement("li");
    li.appendChild(img);
    characters.appendChild(li);

    console.log(
      `%c${this.getName()} %c(id: ${this.getId()}) %c(image: ${this.getImage()})`,
      "color: lightsalmon",
      "color: gray",
      "color: lightsalmon"
    );
  }
}
