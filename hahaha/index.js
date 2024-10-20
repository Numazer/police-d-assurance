

function ajouterAh(chaineInitiale, ajout, nombre) {
    let resultat = chaineInitiale;
    for (let i = 0; i < nombre; i++) {
        resultat += ajout;
    }
    return resultat;
}


const chaineInitiale = "mouah";
const ajout = "ah";
const nombre = 6;


const resultat = ajouterAh(chaineInitiale, ajout, nombre);
console.log(resultat);