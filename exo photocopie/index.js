function calculerPrixPhotocopies(n) {
    let prixTotal = 0;

    if (n > 30) {
        // Prix pour les 10 premières photocopies
        prixTotal += 10 * 0.10;
        // Prix pour les 20 photocopies suivantes
        prixTotal += 20 * 0.09;
        // Prix pour les photocopies au-delà de 30
        let photocopiesRestantes = n - 30;
        prixTotal += photocopiesRestantes * 0.08;
    } else if (n > 10) {
        // Prix pour les 10 premières photocopies
        prixTotal += 10 * 0.10;
        // Prix pour les photocopies restantes jusqu'à 30
        let photocopiesRestantes = n - 10;
        prixTotal += photocopiesRestantes * 0.09;
    } else {
        // Prix pour les n photocopies si n <= 10
        prixTotal += n * 0.10;
    }

    console.log(`Le prix total pour ${n} photocopies est : ${prixTotal.toFixed(2)} €`);
}

let nombrePhotocopies = prompt("Entrez le nombre de photocopies :");
calculerPrixPhotocopies(parseInt(nombrePhotocopies));
