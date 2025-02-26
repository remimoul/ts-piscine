interface Personne {
  nom: string;
  age: number;
}

export function affichePersonne(personne: Personne) {
  console.log(
    "Bonjour, je m'appelle",
    personne.nom + " et j'ai " + personne.age + " ans."
  );
}
