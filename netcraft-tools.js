(function (global) {
	
	var ncTools = global.ncTools || {};
	
	/**
	 * Execute a function immediately or after a delay
	 * @param {function} func - The function to execute
	 * @param {Number} [number] - The ms to wait
	 * @param {arguments} [args] - Arguments to pass as parameters
	*/
	ncTools.execute = function (func, delay, args) {
		
		if (typeof(delay) === "number") {
			global.setTimeout(func, delay);
		} else {
			func.apply(func, args);
		}
	};
	
	/**
	 * From the book "Pro Javascript Design Patterns" (page 44)
	 * http://bheinrichs.nl/Files/design%20patterns/APress_ProJavaScriptDesignPatterns.pdf
	 *
	 * To use:
	 * function Person (...)  {...}
	 * function Adam (...)  {...}
	 * ncTools.inherit(Person, Adam);
	 * OR (to not separate constructor code from inherit statement):
	 * var Adam = ncTools.inherit(
	 * 		Person,
	 * 		function() {
	 *			...Adam constructor code...
	 *		}
	 * );
	 *
	 */
	ncTools.inherit = function (SuperClass, SubClass) {

		// Create intermediate Class with empty constructor
		// which copies SuperClass prototype
		var F = function () {};

		F.prototype = SuperClass.prototype;

		// Now we can make an instance of the prototype
		// without knowing anything about SuperClass parameters
		SubClass.prototype = new F();

		// "Fix" the SubClass constructor property to
		// point on SubClass instead of SuperClass
		SubClass.prototype.constructor = SubClass;

		// Create "base" property to access SuperClass
		// functionality from SubClass.
		// For example in SubClass constructor:
		// function SubClass (name) {
		//            SubClass.base.constructor.call(this, name);
		// }
		SubClass.base = SuperClass.prototype;

		// "Fix" the constructor property for SuperClass too,
		// even if the SuperClass is the Object Class itself
		if (SuperClass.prototype.constructor === Object.prototype.constructor) {

			SuperClass.prototype.constructor = SuperClass;

		}

		return SubClass;

	};
	
	
	global.ncTools = ncTools;
	
}(window));
