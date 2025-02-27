import { creerScore, afficherScore } from "./s5/ep1/tuples";
import { vecteurDirection } from "./s5/ep2/enums";

const score = creerScore();
afficherScore(score);

const direction = vecteurDirection(0);
console.log(direction);

const direction1 = vecteurDirection(1);
console.log(direction1);

const direction2 = vecteurDirection(2);
console.log(direction2);

const direction3 = vecteurDirection(3);
console.log(direction3);
