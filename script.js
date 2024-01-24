console.log("running");

//Task a
let message = "Hello, World!";

//Task b
console.log(message.substring(0, 5));

//Task c
console.log(message.toLocaleUpperCase());

//Task d
let includes = message.match(/world/i);
if (includes == null) {
  console.log("flase");
} else {
  console.log("True");
}

//Task e
let replaced = message.replace("World", "Ali");
console.log(replaced);

//Task f
//easier way
const arr = [...message].map((e) => e);
// console.log(message.split(""));
console.log(arr);
