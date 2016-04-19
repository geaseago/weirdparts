// Function Overloading:
//   Other languages have this.
//   It means you can have funcs of the same name but with diff number of args.
//   Can't do it in js because funcs are objects.

// How do I run this if I don't want to use all parms?
function greet(firstname, lastname, lang){
	lang = lang || 'en';  // so, if no lang parm is passed, then en is defaulted.
	var solicitation;
	if (lang === 'en'){ 
		solicitation = 'Hello, ';
	}
	if (lang === 'es'){
		solicitation = 'Hola, ';
	}
	console.log(solicitation + firstname + ' ' + lastname);
}

greet('John', 'Doe', 'en');

// Remember, parms are read left to right. 
// Remember, you don't have to include all the parms when you call a func.
greet('JJ'); // This won't error out.
// Remember, js doesn't yet allow parms to have default value set in 
//   the first line of the function.


// Another trick is to have baby functions
function greetEnglish(firstname,lastname){
	greet(firstname, lastname, 'en');
}

function greetSpanish(firstname,lastname){
	greet(firstname, lastname, 'es');
}

greetEnglish('John','Doe');
greetSpanish('Jose','Doesillo');


