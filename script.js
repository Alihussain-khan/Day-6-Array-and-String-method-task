console.log("running");

//Task a
const numbers = [1, 2, 3, 4, 5];

//Task b
numbers.push(6);
//Another way of achieving task b
// numbers[numbers.length] = 6;
console.log("Array after adding 6th element " + numbers);

//Task c
numbers.shift();
console.log("Array After removing first element " + numbers);

//Task d
console.log("Array after reverse " + numbers.reverse());

//Task e
console.log("Array after joinging with a comma " + numbers.join(","));

//Task f
const numbers2 = numbers.map(squared);

function squared(value, index, array) {
  return value * value;
}
console.log("Squared Array " + numbers2);
