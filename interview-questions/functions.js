// 1. What would be the output of following code ?
function funcA(){
	console.log("funcA ", this);
	(function innerFuncA1(){
		console.log("innerFunc1", this);
		(function innerFunA11(){
			console.log("innerFunA11", this);
		})();
	})();
}
	
console.log(funcA());

// funcA Window {...} innerFunc1 Window {...} innerFunA11 Window {...}

// 2. What would be the output of following code ?

var obj = {
	message: "Hello",
	innerMessage: !(function() {
		console.log(this.message);
	})()
};
	
console.log(obj.innerMessage);

// undefined true

// 3. What would be the output of following code ?

var obj = {
	message: "Hello",
	innerMessage: function() {
		return this.message;
	}
};
	
console.log(obj.innerMessage());

// Hello

// 4. What would be the output of following code ?

var obj = {
    message: 'Hello',
    innerMessage: function () {
      (function () {
        console.log(this.message);
      }());
    }
  };
  console.log(obj.innerMessage());

  // undefined

// 5. What would be the output of following code ?

var obj = {
    message: 'Hello',
    innerMessage: function () {
        var self = this;
      (function () {
        console.log(self.message);
      }());
    }
  };
  console.log(obj.innerMessage());

  // 'Hello'

// 6. What would be the output of following code ?

function myFunc(){
	console.log(this.message);
}
myFunc.message = "Hi John";
	
console.log(myFunc());

// undefined

// 7. What would be the output of following code ?

function myFunc(){
	console.log(myFunc.message);
}
myFunc.message = "Hi John";
	
console.log(myFunc());

// 'Hi John'

// 8. What would be the output of following code ?

function myFunc() {
    myFunc.message = 'Hi John';
    console.log(myFunc.message);
  }
  console.log(myFunc());

// 'Hi John'

// 9. What would be the output of following code ?

function myFunc(param1,param2) {
    console.log(myFunc.length);
  }
  console.log(myFunc());
  console.log(myFunc("a","b"));
  console.log(myFunc("a","b","c","d"));

  // 2 2 2

// 10. What would be the output of following code ?

function myFunc() {
    console.log(arguments.length);
  }
  console.log(myFunc());
  console.log(myFunc("a","b"));
  console.log(myFunc("a","b","c","d"));

  // 0 2 4
