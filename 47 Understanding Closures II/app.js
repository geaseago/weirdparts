function buildFunctions() {
	var arr = [];
	for (var i = 0; i < 3; i++) {
		arr.push(
			function() {
				console.log(i);
			}
		)	
	}
	return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// CHECK IT! This code returns 3, 3, 3. Why?
//   Because after buildFunctions pops off it maintains it's variable environment in memory.
//   So, when I invoke fs, it runs the func in the array's element. 
//   That func doesn't find i, so it goes down the scope chain 
//   and sees i closured-in where buildFunction's Execution Context used to be.
//   And what is the value of i at that point? 3 !!!
