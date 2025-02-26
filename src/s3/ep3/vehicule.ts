interface Vehicule {
  marque: string;
  annee: number;
}

function isVehicule(obj: any): obj is Vehicule {
  return obj && typeof obj.marque === "string" && typeof obj.annee === "number";
}

export function afficherVehicule(vehicule: Vehicule): void {
  if (!isVehicule(vehicule)) {
    throw new Error("Objet invalide pour un véhicule.");
  } else {
    console.log(
      `Le vehicule ${vehicule.marque} de l'année ${vehicule.annee} est valide.`
    );
  }
}
