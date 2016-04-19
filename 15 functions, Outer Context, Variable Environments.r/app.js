// LEXICAL CONTEXT DETERMINES THE "OUTER REFERENCE"
// THINK "WHO CREATED ME?" MY CREATOR IS MY OUTER REFERENCE
// MAIN POINT OF THIS LESSON IS THE SCOPE CHAIN. TO FIND A VARIABLE'S VALUE THE JIT:
//		LOOKS IN THE EXECUTION CONTEXT. 
//		IF IT CAN'T FIND IT THERE IT LOOKS IN THE EXECUTION CONTEXT'S OUTER REFERENCE.
//    IF IT CAN'T FIND IT IN THE OUTER CONTEXT IT WILL LOOK AT THE NEXT OUTER CONTEXT.
//    REPEAT UNTIL IT GETS TO THE GLOBAL EXECUTION CONTEXT.
//    THIS IS CALLED "FOLLOWING THE SCOPE CHAIN"

// Another way to think about it.
//   Variables belong to the execution context where they were declared. 
//   IE, where they were originally set using "var" keyword.
//   You can see all this below by comparing behavior of passMeAround vs myVar

console.log("started");

function b() {
	passMeAround = "b";
	console.log("myvar in b = " + myVar); // Thus, when JIT looks for a myVar, it finds nothing in b().
																				// So it follows the scope chain to a() and finds no myVar.
																				// Finally stop in scope chain is Global where it finds myVar.
	console.log("all in b = " + all);
	console.log("passMeAround in b = " + passMeAround);
}

function a() {
	var myVar = 2; 	// This is a different var with a different space in memory. 
									// It's not available outside of this Execution Context, ie: Scope. 
									// (For more see #17)
	passMeAround = "a";
	console.log("myVar in a = " + myVar);
	console.log("all in a = " + all);
	console.log("passMeAround in a = " + passMeAround);
	b();
}

var myVar = 1
var passMeAround = "x"; 
console.log("myVar in Global Execuation Context = " + myVar);
console.log("passMeAround in Global Execution Context = " + passMeAround)
var all = "all";  // global 
a();

