function greet(whattosay) {
	return function(name) {
		console.log(whattosay + ' ' + name);
	}
}

// I run func greet, passing 'hi'.
// I can simultaneously invoke greet's returned function object. Bam!
greet('hi')('goodbye');

// I can even store the returned function object in a variable,
//   and then invoke it.
var a = greet('red');
a('blue');



// A note about the closures and the Execution Stack:
// 
// Under the hood:
// After greet func "pops off" execution stack, how does the whattosay variable stick around?
// It sticks around because of CLOSURE.
// Closure maintains the space in memory where the Execution Context's variables live. 
//
// Closure happens automatically. You don't have to do anything.
// Closure maintains the references to memory spaces 
//   that had been available in the scope chain before the Execution Context ended.  
//
//
//
//
//






