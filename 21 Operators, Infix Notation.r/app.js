//  BIG WORD 
//    OPERATORS - A spcecial function that is syntactically different.
//                Operators generally take two parameters and return one result.

var a = 3 + 4;
console(a);

//  q: how did js know to add 3 and 4? 
//  a: js parser saw the + sign operator and knew it to run a function called "+".
//     a function with the name "+", like this:
function +(num1, num2) {
	return num1 and num2 added together;
}

//  SO !!!
//    js doesn't make you invoke the function as normal. ie-->  a = +(3,4);   
//    js allows you to invoke the function using "INFIX NOTATION"
//      "infix notation" means the operator function sits in between the two numbers.

//  The operator functions generally return a number. 
//  An exception is the < and > operators that return boolean primitive 


 