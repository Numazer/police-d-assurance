function afficherMotif(n) {
    for (let i = 0; i < n; i++) {
        let ligne = '';
        for (let j = 0; j < n; j++) {
            if ((i + j) % 2 === 0) {
                ligne += '#';
            } else {
                ligne += '*';
            }
        }
        console.log(ligne);
    }
}

afficherMotif(5);