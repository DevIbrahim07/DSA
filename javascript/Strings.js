//1 reverse a string
function reverseString(stri) {
  const reversing = String(stri).split("").reverse().join("");
  console.log(reversing);
  return reversing;
}

reverseString("helo");

// 2 find largest number in an array

const array = [4, 8, 2, 10, 6];
let largest = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > largest) {
    largest = array[i];
  }
}
console.log(largest);

const arr = [2, 3, 45, 2, 6];
console.log(Math.max(...arr));
