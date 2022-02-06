// 1. What would be the output of following code ?
(function(){
	function sayHello(){
		var name = "Hi John";
		return 
		{
			fullName: name
		}
	}
	console.log(sayHello().fullName);
})();

// Uncaught TypeError: Cannot read property 'fullName' of undefined

// 2. What would be the output of following code ?

function getNumber(){
	return (2,4,5);
}

var numb = getNumber();
console.log(numb);

// 5

// 3. What would be the output of following code ?

function getNumber(){
	return;
}

var numb = getNumber();
console.log(numb);

// undefined

// 4. What would be the output of following code ?

function mul(x){
	return function(y){
		return [x*y, function(z){
			return x*y + z;
		}];
	}
}

console.log(mul(2)(3)[0]);
console.log(mul(2)(3)[1](4));

// 6, 10

// 5. What would be the output of following code ?

function mul(x) {
	return function(y) {
		return {
			result: x * y,
			sum: function(z) {
				return x * y + z;
			}
		};
	};
}
console.log(mul(2)(3).result);
console.log(mul(2)(3).sum(4));

// 6, 10

// 6. What would be the output of following code ?

function mul(x) {
	return function(y) {
		return function(z) {
			return function(w) {
				return function(p) {
					return x * y * z * w * p;
				};
			};
		};
	};
}
console.log(mul(2)(3)(4)(5)(6));

// 720


// 7. What would be the output of following code ?

function getName1(){
	console.log(this.name);
}

Object.prototype.getName2 = () =>{
	console.log(this.name)
}

let personObj = {
	name:"Tony",
	print:getName1
}

personObj.print();
personObj.getName2();


// Tony undefined
// 
// Explaination: getName1() function works fine because it's being called from personObj, so it has access to this.name property. 
// But when while calling getnName2 which is defined under Object.prototype doesn't have any proprty named this.name. 
// There should be name property under prototype. Following is the code:

// function getName1(){
// 	console.log(this.name);
// }

// Object.prototype.getName2 = () =>{
//   console.log(Object.getPrototypeOf(this).name);
// }

// let personObj = {
// 	name:"Tony",
// 	print:getName1
// }

// personObj.print();
// Object.prototype.name="Steve";
// personObj.getName2();
