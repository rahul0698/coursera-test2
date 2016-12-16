(function (global){
	// Set up a namespace for our utility
	var ajaxUtils = {};

	//  Returns an Http request object
	function getRequestObject() {
		if(window.XMLHttpRequest) {
			return (new XMLHttpRequest());
		}
		else if (window.ActiveXObject) {
			// For very Old IE browsers (optional)
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not supported!");
			return(null);
		}
	}


	// Makes an Ajax GET request to "requestURL" 
	ajaxUtils.sendGetRequest = 
	function(requestUrl, responseHandler,isJsonResponse) {
		var request = getRequestObject();
		request.onreadystatechange =
		function() {
			handleResponse(request, responseHandler, isJsonResponse);
		};
		request.open("Get",requestUrl,true);
		request.send(null); //for POST only 
	};


	// Only cals user provided "responsehandler"
	// function if respond is ready
	//  and not an error
	function handleResponse(request, responseHandler,isJsonResponse) {
		if ((request.readyState == 4) && (request.status == 200)) {

			// Default to isJSONResponse = true
			if(isJsonResponse == undefined) {
				isJsonResponse = true;
			}
			if(isJsonResponse) {
				responseHandler(JSON.parse(request.responseText));
			}
			else {
				responseHandler(request.responseText);
			}
			
		}
	}
    

    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;
})(window);
