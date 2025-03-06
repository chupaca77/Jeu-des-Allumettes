let allumettes = 50;

function retirerAllumettes(nbAllumettesQuiRestent, nbARetirer) {
    if (nbARetirer < 1 || nbARetirer > 6) {
        console.log("Erreur : Vous devez retirer entre 1 et 6 allumettes.");
        return nbAllumettesQuiRestent; // Le nombre ne change pas même si le chiffre est pas bon
    }

    nbAllumettesQuiRestent = nbAllumettesQuiRestent - nbARetirer;

    // if (nbAllumettesQuiRestent < 0) {
    //     nbAllumettesQuiRestent = 0; // Empêche un nombre négatif
    // }

    return nbAllumettesQuiRestent; // Retourne le nouveau nombre d'allumettes
}

// Boucle pour demander à l'utilisateur tant qu'il reste des allumettes
while (allumettes > 0) {
    let userNumber = prompt(`Il reste ${allumettes} allumettes. Combien voulez-vous en retirer ? (1 à 6)`);
    let nbARetirer = Number(userNumber); // Convertit l'entrée en nombre

    if (isNaN(nbARetirer) || nbARetirer < 1 || nbARetirer > 6) {
        console.log("Erreur : Veuillez entrer un nombre valide entre 1 et 6.");
        continue; // Redemande une entrée correcte
    }

    allumettes = retirerAllumettes(allumettes, nbARetirer);

    if (allumettes === 0) {
        console.log("Bravo ! Vous avez retiré la dernière allumette et gagné !");
    }
}