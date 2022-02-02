function myFuncVar() {
    // Declare a variable using var inside myFunc's funciton scope
    var x = 1;
    console.log(x);
  
    if (true) {
      // Since var is function scoped and not block scoped,
      // we are actually overwriting the value of the x variable
      var x = 2;
      console.log(x);
    }
    // Will print out 2 since we overwrote the variable in the if statement
    console.log(x);
  }
  
  function myFuncLet() {
    // Declare a variable using var inside myFunc's funciton scope
    let x = 1;
    console.log(x);
  
    if (true) {
      // Creating a new variable x = 2 inside the block scope
      // (this is not accessible outside of the if statement's curly braces)
      let x = 2;
      console.log(x);
    }
    // 1 since console.log() cannot access x = 2 variable defined
    // in the if statement due to block scope
    console.log(x);
  }
  
  // Call the functions
  myFuncVar();
  myFuncLet();