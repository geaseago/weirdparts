function buildFunctions() {
	var arr = [];
	for (var i = 0; i < 3; i++) {
		arr.push(
			function() {
				console.log(i);
			}
		)	
	}
	return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// CHECK IT! This code returns 3, 3, 3. Why?
//   Because after buildFunctions pops off it maintains it's variable environment in memory.
//   So, when I invoke fs, it runs the func in the array's element. 
//   That func doesn't find i, so it goes down the scope chain 
//   and sees i closured-in where buildFunctions's Execution Context used to be.
//   And what is the value of i at that point? 3, yo !!!

console.log('-----');

// Let's go further. What if I DO want the iterator to return 0, 1, 2 ?
// Answer: In new ES6 we can use Let. Remember, LET is scoped to just the block.
function buildFunctions2() {
	var arr = [];
	for (var i = 0; i < 3; i++) {
		let j = i;
		arr.push(
			function() {
				console.log(j);
			}
		)	
	}
	return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();


console.log('-----');

// What if we need to use ES5 but still want the iterator to return 0, 1, 2 ?
// Answer: I need a parent Execution Context to hold the value of i as the loop iterates,
//         and I need to immediately execute it.
function buildFunctions3() {
	var arr = [];
	for (var i = 0; i < 3; i++) {
		arr.push(
				(function(j) {
					return function(){
						console.log(j);
					}
				}(i))
			)	
		}
	return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();

