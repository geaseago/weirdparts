// Lets say I set a variable a equal to a primitive, 
//   ie: a number, bool, or string, etc 
a = 9;
// so now a has an address location (say 0x001) where that value 9 sits.

b = a;  //(Or pass a to a function called b or function parm b)
// so now we have a new variable called b. 
//   **SINCE a IS A PRIMITIVE**, a new variable b is created that points to a new location in memory (say 0x002) and a copy of a's primitive value is placed in that new location.
// **** THIS IS CALLED BY VALUE **** 

a = {};
// If I set a variable a equal to an object,
//   (and remember functions are objects too!)
//   I still get a location in memory (say 0x001) to hold that object.

b = a; 
// But, when I set b equal to a, or I pass a to a function, 
//   then new var b just has a pointer to the same location in 
//   memory as a (0x001). No new copy of the object is created.
// **** THIS IS CALLED BY REFERENCE ****'
// All objects are passed byref.


// let's get started with primitives byval
var a = 3;
console.log('a begins equal to: ' + a);
var b;
b = a; // value of a is copied to a new location in memory in b.
console.log('after b=a then b equals: ' + b);

a = 2; // now if I change a value, it won't affect b.
console.log('Just changed a=2. What happens with a and b?');
console.log('a=' + a + ' and b=' + b);

console.log('-----------');

// now objects byref
console.log("Make new object: var c = { greeting: \'hi\'}");
var c = { greeting: 'hi'}
console.log('Make a var d and set it equal to c');
var d;
d = c;
console.log('The d object greeting = ' + d.greeting);

// BIG WORD: MUTATE. It just means to change something. 
c.greeting = 'goodbye';
console.log('I just mutated c by changing its greeting method to "goodbye"');
console.log('So, now the d obj greeting is what?: ' + d.greeting);
console.log('See above? I changed c and it affected d.');
console.log('-----------');
// No matter how you slice the next part, when you change the .val of either
// of one or two below, you end up mutating the methods of both.
one = {val: 1};
two = {val: 2};
console.log('one val: ' + one.val);
console.log('two val: ' + two.val);
two = one;  
console.log('one val: ' + one.val);
console.log('two val: ' + two.val);
one.val = 99;
console.log('one val: ' + one.val);
console.log('two val: ' + two.val);



// ** OBJECTS WHEN PARMS ARE PASSED BYREF ** 
function changeGreeting(obj) {
	obj.greeting = 'Hola';
}

changeGreeting(d);
// Now check this:
console.log(c);
console.log(d);
// CHECK IT!!
// they will both by hola now because their shared memory space was changed!

// Important point. Using the = operator sets up a new location in memory.
c = { greeting: 'howdy'}
console.log(c);
console.log(d);
// Notice how c changed but d didn't? 
// It's because c and d were pointing to the same memory space, but using the
// equals operator on c created a new memory space for c alone.

// to completey beat a dead horse here:
d = c;
console.log(c);
console.log(d);

// Final note. All objects are passed byref, and all primitives are byval.
// YOU CAN'T CONTROL OR CHANGE THIS.




