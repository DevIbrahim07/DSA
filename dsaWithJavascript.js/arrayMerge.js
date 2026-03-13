//  merge two different arrays
let data1 = [2, 34, 56, 676, 76, 82, 90];
let data2 = [23, 12, 3, 43, 56, 74, 89, 90, 87, 66];

let data3 = [];

for (i = 0; i < data1.length; i++) {
  data3[i] = data1[i];

  console.log(data3[i]);
}

for (let i = 0; i < data2.length; i++) {
  data3[data1.length + i] = data2[i];
  console.log(data3);
}

// reverse array // also spreacd operator

let dummy = [10, 20, 40];
//dummy.reverse()
let dummy2 = [20, 40, 50, 60];

let dummy3 = [...dummy, ...dummy2];
console.log(dummy3);

// merger array using while loop

let data11 = [3, 7, 12, 34, 56, 90];
let data22 = [4, 9, 25, 45];
let data33 = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;
while (d1 < data11.length && d2 < data22.length) {
  if (data11[d1] < data22[d2]) {
    data33[d3] = data11[d1];
    d1++;
    console.log(data33[d3]);
  } else {
    data33[d3] = data22[d2];

    d2++;
    console.log(data33[d3]);
  }
  d3++;
}
while (d1 < data11.length) {
  data33[d3] = data11[d1];
  d1++;
  d3++;
}
console.log(data33);
