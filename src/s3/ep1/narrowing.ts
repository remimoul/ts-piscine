export function traiterValeur(valeur: number | string) {
  if (typeof valeur === "string") {
    // valeur est de type string
    console.log("Longueur de la chaine : ", valeur.length);
  } else {
    // valeur est de type number
    console.log("multiplié / 2 : ", valeur * 2);
  }
  return valeur;
}
