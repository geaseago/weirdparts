// Instead of creating a greet function, let's make a factory.
//
//
function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === 'en') {
      console.log('Hello, ' + firstname + ' ' + lastname);
    }
    if (lastname === 'es') {
      console.log('Hola, ' + firstname + ' ' + lastname);
    }
  }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');


// makeGreeting executes and returns a functions whose outer ref points to 
// language of what it was when it executes here.
greetEnglish('Geoff', 'Herbert');

greetSpanish('Heffay', 'Herberto');

// Think about it. Each above generates two different Execution Contexts.
// Another  way to look: greetEnglish has a closure that points to the variable environment of makeGretting when it was run with 'en' sent to it.


