function getSum (num1: number, num2: number):number {
    return num1 + num2;
}

function whatever (val1: number, val2: number):number{
    return val1 + val2;
}

console.log(whatever(1, 2));

interface Person {
    name: string;
    age: number;
}

function getPerson (person: Person) {
    return `Hi my name is ${person.name} and I'm ${person.age} years old`
}

console.log(getPerson({name: "Christian", age: 31}))