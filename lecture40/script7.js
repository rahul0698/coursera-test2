// immediately invoked function expression

(function (window) {
	var johngreeter = {};
    johngreeter.name = "john";
    var greeting = "hi";
    johngreeter.sayHi = function () {
	console.log(greeting + johngreeter.name);

	window.johngreeter = johngreeter;
}
})(window);
