// 1. What would be the output of following code?

(function() {
	var array = new Array('100');
	console.log(array);
	console.log(array.length);
}());

// ["100"] 1

// 2. What would be the output of following code?

(function() {
	var array1 = [];
	var array2 = new Array(100);
	var array3 = new Array(['1',2,'3',4,5.6]);
	console.log(array1);
	console.log(array2);
	console.log(array3);
	console.log(array3.length);
}());

// [] [] [Array[5]] 1

// 3. What would be the output of following code?

(function () {
    var array = new Array('a', 'b', 'c', 'd', 'e');
    array[10] = 'f';
    delete array[10];
    console.log(array.length);
  }());

  // 11
  
// 4. What would be the output of following code?

(function(){
	var animal = ['cow','horse'];
		animal.push('cat');
		animal.push('dog','rat','goat');
		console.log(animal.length);
})();

// 6

// 5. What would be the output of following code?

(function(){
	var animal = ['cow','horse'];
		animal.push('cat');
		animal.unshift('dog','rat','goat');
		console.log(animal);
})();

// [ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ]

// 6. What would be the output of following code?

(function(){
	var array = [1,2,3,4,5];
	console.log(array.indexOf(2));
	console.log([{name: 'John'},{name : 'John'}].indexOf({name:'John'}));
	console.log([[1],[2],[3],[4]].indexOf([3]));
	console.log("abcdefgh".indexOf('e'));
})();

// 1 -1 -1 4

// 7. What would be the output of following code?

(function(){
	var array = [1,2,3,4,5,1,2,3,4,5,6];
	console.log(array.indexOf(2));
	console.log(array.indexOf(2,3));
	console.log(array.indexOf(2,10));
})();

// 1 6 -1

// 8. What would be the output of following code?

(function(){
	var numbers = [2,3,4,8,9,11,13,12,16];
	var even = numbers.filter(function(element, index){
		return element % 2 === 0; 
	});
	console.log(even);

	var containsDivisibleby3 = numbers.some(function(element, index){
		return element % 3 === 0;
	});

	console.log(containsDivisibleby3);	
})();

// [ 2, 4, 8, 12, 16 ] true

// 9. What would be the output of following code?

(function(){
	var containers = [2,0,false,"", '12', true];
	var containers = containers.filter(Boolean);
	console.log(containers);
	var containers = containers.filter(Number);
	console.log(containers);
	var containers = containers.filter(String);
	console.log(containers);
	var containers = containers.filter(Object);
	console.log(containers);		
})();

// [ 2, '12', true ] [ 2, '12', true ] [ 2, '12', true ] [ 2, '12', true ]

// 10. What would be the output of following code?

(function(){
	var list = ['foo','bar','john','ritz'];
	    console.log(list.slice(1));	
	    console.log(list.slice(1,3));
	    console.log(list.slice());
	    console.log(list.slice(2,2));
	    console.log(list);				
})();

// [ 'bar', 'john', 'ritz' ] [ 'bar', 'john' ] [ 'foo', 'bar', 'john', 'ritz' ] [] [ 'foo', 'bar', 'john', 'ritz' ]

// 11. What would be the output of following code?

(function(){
	var list = ['foo','bar','john'];
	    console.log(list.splice(1));		
	    console.log(list.splice(1,2));
	    console.log(list);			
})();

// [ 'bar', 'john' ] [] [ 'foo' ]

// 12. What would be the output of following code?

(function(){
	var arrayNumb = [2, 8, 15, 16, 23, 42];
	arrayNumb.sort();
	console.log(arrayNumb);
})();

// [ 15, 16, 2, 23, 42, 8 ]