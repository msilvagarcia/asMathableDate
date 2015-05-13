(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports'], function (exports) {
			return factory(root, exports);
		});
	} else {
		root.asMathableDate = factory(root, {});
	}
}(this, function (root, asMathableDate) {
	asMathableDate = (function () {
		var LAST_MONTH = 11;
		var MILISECONDS_IN_DAY = 86400000;
		var MILISECONDS_IN_HOUR = 3600000;
		var MILISECONDS_IN_MINUTE = 60000;
		var MILISECONDS_IN_SECOND = 1000;

		function addYear (amount) {
			if (amount === 0) { return ; }
			this.setYear(this.getUTCFullYear() + amount);
		}

		function addMonth (amount) {
			if (amount === 0) { return ; }
			var currentMonth = this.getUTCMonth();
			if (currentMonth + amount > LAST_MONTH) {
				this.addYear(1);
				this.setMonth(0);
				return this.addMonth(amount - LAST_MONTH + currentMonth - 1);
			}
			if (currentMonth + amount < 0) {
				this.addYear(-1);
				this.setMonth(LAST_MONTH);
				return this.addMonth(amount + currentMonth + 1);
			}
			this.setMonth(currentMonth + amount);
		}

		function addDay (amount) {
			if (amount === 0) { return ; }
			this.setTime(this.getTime() + amount * MILISECONDS_IN_DAY);
		}

		function addHour (amount) {
			if (amount === 0) { return ; }
			this.setTime(this.getTime() + amount * MILISECONDS_IN_HOUR);
		}

		function addMinute (amount) {
			if (amount === 0) { return ; }
			this.setTime(this.getTime() + amount * MILISECONDS_IN_MINUTE);
		}

		function addSecond (amount) {
			if (amount === 0) { return ; }
			this.setTime(this.getTime() + amount * MILISECONDS_IN_SECOND);
		}

		function addMillisecond (amount) {
			if (amount === 0) { return ; }
			this.setTime(this.getTime() + amount);
		}

		return function () {
			this.addYear = addYear;
			this.addMonth = addMonth;
			this.addDay = addDay;
			this.addDate = addDay;
			this.addHour = addHour;
			this.addMinute = addMinute;
			this.addSecond = addSecond;
			this.addMillisecond = addMillisecond;

			return this;
		}
	})();
	return asMathableDate;
}));