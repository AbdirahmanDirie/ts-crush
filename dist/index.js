"use strict";
//basic types
let id = 5;
let comaponay = "DIRIE";
let isPublished = true;
let x = "hello";
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let arr = [1, true, 'hello'];
//tuple
let person = [1, 'hello', false];
//tuple array
let emplyee;
emplyee = [
    [1, 'dirie'],
    [2, 'ali'],
];
//union
let paid;
//enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "Dirie"
};
//type assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//function
function addNum(x, y) {
    return x + y;
}
let result = addNum(1, 2);
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Dirie",
    age: 20
};
const add = (x, y) => x + y;
const sub = (x, y) => x + y;
//classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new Person(1, "dirie");
//Genrics
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3]);
let strArray = getArray(['wow', 'hi', 'world']);
numberArray.push(5);
strArray.push('we');
console.log(brad.id);
