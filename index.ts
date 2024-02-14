interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
}

let person1: Person = {
    name: "Rebecca",
    location: "Newcastle upon Tyne",
    isProgrammer: false
}

let person2: Person = {
    name: "Joshua",
    location: "Hunter Valley",
    isProgrammer: true
}

interface Speech {
    sayHi(name: string): string;
    sayBye(name: string): string;
}

let sayStuff: Speech = {
    sayHi: function (name: string) {
        return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`
}

console.log(sayStuff.sayHi(person1.name));
console.log(sayStuff.sayBye(person2.name))

function circleFunc(diam: number): string {
    return `The circumfrence is ${Math.PI * diam} and this was calculated using function keyword syntax`
}

const circleArrow = (diam: number): string => {
    return `The circumfrence is ${Math.PI * diam} and this was calculated using arrow function syntax`
}

console.log(circleFunc(3));
console.log(circleArrow(4));

//optional parameters in functions
const add = (a: number, b: number, c?: number | string) => {
    console.log(c);
    return a + b;
}

console.log(add(5, 4, 'Number, string or nothing'))
console.log(add(5, 3))

//functions that return nothing return void - can make explicit like below, but implicit is fine
const logMessage = (msg: string): void => {
    console.log('This is the message: ' + msg);
};

logMessage('Typescript is alright');
console.log(logMessage(`Random message`));

const isBiggerThanTen = (num: number): boolean => {
    if (num > 10){
        return true;
    } else {
        return false;
    }
}

//Exploring type aliases
type StringOrNumber = string | number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
};

const personA: PersonObject = {
    name: 'Barry',
    id: 1
}

const personB: PersonObject = {
    name: 'Larry',
    id: 'one'
}

const sayHello = (person: PersonObject) => {
    return 'Hello ' + person.name;
}

const sayGoodbye = (person: PersonObject) => {
    return 'Goodbye ' + person.name;
}

module.exports = { 
    isBiggerThanTen,
    sayHello,
    sayGoodbye
};

//NOTES:
// TypeScript doesn't have access to the DOM like JS - Use the non-null
// assertion operator (!) to tell the compiler explicitly that an 
// expression has a vlue other than null or undefined. May not be 
// relevant in React Native.

// Typescript has an Event object built in, which is worth exploring
// and learning in React Native.

// Classes in TS are almost identical to classes in JS except you
// can define types for each piece of data. You can also give data
// access modifiers (public, private, readonly and protected - all
// types default to public if not explicit).