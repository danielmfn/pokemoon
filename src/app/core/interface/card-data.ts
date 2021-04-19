import { Ability } from './ability';
import { Attack } from './attack';
import { Images2 } from './images2';
import { Legalities2 } from './legalities2';
import { Set } from './set';
import { Tcgplayer } from './tcgplayer';
import { Weakness } from './weakness';

export interface CardData {
  id: string;
  name: string;
  supertype: string;
  subtypes: Array<string>;
  hp: string;
  types: Array<string>;
  rules: Array<string>;
  abilities: Array<Ability>;
  attacks: Array<Attack>;
  weaknesses: Array<Weakness>;
  retreatCost: Array<string>;
  convertedRetreatCost: number;
  set: Set;
  number: string;
  artist: string;
  rarity: string;
  nationalPokedexNumbers: Array<number>;
  legalities: Legalities2;
  images: Images2;
  tcgplayer: Tcgplayer;
}
