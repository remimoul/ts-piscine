interface IAnimal {
  nom: string;
  seDeplacer(): void;
}

export class Animal implements IAnimal {
  nom: string;

  constructor(nom: string) {
    this.nom = nom;
  }

  seDeplacer(): void {
    console.log(`L'animal ${this.nom} se déplace`);
  }
}
