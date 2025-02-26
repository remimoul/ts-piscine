import { premierElement } from "./s2/ep1/generics";

const nombres = [1, 2, 3];
console.log("tableau nombres : ", premierElement(nombres));

const prenoms = ["Jean", "Jacques", "Pierre"];
console.log("tableau string : ", premierElement(prenoms));

const objets = [
  { id: 1, name: "modibo" },
  { id: 2, name: "jean" },
  { id: 3, name: "pierre" },
];
console.log("tableau objets : ", premierElement(objets));
