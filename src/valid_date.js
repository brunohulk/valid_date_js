/*
* Valid date js
* Simple method to check is a date is valid
* Bruno Borges <bruno@iborges.com> www.iborges.com
* https://github.com/brunohulk/valid_date_js
* */
function isValidDate(year, month, day)
{
    var realMonth = month - 1;
    var date = new Date(year,realMonth, day);

    if(date.getFullYear() == year && date.getDate() == day && date.getMonth() == realMonth) {
        return true;
    } else {
        return false;
    }
}
