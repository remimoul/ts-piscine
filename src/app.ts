import { affichePersonne } from "./ep1/personne";
import { affichePersonneAvancee } from "./ep2/personne";
import { PersonnePro, affichePersonnePro } from "./ep3/personnePro";

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

const employe: PersonnePro = {
  nom: "Modibo",
  poste: "Développeur",
};

const client: PersonnePro = {
  nom: "Pierre",
  entreprise: "Google",
};

console.log("Affichage ep3 - employe");
affichePersonnePro(employe);

console.log("Affichage ep3 - client");
affichePersonnePro(client);
