/*function afficherEtoiles() {
    let lignes = 10;


    for (let i = 1; i <= lignes; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

afficherEtoiles();*/

function pyramid(n) {
 
    for(let i=n; i>= 0; i--){
 
      let star2 = '*'. repeat(i)

   
      console.log(star2);
 
    }

  }
 

let n = window.prompt("Nombre d'etages");
pyramid(n);