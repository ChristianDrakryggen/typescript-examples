"use strict";
function getSum(num1, num2) {
    return num1 + num2;
}
function whatever(val1, val2) {
    return val1 + val2;
}
console.log(whatever(1, 2));
function getPerson(person) {
    return "Hi my name is " + person.name + " and I'm " + person.age + " years old";
}
console.log(getPerson({ name: "Christian", age: 31 }));
