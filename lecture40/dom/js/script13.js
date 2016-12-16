// DOM content Loaded

document.addEventListener("DOMContentLoaded",

        function (event) {
       	function sayHello () {
    this.textContent= "said it!";
	var name = document.getElementById("name").value;
	var message = "<h2>hello " + name + "!</h2>";

	// document.getElementById("content").textContent = message;
	document.getElementById("content").innerHTML = message;

	if(name === "student"){
		var title = document.querySelector("#title").textContent;
		title += " & loving it";
		document.querySelector("#title").textContent = title;
	}
}


// unobstrusive event binding 
document.querySelector("button").addEventListener("click",sayHello);


// another event of mousemove and shiftkey which is printing the coordinate
 // of pointer as it moves on the body

 document.querySelector("body").addEventListener("mousemove",
 	function (event) {
 		if (event.shiftkey === true){
 			console.log("X: "+ event.clientX);
 			console.log("y: "+ event.clientY);
 		
 			}
 		
      	}
 	);

       }

	);