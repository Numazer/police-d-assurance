function differentstarifs(age, annéespermis, nbAccident, fidélité) {
    let tarif ="refusé";


if (age<25 && annéespermis<=2 && nbAccident===0){
    tarif="D";}
else if ((age>25  && annéespermis<=2) || (age<25 && annéespermis>2)) { 
    tarif= "C"}

if (age>25 && annéespermis>2){
    if (nbAccident===0){
    tarif= "B";}
    if (nbAccident===1){
    tarif= "C";}
    if (nbAccident===2){
    tarif= "D";}
    }

    if (fidélité > 1) {
        if (tarif === 'B') {
            tarif = 'A';
        } else if (tarif === 'C') {
            tarif = 'B';
        } else if (tarif === 'D') {
            tarif = 'C';
        }
    }
    return tarif;
}
console.log(differentstarifs(28, 2, 0, 2));