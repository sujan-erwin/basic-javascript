// Define variable x and initialize its value to 1
let x = 1;

// Define function that will console.log the value of x
function myFunc() {
  console.log(x);
}

// Define function that defines a local variable x = 50 and calls myFunc()
function logVariable() {
  let x = 50;
  myFunc();
}

// What will logVariable() return? 1, 50, something else?
logVariable(); // This will log 1 to the javascript console