// delete element from an array

let data = [2, 230, 23, 233, 445, 500, 667, 678, 100];
let postion = 3; // 233

for (let i = postion; i < data.length - 1; i++) {
  // console.warn(data[i]);
  data[i] = data[i + 1];
  // console.warn(data[i]);
}
data.length = data.length - 1;
console.log(data);
