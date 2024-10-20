function decallerLesLettres(mot){
    const alphabet  = "abcdefghijklmnopqrstuvwxyz";
    let resultat = "";

    for(let i = 0; i < mot.length; i++) {
        // on commence i est a zero
        const lettre = mot[i];
        const index = alphabet.indexOf(lettre)  
    
           let nouvelindex = index + 3;
            resultat += alphabet[nouvelindex];

    }
    return resultat;

}

console.log(decallerLesLettres("banane"));