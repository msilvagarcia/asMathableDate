# asMathableDate

Extending Date objects to add easier manipulation capabilities.

This is a mixin for Date objects, adding methods that allow users to add or subtract pieces of date (years, months, etc).

## Usage

```JavaScript
var date = new Date();
asMathableDate.call(date);
date.addDay(42);
```

## API

```
addYear(amount : int)
addMonth(amount : int)
addDay(amount : int)
addHour(amount : int)
addMinute(amount : int)
addSecond(amount : int)
addMillisecond(amount : int)
```

## Testing

Testing is done via Jasmine in browser. In console:

```
$ bower install
```

Then access ```[asMathableDate root]/test/core/index.html```
