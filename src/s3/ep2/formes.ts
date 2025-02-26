export class Formes {
  largeur: number;
  hauteur: number;
  constructor(largeur: number, hauteur: number) {
    this.largeur = largeur;
    this.hauteur = hauteur;
  }
  calculerSurface(): number {
    return this.largeur * this.hauteur;
  }
}

export class Cercle {
  rayon: number;
  constructor(rayon: number) {
    this.rayon = rayon;
  }
  calculerSurface(): number {
    return this.rayon * this.rayon * Math.PI;
  }
}
