import { premierElement } from "./s2/ep1/generics";
import { premierElementep2 } from "./s2/ep2/generics";
import { Voiture, getProperty } from "./s2/ep3/generics";

console.log(
  "tableau string : ",
  premierElement<string>(["Jean", "Jacques", "Pierre"])
);

console.log("tableau number : ", premierElement<number>([1, 2, 3, 4, 5]));

console.log(
  "tableau objets : ",
  premierElement<object>([
    { id: 1, name: "modibo" },
    { id: 2, name: "jean" },
    { id: 3, name: "pierre" },
  ])
);

console.log("tableau vide :", premierElementep2<number>([]));

const maVoiture: Voiture = {
  marque: "Mercedes",
  modele: "Classe E",
  annee: 2024,
};

console.log("ep3 : ", getProperty(maVoiture, "marque"));

console.log("verif key : ", getProperty(maVoiture, "fuel"));
