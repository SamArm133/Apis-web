document.querySelector('.menu-btn').addEventListener('click', () => {
	document.querySelector('.nav-main').classList.toggle('show');
});


ScrollReveal().reveal('.news');
ScrollReveal().reveal('.box', {delay: 500});
ScrollReveal().reveal('.banner1', {delay: 500});
ScrollReveal().reveal('.box2', {delay: 500}); 
ScrollReveal().reveal('.banner2', {delay: 500});

var myfunction = function() {
	document.getElementBy("demo").innerHTML = "IVA";
}

alert("Breaking News");

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

let SportsCarValue = new SportsCar(500)
console.log(SportsCarValue)

let prices = [10, 25, 40];
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
