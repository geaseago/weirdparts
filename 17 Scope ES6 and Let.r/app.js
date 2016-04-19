//BIG WORD: SCOPE
//	Where a variable is available in your code.
//  AND
//  If it's truly the same variable, or a new copy of it.

//If you call the same function twice, it will have two different execution contexts, 
//so that function's same variables will actually be two different variables with two
//different locations in memory.

//Javascript 2015 is introducing LET  !!

//Let allows block scoping.
//Let varables are put into a memory during the execution phase, but you can't access it until
//  the actual line of code that "LET"s the variable.

// unlike using var, using let will cause an error if you try to use it before it's available.


//Let variables are declared inside blocks.
//So it's ONLY available in that block while that block is running. Like a For loop.

alert("hi");
let a; 

function whatsA() {
	//alert(b); // This will error, because I haven't 'LET' b yet.
	alert(x); // This will NOT error. Just return UNDEFINED, 
	          //   because using var creates space in memory before the code is executed.
	var x = 99;
	let b = "b";
	console.log(b);
	alert("whatA a = " + a);
	alert("whatA b = " + b);  
}

alert("let-ed a = " + a);
a = 1;
alert("after assigning value in global, a = " + a);
whatsA();
alert("after func, a = " + a);


