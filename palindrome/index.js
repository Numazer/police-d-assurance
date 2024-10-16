function palindrome(mot) {
    mot = mot.replace(/\s+/g, '').toLowerCase();
    const motInverse = mot.split('').reverse().join('');
    return mot === motInverse;
}

const motUtilisateur = prompt("Entrez un mot :");

if (palindromealindrome(motUtilisateur)) {
    console.log("true");
} else {
    console.log("false");
}


