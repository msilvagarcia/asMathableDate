describe('asMathableDate', function () {
	var date;
	beforeEach(function (){
		date = new Date('2015-05-09T08:55:36.614Z');
		asMathableDate.call(date);
	});
	it('still is a Date object', function () {
		expect(date instanceof Date).toBe(true);
	});
	it('can add years', function () {
		date.addYear(2);
		expect(date.getUTCFullYear()).toBe(2017);
	});
	it('can add months', function () {
		date.addMonth(2);
		expect(date.getUTCMonth()).toBe(6);
	});
	it('jumps to the next year if there are too many months to add', function () {
		date.addMonth(9);
		expect(date.getUTCMonth()).toBe(1);
		expect(date.getUTCFullYear()).toBe(2016);
	});
	it('goes back to the previous year when trying to subtract too many months', function () {
		date.addMonth(-5);
		expect(date.getUTCMonth()).toBe(11);
		expect(date.getUTCFullYear()).toBe(2014);
	});
	it('can add days', function () {
		date.addDay(3);
		expect(date.getUTCDate()).toBe(12);
	});
	it('jumps to the next month if there are too many days to add', function () {
		date.addDay(42);
		expect(date.getUTCDate()).toBe(20);
		expect(date.getUTCMonth()).toBe(5);
	});
	it('goes back to the previous month when trying to subtract too many months', function () {
		date.addDay(-42);
		expect(date.getUTCDate()).toBe(28);
		expect(date.getUTCMonth()).toBe(2);
	});
	it('can add hours', function () {
		date.addHour(42);
		expect(date.getUTCHours()).toBe(2);
	});
	it('can add minutes', function () {
		date.addMinute(42);
		expect(date.getUTCMinutes()).toBe(37);
	});
	it('can add seconds', function () {
		date.addSecond(42);
		expect(date.getUTCSeconds()).toBe(18);
	});
	it('can add milliseconds', function () {
		date.addMillisecond(42);
		expect(date.getUTCMilliseconds()).toBe(656);
	});
});
