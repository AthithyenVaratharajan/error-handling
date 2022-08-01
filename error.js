// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}



// 2.
function sayName(string){
  if (typeof string !== "string"){
    throw new Error("Invalid name! Must be a string!");
  }
  console.log(string);



}
// tests

// Your code here
try{
 sum(array);
  console.log("Success!")
} catch (error){
  if (error instanceof TypeError){
    console.error(`${error.name}: ${error.message}`);
  } else {
    console.error(error.message);
  }
}

console.log("done");



// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

function giveMeNumber(num) {
  if (typeof num !== "number") {
    throw new Error("Give me a number!");
  } else {
    return "yay number!";
  }
}
