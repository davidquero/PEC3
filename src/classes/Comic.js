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

  addCharacter(characterName) {
    this.characterNames.push(characterName);
  }

  showData(characters, comics) {
    console.log(`%c[Comic]: ${this.title}`, "color: indianred");

    let comic = document.createElement("li");
    comic.className = "comicListItem";

    let title = document.createElement("h2");
    title.innerHTML = this.title;
    comic.appendChild(title);

    let charactersHeading = document.createElement("h3");
    charactersHeading.innerHTML = "Characters";
    comic.appendChild(charactersHeading);

    let charactersList = document.createElement("ul");
    charactersList.className = "companions";
    this.characterNames.forEach(name => {
      const character = characters.find(character => character.name === name);
      character.showData(charactersList);
    });
    comic.appendChild(charactersList);

    let descriptionHeading = document.createElement("h3");
    descriptionHeading.innerHTML = "Description";
    comic.appendChild(descriptionHeading);

    let description = document.createElement("p");
    description.className = "description";
    description.innerText = this.description;
    comic.appendChild(description);

    comics.appendChild(comic);

    console.log("\n");
  }
}
