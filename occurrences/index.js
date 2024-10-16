var indices = [];
let [t]  = [2,3,1,4,8,2,1,4,5];
let  x = 1;
var idx = tableau.indexOf(élément);
while (idx != -1) {
  indices.push(idx);
  idx = tableau.indexOf(élément, idx + 1);
}
console.log(x);
