// // insert element in array without using builtin methds

// let data = [3, 4, 5, 15, 38, 79, 6];
// let newEle = 90;
// let position = 2;
// // reverse loop
// for (let i = data.length - 1; i >= 0; i--) {
//   //   console.warn(i);
//   //   console.log(data[i]);
//   if (i >= position) {
//     data[i + 1] = data[i];
//     if (i === position) {
//       data[i] = newEle;
//     }
//   }
//   console.warn(data);
// }

// // with builtin method using splice

// let arr = [2, 34, 22, 4, 4, 566, 76];

// arr.splice(3, 0, 10);
// console.log(arr);

// without built in method

let array = [2, 3, 54, 78, 90, 65, 23, 12];

let newElement = 555;
const newPosition = 4;
// result should be [2,3,54,78,555,90,65,23,12]

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
  if (i >= newPosition) {
    array[i + 1] = array[i];
  }
  if (i === newPosition) {
    // array[i] = newPosition;
    array[i] = newElement;
  }
}

console.log(array);
