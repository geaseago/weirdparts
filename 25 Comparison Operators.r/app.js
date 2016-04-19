

//  The associative order when all are at precedence level 11 is  left-to-right  
// -->  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// So, this:
console.log(1 < 2 < 3);
// is actually:
console.log(true < 3);  // which is true because true=1

// Thus, 
console.log(3 < 2 < 1);
// is also strangely true because:
console.log(false < 1); // is true because false=0. 

// Remember, js tries to change values to what it thinks you want, so it converts the true/false values to numbers when you make comparisons like this. Coercion.

// having said that, you can force js to be strict:
// loose vs strict
console.log( 1 == true  );
console.log( 0 == false );
console.log( 1 === true  );
console.log( 0 === false );


