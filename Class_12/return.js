"use strict";
//function infers the return type
//infers a number
const Sum = (a, b) => a + b;
//infers a string
const NAME = () => 'my name is Chris';
//function can't infere the return type. So it must be given
const calcSalary = (workedHours, hourValue) => {
    return new Promise((res, err) => {
        res(workedHours * hourValue);
    });
};
console.log(Sum(4, 5));
console.log(NAME);
console.log(calcSalary(7, 8));
