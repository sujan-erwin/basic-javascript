
// 1. What would be the output of following code?

console.log(employeeId);

// ReferenceError: employeeId is not defined

// 2. What would be the output of following code?

console.log(employeeId);
var employeeId = '19000';

// undefined

// 3. What would be the output of following code?

var employeeId = '1234abe';
(function(){
	console.log(employeeId);
	var employeeId = '122345';
})();

// undefined

// 4. What would be the output of following code?
var employeeId = '1234abe';
(function() {
	console.log(employeeId);
	var employeeId = '122345';
	(function() {
		var employeeId = 'abc1234';
	}());
}());

// undefined

// 5. What would be the output of following code?
(function() {
	console.log(typeof displayFunc);
	var displayFunc = function(){
		console.log("Hi I am inside displayFunc");
	}
}());

// undefined

// 6. What would be the output of following code?

var employeeId = 'abc123';
function foo(){
	employeeId = '123bcd';
	return;
}
foo();
console.log(employeeId);

//'123bcd'

// 7. What would be the output of following code?

var employeeId = 'abc123';

function foo() {
	employeeId = '123bcd';
	return;

	function employeeId() {}
}
foo();
console.log(employeeId);

// 'abc123'

// 8.What would be the output of following code?

var employeeId = 'abc123';

function foo() {
	employeeId();
	return;

	function employeeId() {
		console.log(typeof employeeId);
	}
}
foo();

// 'function'

//9. What would be the output of following code?
function foo() {
	employeeId();
	var product = 'Car'; 
	return;

	function employeeId() {
		console.log(product);
	}
}
foo();

// undefined

// 10. What would be the output of following code?

(function foo() {
	bar();

	function bar() {
		abc();
		console.log(typeof abc);
	}

	function abc() {
		console.log(typeof bar);
	}
}());

// function function