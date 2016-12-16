// event handler 


document.addEventListener("DOMContentLoaded",
	function (Event) {
		// Unobstrusive event binding 
		document.querySelector("button")
		.addEventListener("click",function ()
		{
        

          // call server to get the name 
          $ajaxUtils.sendGetRequest("/data/name.txt",function(request){
          	var name = request.responseText;
          	document.querySelector("#content").innerHTML = "<h2>Hello "+ name + "!";
          });

          
		}
		);
	}
	);