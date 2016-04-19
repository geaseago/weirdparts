// Reminder:  when a function is invoked, a new execution context is created 
//            and put on the execution stack.


// During the creation phase of the compiler, when a function object is created:
//	 1. An execution context is created.  
//	 2. Each execution context has a VARIABLE ENVIRONMENT 
//	 		  where the variables created by the EC live.
//   3. The Execution Context has a reference to its OUTER LEXICAL ENVIRONMENT,
//        which tells the JIT how to look down the scope chain.
//   4. A "THIS" variable is created.
//
// The "this" variable will point to a different object 
//   DEPENDING ON WHERE THE FUNCTION OBJECT IS AND HOW ITS INVOKED!
//
// ...
//
// At global execution context, the "THIS" keyword is immediately available.
// Its available at the global execution level.
// And as we know, the global object in side the browser is the WINDOW object.
console.log(this);

function a() {
	console.log(this); 
}

// So, what will THIS be in the function statement a() scenario?
// Answer: Global Object, aka Window.
// ** When you create a function, the THIS will still point to the Global Ojbject
a();

var b = function() {
	console.log(this);
}

// OK, what will THIS be in the function expresion b() scenario?
// Answer: It's still the Global Object
b();

// Even though a()and b() above have different execution contexts their THIS still 
//   is the Global Variable

// --------------------------------------------------------------------------

// Take it further. Starting at 8 minutes in video:



