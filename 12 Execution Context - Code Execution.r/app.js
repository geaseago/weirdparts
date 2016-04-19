// EACH EXECUTION CONTEXT GETS PUT ON THE EXECUTION STACK  
/*	 		
			Execution contexts that finish are said to have "popped off" the stack.			
*/

function b() {
	console.log("Called function: b");
}

b();

var a = "var a: Hello World";

console.log(a);


