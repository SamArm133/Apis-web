function myfunction(){
	document.getElementBy("demo").innerHTML = "IVA";
}

alert("wow");

class Car {
	constructor(horsepower){
		this.horsepower = horsepower;
		this.doors = 4;
	}
}

class SportsCar extends Car {
constructor(horsepower, turbo) {
	super(horsepower);
	this.turbo = "yes";
 }
}

var SportsCar = new SportsCar(500)
console.log(SportsCar)

var Prices = [10, 25, 40];
console.log("initial prices:");
console.log(prices);

var halve = function(val) {
	return 0.5*val;
}

var reduce = function(arr) {
	for(var i = 0; i< arr.length; i++)
	{
		console.log(halve(arr[i]))
	}
}

console.log("reduced prices:");
reduce(prices);

