let allumettes = 50;

let nombreDeJoueurs;

// Boucle Do while
do {
    nombreDeJoueurs = Number(prompt("Combien de joueurs vont participer ? Minimum de 2 svp !"));
} while (isNaN(nombreDeJoueurs) || nombreDeJoueurs < 2);

let joueurDuTour = 1;

function retirerAllumettes(nbAllumettesQuiRestent, nbARetirer) {
    if (nbARetirer < 1 || nbARetirer > 6) {
        alert("Erreur : Vous devez retirer entre 1 et 6 allumettes.");
        return nbAllumettesQuiRestent; // Le nombre ne change pas même si le chiffre est pas bon
    }

    nbAllumettesQuiRestent = nbAllumettesQuiRestent - nbARetirer;

    if (nbAllumettesQuiRestent < 0) {
        alert("Erreur : Vous êtes en dessous de zéro, ça doit peler !");
    }

    return nbAllumettesQuiRestent; // Retourne le nouveau nombre d'allumettes
}

        while (allumettes > 0) {
            let nbARetirer = Number(prompt(`Joueur ${joueurDuTour}, il reste ${allumettes} allumettes. Combien voulez-vous en retirer, de 1 à 6 ?`));

        if (isNaN(nbARetirer) || nbARetirer < 1 || nbARetirer > 6) {
            alert("Erreur : Veuillez entrer un nombre valide entre 1 et 6.");
            continue; // Redemande un nombre correct
        }

        allumettes = retirerAllumettes(allumettes, nbARetirer);

        if (allumettes === 0) {
            alert(`Bravo Joueur ${joueurDuTour} ! Vous avez retiré la dernière allumette, vous avez gagné !`);
            break;
        }

    // if (joueurDuTour === 1) {
    //     joueurDuTour = 2;
    // } else {
    //     joueurDuTour = 1;
    // }

    if (joueurDuTour < nombreDeJoueurs) {
        joueurDuTour++;
    } else {
        joueurDuTour = 1;
    }
        
}
