import { creerScore, afficherScore } from "./s5/ep1/tuples";
import { vecteurDirection } from "./s5/ep2/enums";
import { deplacer } from "./s5/ep3/enums";

const score = creerScore();
afficherScore(score);

const direction = vecteurDirection(0);
console.log("Nord : ", direction);

const direction1 = vecteurDirection(1);
console.log("Sud : ", direction1);

const direction2 = vecteurDirection(2);
console.log("Est : ", direction2);

const direction3 = vecteurDirection(3);
console.log("Ouest : ", direction3);

const point: [number, number] = [5, 5];

console.log("point déplacer : ", deplacer(point, 2));
