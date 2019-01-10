import Character from "./classes/Character";
import Comic from "./classes/Comic";
import { MIN_HEROES } from "./config";
import {
  fecthEndPoint,
  getCharactersUrl,
  getComicsUrl,
  createHero
} from "./utils";

async function getComics(heroData) {
  const hero = createHero(heroData);
  const urlComics = getComicsUrl(hero.getId());

  await fecthEndPoint(urlComics)
    .then(async function({ data }) {
      const { results } = data;

      for (const result of results) {
        const { id, title, characters } = result;
        const { available, items } = characters;

        if (available > MIN_HEROES) {
          var comic = new Comic(id, title);

          for (const item of items) {
            const { name } = item;

            if (!hero.isCompanionAlreadyFetched(name)) {
              const heroData = await getCharacterData(name);
              hero.addCompanion(heroData);
              comic.addCharacter(name);
            }
          }

          hero.addComic(comic);
        }
      }
    })
    .catch(exception => console.log(`❗️ERROR: ${exception}`));

  return hero;
}

async function getCharacterData(name) {
  const url = getCharactersUrl(name);
  const hero = await fecthEndPoint(url)
    .then(function({ data }) {
      const { id, name, description, thumbnail } = data.results[0];
      const { path, extension } = thumbnail;
      let image = `${path}.${extension}`;

      return new Character(id, name, description, image);
    })
    .catch(exception => console.log(`❗️ERROR: ${exception}`));

  return hero;
}

export async function getMarvelDataFor(heroName) {
  console.log(
    `🕝 %cLoading data for "%c${heroName}%c". Please stand by...`,
    "color:gray",
    "color:red;",
    "color:gray"
  );

  const hero = await getCharacterData(heroName)
    .then(hero => getComics(hero))
    .catch(exception => console.log(`❗️ERROR: ${exception}`));
  hero.showData();

  console.log(
    `✅ %cData for "%c${heroName}%c" loaded succesfully`,
    "color:gray",
    "color:red",
    "color:gray"
  );
}
