// HOISTING  /////////////////////////////////////////
/*
  Execution context is created in two phases.
		1. CREATE. Parser runs through code to see where variable and functions have been created.
							 At that point empty memory spaces are set up for each one.
		2. LINE BY LINE. Then the parser executes line by line through your 
				
		Diffs between functions and variables in hoisting
			  FUNCTIONS in step 1 are given memory space and everything in the function is stored in their entirity.
				VARIABLES in step 1 only set up the Undefined memory space, just placeholder that is populated during phase 2
*/

b();
console.log(a);

var a = "var a: Hello World";
console.log(a);

function b() {
	console.log("Called function: b");
}

var c;
console.log(c);
c="ccc";
console.log(c);