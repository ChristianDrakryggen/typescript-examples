let fullname: string = "Christian Johannesson";
let age: number = 31;
let presentation: string = `Hello my name is ${fullname}`
console.log(presentation);

let list: Array<number> = [1, 2, 3]
let list2: Array<string> = ["one", "two", "three"]

const objectUser: {name: string, age: number} = {name: "Christian", age: 31};

const objectArray: {name: string, age: number}[] = [
    {name: "Christian", age: 31},
    {name: "Carl", age: 28}
]

let hungry: boolean = true;

let myTuple: [string, number] = ["Christian", 31];
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;