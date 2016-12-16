function multiply(x,y) {
	return x*y;
}
console.log(multiply(3,5));
console.log(multiply);


// function factory

function makemultiplier(multiplier) {
	var myfunc = function (x) {
		return multiplier * x;
	};
	return myfunc;
};

var multiplyby3 = makemultiplier(3);
console.log(multiplyby3(100));

// function passing as argument 

function dooperation(x,operation){
	return operation(x);
};

var result = dooperation(2,multiplyby3);
console.log(result);