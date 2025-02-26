import { traiterValeur } from "./s3/ep1/narrowing";
import { Cercle, Formes } from "./s3/ep2/formes";

console.log("nombre entré : ", traiterValeur(42));
console.log("mot entré : ", traiterValeur("Modibo"));

const rectangle = new Formes(10, 20);

console.log("Ceci est un rectangle de surface: ", rectangle.calculerSurface());

const cercle = new Cercle(45);

console.log("Ceci est un cercle de surface: ", cercle.calculerSurface());
