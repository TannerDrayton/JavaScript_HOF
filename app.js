console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number) {
	return function (plusNumber) {
		return (plusNumber += number);
		//Traditional way of declaring a function inside of a function
	};
}

let plus15 = plus(15);
console.log(plus15(10));

console.log("EXERCISE 1:\n==========\n");
function plus(number) {
	return (plusNumber) => (plusNumber += number);
	//This is function arrow notation declaration
}

let plus25 = plus(25);
console.log(plus25(10));
