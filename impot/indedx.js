function estimposable (){

    let age = parseInt(prompt("Entrez votre âge :"));

    let sexe = prompt("Entrez votre sexe (H pour homme, F pour femme) :").toUpperCase();

    let imposable = false;

    if (sexe === "H"); {
        if (age>18); {
            imposable = true;
        }
    }
    if (sexe === "F") {
        if (age>18 && age<35) {
            imposable = true;
        }
    }

    if (imposable) {
        console.log("Le contribuable est imposable.");
    } else {
        console.log("Le contribuable n'est pas imposable.");
    }

    }

    estimposable();