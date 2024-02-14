var person1 = {
    name: "Rebecca",
    location: "Newcastle upon Tyne",
    isProgrammer: false
};
var person2 = {
    name: "Joshua",
    location: "Hunter Valley",
    isProgrammer: true
};
var sayStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name);
    },
    sayBye: function (name) { return "Bye ".concat(name); }
};
console.log(sayStuff.sayHi(person1.name));
console.log(sayStuff.sayBye(person2.name));
function circleFunc(diam) {
    return "The circumfrence is ".concat(Math.PI * diam, " and this was calculated using function keyword syntax");
}
var circleArrow = function (diam) {
    return "The circumfrence is ".concat(Math.PI * diam, " and this was calculated using arrow function syntax");
};
console.log(circleFunc(3));
console.log(circleArrow(4));
//optional parameters in functions
var add = function (a, b, c) {
    console.log(c);
    return a + b;
};
console.log(add(5, 4, 'Number, string or nothing'));
console.log(add(5, 3));
//functions that return nothing return void - can make explicit like below, but implicit is fine
var logMessage = function (msg) {
    console.log('This is the message: ' + msg);
};
logMessage('Typescript is alright');
console.log(logMessage("Random message"));
var isBiggerThanTen = function (num) {
    if (num > 10) {
        return true;
    }
    else {
        return false;
    }
};
module.exports = { isBiggerThanTen: isBiggerThanTen };
