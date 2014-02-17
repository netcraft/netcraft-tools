(function (window) {
	
	var ncTools = window.ncToosl || {};
	
	
	/**
		Execute a function immediately or after a delay
	*/
	ncTools.execute = function (func, delay) {
		if (typeof(delay) !== "undefined") {
			window.setTimeout(func, delay);
		} else {
			func();
		}
	};
	
	
	window.ncTools = ncTools;
	
}(window));
