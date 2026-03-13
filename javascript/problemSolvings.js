//1 reverse a string

const string = "javascript";
function reverseString(str) {
  const r = str.split("").reverse().join("");
  console.log(r);
}

reverseString(string);

//2 check even or odd
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even number`);
  } else {
    console.log(`${number} is odd number`);
  }
}

checkEvenOrOdd(7);

//3 count how many vowels exist in a string

const vowel = "programming";

const result = vowel.split(" "); // ["programming"]

let num = "aeiou";
const one = result.filter((item) => {
  const r = item.result === "aeiou";
  return r;
});
console.log(result);

// 3 sum of array

const arr = [1, 2, 3, 4, 5];
const reduced = arr.reduce((total, number) => total + number, 0);

console.log(reduced);

//4 find the smallest number

const smallestNumber = [8, 3, 10, 2, 6];

const r = smallestNumber.map((num) => {});
