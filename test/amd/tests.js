describe('asMathableDate as AMD module', function () {
	beforeEach(function(done) {
		return require(['../../asMathableDate'], function (asMathableDate) {
			module = asMathableDate;
			return done();
		});
	});
	it('does not register the global variable', function (done) {
		expect(window.asMathableDate).toBe(undefined);
		done();
	});
	it('registers the AMD module "asMathableDate"', function (done) {
		expect(typeof require('../../asMathableDate')).toBe('function');
		done();
	});
	it('works just like the global variable', function (done) {
		var asMathableDate = require('../../asMathableDate');
		var date = new Date('2015-05-13T20:19:49.900Z');
		asMathableDate.call(date);
		date.addDay(42);
		expect(date.getUTCDate()).toBe(24);
		expect(date.getUTCMonth()).toBe(5);
		done();
	});
});
