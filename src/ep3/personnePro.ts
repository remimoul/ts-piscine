interface Employe {
  nom: string;
  poste: string;
}

interface Client {
  nom: string;
  entreprise: string;
}

export type PersonnePro = Employe | Client;

export function affichePersonnePro(personne: PersonnePro) {
  if ("poste" in personne) {
    console.log(`Employé : ${personne.nom} travaille comme ${personne.poste}`);
  } else {
    console.log(
      `Client : ${personne.nom} est associé à l'entreprise ${personne.entreprise}`
    );
  }
}
