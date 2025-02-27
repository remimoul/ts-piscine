export interface IAnimal {
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

export class Chien extends Animal {
  constructor(nom: string) {
    super(nom);
  }

  seDeplacer(): void {
    console.log(`Le chien ${this.nom} court`);
  }
}

export class Chat extends Animal {
  constructor(nom: string) {
    super(nom);
  }

  seDeplacer(): void {
    console.log(`Le chat ${this.nom} saute`);
  }
}

export function faireSeDeplacer(animal: IAnimal[]): void {
  animal.forEach((a) => a.seDeplacer());
}
