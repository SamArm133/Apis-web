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
