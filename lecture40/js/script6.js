// immediately invoked function expression
(function (window){
	var yaakovgreeter = {};
    yaakovgreeter.name = "rahul";
    var greeting = "hello";
    yaakovgreeter.sayHello = function () {
	console.log(greeting + yaakovgreeter.name);

	window.yaakovgreeter = yaakovgreeter;
}
})(window);
