// var array = new Array();
// array[0] = "rahul";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("hello "+name);
// };
// array[3] = {course: "html, css and js"};
// console.log(array); 
// array[2](array[0]);
// console.log(array[3].course);



// // shorthand array creation

// var names = [
// {name: "rahul"}, "john", "luv"];
// console.log(names);


// var names = ["rahul", "raj", "chakravorty"];

// for(var i=0; i < names.length; i++){
// 	console.log("hello "+names[i]);
//

var names2 = ["yaakov", "john", "joe"];

// var myObj = {
// 	name: "yaakov",
// 	course: "Html/css/js",
// 	platform: "coursera"
// };

// for(var prop in myObj) {
// 	console.log(prop+ ":" + myObj[prop]);
// }

// for(var name in names2) {
// 	console.log("hello " + names2[name]);
// }


names2.greetings = "hi!";
for(var name in names2) {
	console.log("hello " + names2[name]);
}

