// Defining x in the global scope of the file
let x = 0;

// Defining myFunc, everything inside is in it's function scope
function myFunc() {
  // In order to set a value for y, JavaScript needs to find the value of x
  // Since the value of x is not defined within the funcion scope,
  // we have to go to the next scope outside the function (which happens to be the global scope)
  // In the global scope, we find x = 0 so y will be initialized with a value of 0 as well
  let y = x;
  console.log("Initial value of y is: ", y); // 0

  for (let i = 0; i < 5; i++) {
    // Again, y is not defined in the for loop's scope,
    // need to go up by one level to the function scope to get the value of y
    y = y + i;
    console.log("logging y: ", y);

    // Since x's value is not defined in the for loop's block scope,
    // JavaScript goes up to the function scope
    // The function scope does not contain a value for x either
    // so JavaScript goes up another scope level to the global scope
    console.log(x);
  }
}

myFunc();

// y= 0    i     y       x
//         0     0       0
//         1     1       0
//         2     3       0
//         3     6       0
//         4     10      0
//         5  