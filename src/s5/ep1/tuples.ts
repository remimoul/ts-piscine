export function creerScore(): [string, number] {
  return ["Alice", 100];
}

export function afficherScore(score: [string, number]): void {
  console.log(`Le joueur ${score[0]} a un score de ${score[1]}.`);
}
