#Valid Date JS 2.0.0

Check if a date is valid in javascript, using string prototype.

There are a few tests using QUnit on the spec folder, if you wish to know better how to use it.

##Sample  

```javascript

var date = '09/10/2015';

if (date.isValidDate('dd-mm-yyyy')) {
    alert("Data valida");
}

var date2 = '11/30/2015';

if (date2.isValidDate('mm-dd-yyyy')) {
    alert("Data valida 2");
}

```

There are two formats available to check 'dd-mm-yyyy' and 'mm-dd-yyyy', if is not specified the default is mm-dd-yyyy

##Using this function
You only have to include the valid_date.js, isn't necessary any other library.

