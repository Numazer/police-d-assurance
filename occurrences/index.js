let indices = [];
let t= [2,3,1,4,8,2,1,4,5];
let  x = 1;
var idx = t.indexOf(x);
while (idx != -1) {
  indices.push(idx);
  idx = t.indexOf(x, idx + 1);
}
console.log(x);
