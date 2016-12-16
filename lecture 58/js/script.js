// event handler 


document.addEventListener("DOMContentLoaded",
	function (Event) {
		// Unobstrusive event binding 
		document.querySelector("button")
		.addEventListener("click",function ()
		{
        

          // call server to get the name 
          $ajaxUtils.sendGetRequest("/data/name.json",
          	function(res){
          	var message = res.firstName + " " + res.lastName;
          	if(res.likesChineseFood) {
          		message += "likes Chinese food";
          	}
          	else {
          		message += "doesn't like chinese food";
          	}
          	message += "and uses ";
          	message += res.numberofDisplays;
          	message += " displays for coding.";
          	document.querySelector("#content").innerHTML = "<h2>Hello "+ message + "</h2>";
          });

          
		}
		);
	}
	);