#Valid Date JS

Is a simple function to validate a date in javascript, it will be improved for next version, for
while is working for our aims.  

There are a few tests using QUnit on the spec folder, if you wish to know better how to use it.


##Sample  

```javascript

var validDate = '09/10/2015';
var day = validDate.substr(0,2);
var month = validDate.substr(3,2);
var year = validDate.substr(6,4);

isValidDate(year, day, month);

```

##Using this function
You only have to include the valid_date.js, isn't necessary any other library.

