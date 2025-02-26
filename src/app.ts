import { affichePersonne } from "./ep1/personne";
import { affichePersonneAvancee } from "./ep2/personne";

const personne1 = {
  nom: "Modibo",
  age: 17,
};

console.log("Affichage ep1");
affichePersonne(personne1);

const personne2 = {
  nom: "Modibo",
  age: 17,
  id: 1,
  adresse: {
    rue: "40 rue du chemin vert",
    ville: "Bamako",
  },
};

const personne3 = {
  nom: "Pierre",
  age: 17,
  id: 2,
};

console.log("Affichage ep2 - personne2");
affichePersonneAvancee(personne2);

console.log("Affichage ep2 - personne3");
affichePersonneAvancee(personne3);
