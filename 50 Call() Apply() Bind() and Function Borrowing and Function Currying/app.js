// What are Call, Apply, and Bind?

// In a Function's Execution Context you have a 
//   Variable Environment, Outer Environment, and "this", right?
// "this" refers to either
//   The Global Execution Context or 
//   The calling Function's execution context 
//     (if the Function is a Method attached to the object)

// Wouldn't it be nice to control what "this" refers to 
//  when the Execution Context is Created?

// All functions have some special methods on their own.
//   call(), apply(), bind()
//   All 3 of these have to do with the this var.

// BIND() //////////////////////////////////////////////////////////
// (Note, using bind makes a copy of the function)
console.log('Bind section');
var person = {
	firstname:   'John', 
	lastname:    'Doe',  
	getFullName: function(){ 
		var fullName = this.firstname + ' ' + this.lastname; 
		return fullName 
	} 
} 

var logName = function(lang1, lang2) {
	console.log('Logged ' + this.getFullName() + ' ' + lang1 + ' ' + lang2);
}

//var logUnboundPersonName = logName(person);
var logPersonName = logName.bind(person);

logPersonName(); // Actually its invoking logName(person). 
                 // And the "this" is at the person scope.

// CALL() ////////////////////////////////////////////////////////////
console.log('Call section');
// You can "call" a function. IE, invoke it.
// funcName() is same as funcName.call
// Big Deal: Using .call allows you to control the "this"

// What's going on here:
//   First parm is me setting where the "this" level will be.
//   Remaining parms are the parms requested by func I'm calling (logName).
//   The func logName is invoked.
logName.call(person, 'en', 'es');


// APPLY() /////////////////////////////////////////////////////////////
console.log('Apply Section');
// Apply does same thing as call, but with one difference:
//   Apply wants an array of parameters, not a list.
logName.apply(person, ['en', 'es']);



// BORROWING /////////////////////////////////////////////////////////////





// CURRYING /////////////////////////////////////////////////////////////
// BIG WORD: Creating a copy of a function and preseting some of the parms.


