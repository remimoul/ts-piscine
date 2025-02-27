abstract class Forme {
  abstract calculerSurface(): number;
}

export class Rectangle extends Forme {
  constructor(private largeur: number, private hauteur: number) {
    super();
  }

  calculerSurface(): number {
    return this.largeur * this.hauteur;
  }
}

export class Cercle extends Forme {
  constructor(private rayon: number) {
    super();
  }

  calculerSurface(): number {
    return Math.PI * this.rayon ** 2;
  }
}
