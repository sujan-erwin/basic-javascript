// This is an example of block scope,
// typically, the curly brackets will be attached to something like an if, for, while loop
// and not by themselves as seen in this example
// but this makes it easier to illustrate hw block scope works

// Lets call this block scope A
{
    // Anything defined inside these braces is block scope
    let a = 1;
    console.log(a); // 1
  }
  //"ReferenceError: a is not defined"
  // Can't access a outside of it's block scope
  console.log(a);
  
  // Lets call this block scope B
  {
    let b = 2;
    console.log(b); // 2
  
    // Cannot access "a" within block scope B since "a" was defined in block scope A
    console.log(a); // ReferenceError: a is not defined
  }
  
  // block scope C
  {
    let c = 3;
    console.log(c); // 3
  
    // block scope D
    // block scope D is part of block scope D
    // Therefore, variables declared in block scope C are also accessible in block scope D
    // However, variables declared in block scope D are NOT part of block scope C
    {
      let d = 4;
      console.log(d); // 4
      console.log(c); // 3
    }
    // "ReferenceError: d is not defined" because "d" is part of block scope D but not block scope C
    console.log(d);
  }
  
  // More Examples of Block Scope
  // Note, the below if-else...if-else loop would never actually run
  // the else-if or else portion of the code due to the if statment always
  // evaluating to true first, this is just to give you an idea of the block scope.
  
  // Example of block scope for an if-else...if-else loop
  if (true) {
    let x = 1;
    console.log("x is in the if-statement's block scope");
  } else if (true) {
    let y = 2;
    console.log("y is in the else...if-statement's block scope");
  } else {
    let z = 3;
    console.log("z is in the else-statement's block scope");
  }
  
  // Example of block scope within a for loop
  for (let i = 0; i < 5; i++) {
    let a = i; // a is in the for loop's block scope
    console.log(a);
  }
  // Cannot access the variable "a" outside of the block scope
  console.log(a); // Uncaught ReferenceError: a is not defined
  
  // Nested loops
  // Outer Loop
  for (let i = 0; i < 5; i++) {
    // This variable is defined in the outer loop's block scope,
    // it will be accessible by the inner loop
    let a = 5;
    console.log("Running outer for loop:");
    console.log(a); // 5
  
    // This inner for loop is defined inside the curly brackets of the outer for loop
    // Therefore, the inner for loop is in the block scope of the outer for loop
    // The inner for loop will have access to variables declared
    // in the outer for loop since they are in the same block scope
    // However, variables declared in the inner loop will not be accessible by the outer loop
    for (let j = 0; j < 5; j++) {
      // This variable is defined in the inner loop's block scope,
      // it is not accessible by the outer loop
      let b = 10;
      console.log("Running inner for loop:");
      console.log(a); // Will return 5
      console.log(b); // 10
    }
  
    console.log("Running outer for loop:");
    console.log(a); // 5
    // "ReferenceError: b is not defined" (because b is not in the block scope of the outer loop)
    console.log(b);
  }