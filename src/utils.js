import { BASE_URL, API_PUBLIC_KEY } from "./config";
import Hero from "./classes/Hero";

export const fecthEndPoint = url =>
  fetch(url).then(response => response.json());

export const getCharactersUrl = heroName =>
  `${BASE_URL}/characters?name=${heroName}&apikey=${API_PUBLIC_KEY}`;

export const getComicsUrl = id =>
  `${BASE_URL}/comics?characters=${id}&apikey=${API_PUBLIC_KEY}`;

export const createHero = character =>
  new Hero(character.getId(), character.getName(), character.getDescription());
