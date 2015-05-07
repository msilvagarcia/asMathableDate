# asMathableDate

Extending Date objects to add easier manipulation capabilities.

This is a mixin for Date objects, adding methods that allow users to add or subtract pieces of date (years, months, etc).

## Usage

```JavaScript
var date = new Date();
asMathableDate.call(date);
date.addDay(42);
```
