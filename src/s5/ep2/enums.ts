enum Direction {
  Nord,
  Sud,
  Est,
  Ouest,
}

export function vecteurDirection(direction: Direction): [number, number] {
  switch (direction) {
    case Direction.Nord:
      return [0, -1];
    case Direction.Sud:
      return [0, 1];
    case Direction.Est:
      return [1, 0];
    case Direction.Ouest:
      return [-1, 0];
  }
}
