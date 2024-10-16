var indices = [];
var tableau = ["t"];
var élément = "x";
var idx = tableau.indexOf(élément);
while (idx != -1) {
  indices.push(idx);
  idx = tableau.indexOf(élément, idx + 1);
}
console.log(élément);
