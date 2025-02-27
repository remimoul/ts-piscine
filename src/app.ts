import {
  Animal,
  Chien,
  Chat,
  faireSeDeplacer,
  IAnimal,
} from "./s4/ep2/animaux";

const cafard = new Animal("Cafard");
const chien = new Chien("Médor");
const chat = new Chat("Félix");

const animaux: IAnimal[] = [cafard, chien, chat];

faireSeDeplacer(animaux);
