function sayHiLater() {
	var greeting = "Hi!";
	setTimeout(function(){
		console.log(greeting);
	}, 3000);
}

sayHiLater();

// Think about Closure and Execution Stack and Scope Chain, 
//   and you'll see how the greeting var stays available 
//   to the anonymous function expression inside sayHiLater.
// Breaking it down.
//   sayHiLater gets put on the Execution stack when it is invoked.
//   setTimeout's Function Expression parm is invoked.
//   sayHiLater gets popped off the Execution Stack.
//   After 3 seconds, the Funtion Expression references greeting correctly.
//     It sees greeting correctly even though the function that greeting lived
//     in is now gone, the Variable Environment of sayHiLater's
//     Execution Context stays. As we go down the Scope Chain we do find
//     greeting and get it's value.
//



// Now  let's talke about Callbacks.
// Big Word: CALLBACK FUNCTION
//           A Function you give to another Function
//             to be run when the other function is finished.
//           So, the Function you Invoke "calls you back" when it finishes,
//             by calling the function you gave it when it finishes.

function tellMeWhenDone(callback){
	// Here's the work
	var a = 1;
	var b = 2;
	
	// Now the work is done, so invoke the function that was sent here.
	callback();
	
}

tellMeWhenDone(function(){
	console.log('I am done');
})
tellMeWhenDone(function(){
	console.log('I am jo');
})
tellMeWhenDone(function(){
	console.log('I am blo');
})








