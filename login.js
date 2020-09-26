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

