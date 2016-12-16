// function circle (radius) {
// 	this.radius = radius;
// }
	
// circle.prototype.getArea = function () {
// 		return Math.PI * Math.pow(this.radius,2);
// 	};

// var mycircle = new circle(10);
// console.log(mycircle);

// var myothercircle = new circle(20);
// console.log(myothercircle);




// object literal and this keyword

var literalCircle = {
	radius: 10,
	getArea: function () {
		console.log(this);
		return Math.PI * Math.pow(this.radius,2);
	}
};

console.log(literalCircle.getArea());