// search element in array
// if jo item find kr raha hai wo more then one time a jae then kese solve hoga
//
let data = [20, 40, 5, 10, 70, 80, 99];
let item = 70;
let index = undefined;
for (let i = 0; i < data.length - 1; i++) {
  if (data[i] === item) {
    index = i;
    console.log(index);
    break;
  }
}

// by default method
console.log(data.indexOf(item));
