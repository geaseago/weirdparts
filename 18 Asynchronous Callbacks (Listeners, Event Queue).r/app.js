//BIG WORD: 
//  ASYNCHRONOUS = More than one at a time.

// Wait, but JS executes synchronous. One line at a time. What the?

// So how does js handle async events like onclick?

// There is an EVENT QUEUE
// The EVENT QUEUE just piles up events that js will process AFTER everything in the 
//   scope chain has finished running. js will process the events in the order they happened, 
//   like in a queue. Duh.

// So, even though js is synchronous, it can behave asynchronous in that it can be aware of events and http requests and render engine things, and run them in order after all the scope chain is empty.

// js  will continue to watch the  EVENT QUEUE evan after all execution stack is empty and there are no events. 

function waitThreeSeconds() {
	var ms = 3000 + new Date().getTime();
	while (new Date().getTime() < ms) {}
	console.log("waitThreeSecondsFinished.");
}

function clickHandler() {
	console.log("You clicked, yo!");
}

function getCursorPosition(fee, fi, foo) { //first parm is always the event?
	var x, y;

	x = fee.clientX;

	console.log("x = " + x);
}

document.addEventListener('click', clickHandler); // first in queue
document.addEventListener('click', getCursorPosition); // second in queue

waitThreeSeconds();
console.log("Last lexical item in the global execution context.");








