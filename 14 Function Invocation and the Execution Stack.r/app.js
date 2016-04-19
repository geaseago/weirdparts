// BIG WORD:  INVOCATION
//   It just means to run a function.
//   In js to invoke a function you use parens ().


// Take  a look here...
// First, a global execution context is created by the compiler.
// Then it attaches these functions to it.
// Then it executes the code from top to bottom, line by line.
function b() {
	alert("hi");
}

function a() {
  b();
}

a();

// THE EXECUTION STACK:
//   in the above case here's what happens...
//     A Global Execution Context is created 
//       and placed at the bottom of the execution stack.
//     Function a is invoked which generates a new execution context
//       which is placed on top of the Global Execution Context.
//     Function a invokes function b. This is a third execution context
//       is created for b and is placed above the a() execution context.


// EVERY TIME YOU INVOKE A FUNCTION IN JAVASCRIPT A NEW 
//   EXECUTION CONTEXT IS CREATED!

