interface Personne {
  readonly id: number;
  nom: string;
  age: number;
  adresse?: { rue: string; ville: string };
}

export function affichePersonneAvancee(personne: Personne) {
  if (personne.adresse) {
    console.log(
      "Bonjour, je m'appelle",
      personne.nom +
        " ID " +
        personne.id +
        " et j'ai " +
        personne.age +
        " ans" +
        "J'habite au " +
        personne.adresse.rue +
        " à " +
        personne.adresse.ville
    );
  } else {
    console.log(
      "Bonjour, je m'appelle",
      personne.nom + " ID " + personne.id + " et j'ai " + personne.age + " ans"
    );
  }
}
