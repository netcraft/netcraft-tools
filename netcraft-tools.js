(function (window) {
	
	var ncTools = window.ncTools || {};
	
	
	/**
		Execute a function immediately or after a delay
	*/
	ncTools.execute = function (func, delay) {
		if (typeof(delay) === "number") {
			window.setTimeout(func, delay);
		} else {
			func();
		}
	};
	
	
	window.ncTools = ncTools;
	
}(window));
