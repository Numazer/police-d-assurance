let etudiants = [
    { nom: 'Agathe', note: 14 },
    { nom: 'Wlad', note: 17 },
    { nom: 'Yohann', note: 16 },
    { nom: 'Laureline', note: 17 },
    { nom: 'Christian', note: 12 },
    { nom: 'Yannick', note: 19 },
    { nom: 'Kaique', note: 17 },
    { nom: 'Angélique', note: 18 },
    { nom: 'Dorian', note: 15 },
    { nom: 'emmanuel', note: 16 },
    { nom: 'Jeremy', note: 13 },
    { nom: 'Sylvain', note: 17 },
    { nom: 'Yann', note: 15 },
    { nom: 'Amin', note: 16 }
    ]


    let etudiantsFiltres = [];
for (let i = 0; i < etudiants.length; i++) {
    if (etudiants[i].note > 15) {
        etudiantsFiltres.push(etudiants[i]);
    }
}


// Étape 2: Trier les étudiants filtrés par ordre alphabétique de leur nom
let etudiantsTries = [];
while (etudiantsFiltres.length > 0) {
    let minIndex = 0;
    for (let i = 1; i < etudiantsFiltres.length; i++) {
        if (etudiantsFiltres[i].nom.toLowerCase() < etudiantsFiltres[minIndex].nom.toLowerCase()) {
            minIndex = i;
        }
    }
    etudiantsTries.push(etudiantsFiltres[minIndex]);
    etudiantsFiltres.splice(minIndex, 1); // Retirer l'élément trié de la liste
}

// Étape 3: Calculer la moyenne des notes
let sommeDesNotes = 0;
for (let i = 0; i < etudiantsTries.length; i++) {
    sommeDesNotes += etudiantsTries[i].note;
}
let moyenne = sommeDesNotes / etudiantsTries.length;

// Afficher les résultats
console.log("Étudiants avec note > 15 :" + etudiantsFiltres);
console.log(etudiantsTries);
console.log("Moyenne des notes : " + moyenne.toFixed(2));