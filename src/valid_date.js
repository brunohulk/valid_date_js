/*
* Valid date js
* Simple method to check is a date is valid
* Bruno Borges <bruno@iborges.com> www.iborges.com
* https://github.com/brunohulk/valid_date_js
* */
String.prototype.isValidDate = function(format)
{
    if (format == undefined) {
        format = 'mm-dd-yyyy';
    }

    if (format == 'dd-mm-yyyy') {
        var day = this.substr(0, 2);
        var month = this.substr(3, 2);
        var year = this.substr(6, 4);
    }

    if (format == 'mm-dd-yyyy') {
        var month = this.substr(0, 2);
        var day = this.substr(3, 2);
        var year = this.substr(6, 4);
    }

    var realMonth = month - 1;
    var date = new Date(year,realMonth, day);

    if (date.getFullYear() == year && date.getDate() == day && date.getMonth() == realMonth) {
        return true;
    } else {
        return false;
    }
}
