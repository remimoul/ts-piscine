export function premierElementep2<T>(tableau: T[]): T {
  if (tableau.length === 0) {
    console.error("tableau vide");
  }
  return tableau[0];
}
