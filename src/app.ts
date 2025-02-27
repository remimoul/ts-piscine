import {
  Animal,
  Chien,
  Chat,
  faireSeDeplacer,
  IAnimal,
} from "./s4/ep2/animaux";

import { Rectangle, Cercle } from "./s4/ep3/formes";

const cafard = new Animal("Cafard");
const chien = new Chien("Médor");
const chat = new Chat("Félix");

const animaux: IAnimal[] = [cafard, chien, chat];

faireSeDeplacer(animaux);

const rectangle = new Rectangle(10, 15);
const cercle = new Cercle(50);

console.log("Surface du rectangle : ", rectangle.calculerSurface());
console.log("Rayon du cercle : ", cercle.calculerSurface());
