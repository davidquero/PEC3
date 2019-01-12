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

  getDescription() {
    return this.description != null && this.description !== ""
      ? this.description
      : "No description";
  }

  addCharacter(characterName) {
    this.characterNames.push(characterName);
  }

  showData(characters, comics) {
    console.log(`%c[Comic]: ${this.getTitle()}`, "color: indianred");

    let comic = document.createElement("li");
    comic.className = "comicListItem";

    let title = document.createElement("h2");
    title.innerHTML = this.getTitle();
    comic.appendChild(title);

    let charactersHeading = document.createElement("h3");
    charactersHeading.innerHTML = "Characters";
    comic.appendChild(charactersHeading);

    let charactersList = document.createElement("ul");
    charactersList.className = "companions";
    this.characterNames.forEach(name => {
      const character = characters.find(
        character => character.getName() === name
      );
      character.showData(charactersList);
    });
    comic.appendChild(charactersList);

    let descriptionHeading = document.createElement("h3");
    descriptionHeading.innerHTML = "Description";
    comic.appendChild(descriptionHeading);

    let description = document.createElement("p");
    description.className = "description";
    description.innerText = this.getDescription();
    comic.appendChild(description);

    comics.appendChild(comic);

    console.log("\n");
  }
}
