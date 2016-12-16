// DOM manipulation

// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);


function sayHello () {
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

// another way of writing the event handling 

// document.querySelector("button").onclick = sayHello;

