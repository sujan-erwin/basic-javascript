// Var does not follow block scoping
{
    var a = 1;
    console.log(a); // 1
  }
  
  console.log(a); // 1
  
  {
    {
      var b = 2;
      console.log(b); // 2
    }
    // 2 (if b was declared using let or const, you would get a ReferenceError)
    console.log(b);
  }
  
  console.log(b); // 2