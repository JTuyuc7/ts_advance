"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.math1 = exports.math = exports.State = exports.createPerson = exports.isPalindrome = void 0;
/**
 * Represents a message string.
 */
let message = 'Hello, TypeScript!';
//! classes
/**
 * Represents a regular expression.
 */
let regex = new RegExp('foo', 'g');
//* Arrays
/**
 * Represents an array of numbers.
 */
let list = [1, 2, 3];
//* Sets
/**
 * Represents a set of numbers.
 */
let set = new Set([1, 2, 3]);
//* First class collection
/**
 * Represents a queue data structure.
 */
class Queue {
    constructor() {
        this.data = [];
    }
    /**
     * Adds an item to the queue.
     * @param item - The item to be added.
     */
    push(item) {
        this.data.push(item);
    }
    /**
     * Removes and returns the first item from the queue.
     * @returns The first item in the queue, or undefined if the queue is empty.
     */
    pop() {
        return this.data.shift();
    }
}
let queue = new Queue();
// * Arrarys and tupples
/**
 * Represents a tuple with a number and a string.
 */
let tuple = [1, 'hello'];
//* Arrays with fixed lengths are known as tuples
/**
 * Represents a tuple with two numbers.
 */
let tuple2 = [1, 10];
let point = {
    x: 10,
    y: 20,
};
let unit = {
    x: 0,
    y: 0,
};
//* Using constant variables
/**
 * Represents a constant point with x and y coordinates.
 */
const point1 = {
    x: 10,
    y: 20,
};
//* Functions
/**
 * Adds two numbers and returns the result.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of the two numbers.
 */
function add(a, b) {
    return a + b;
}
/**
 * Logs a message to the console.
 * @param message - The message to be logged.
 */
function logMessage(message) {
    console.log(message);
}
//* Rest parameters
/**
 * Sums up a variable number of numbers.
 * @param numbers - The numbers to be summed up.
 * @returns The sum of the numbers.
 */
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
let add1;
add1 = function (a, b) {
    return a + b;
};
let user = { id: '1' };
let product = { id: '1' };
console.log("🚀 ~ user:", user);
console.log("🚀 ~ product:", product);
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 10, z: 20 };
/** Extra infor is OK in TS */
function iTakePoint2D(point) { }
iTakePoint2D(point3D);
/** Error: missing info */
function iTakePoint3D(point) { }
// iTakePoint3D(point2D); //*@ Error
//* Classes
/**
 * Represents an animal with a name and the ability to move.
 */
class Animal {
    /**
     * Creates a new instance of the Animal class.
     * @param name - The name of the animal.
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Moves the animal a certain distance.
     * @param distance - The distance to move.
     */
    move(distance = 0) {
        console.log(`${this.name} moved ${distance}m`);
    }
}
let cat = new Animal('Cat');
cat.move(10);
class Bird extends Animal {
    /**
     * Makes the bird fly a certain distance.
     * @param distance - The distance to fly.
     */
    fly(distance = 0) {
        console.log(`${this.name} flew ${distance}m`);
    }
}
//* Generics
/**
 * Represents a queue data structure with a generic type.
 */
class Quee1 {
    constructor() {
        this.data = []; // Provide a type for the data array
    }
    /**
     * Adds an item to the queue.
     * @param item - The item to be added.
     */
    push(item) {
        this.data.push(item);
    }
    /**
     * Removes and returns the first item from the queue.
     * @returns The first item in the queue, or undefined if the queue is empty.
     */
    pop() {
        return this.data.shift();
    }
}
const quee = new Quee1();
quee.push(123);
quee.push(256);
console.log((_a = quee.pop()) === null || _a === void 0 ? void 0 : _a.toPrecision(2));
//* Any and unknown types
//! Both are universal supertypes in TypeScript
let complexity = 10;
let mystery = 10;
complexity = 'string';
mystery = 'string';
complexity = true;
mystery = true;
//! unknown is safer than any
// mistery.trim(); //* Error
let mistery1 = true;
//! unknown requires a type assertion to be used
//* JavaScript to TypeScript
let someLegacyCode = 'Hello, TypeScript!';
someLegacyCode = 10;
someLegacyCode = true;
someLegacyCode = {};
someLegacyCode = function loadString() { };
//* Type assertions
let hello = "Merry Christmas!";
// First method of assertion
const trimmed = hello.trim();
// Second method of assertion
// not recommended in tsx files
const trimmed1 = hello.trim();
//* Type casting
let hello1;
let world = '123';
const number11 = +world;
console.log("🚀 ~ number11:", number11 === 123); // true
console.log("🚀 ~ number11:", number11); // 123
//* Modules
/**
 * Checks if the input string is a palindrome.
 * @param text - The input string.
 * @returns True if the input string is a palindrome, false otherwise.
 */
function isPalindrome(text) {
    return text === text.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
isPalindrome('hello'); // false
isPalindrome('level'); // true
//* Type declarations
console.log('Logged in user:', process.env.USER);
const fs_1 = __importDefault(require("fs"));
// import { Point112D, Point3D } from './interfaces';
fs_1.default.writeFileSync('message.txt', 'Hello, TypeScript!');
const point11 = {
    x: 10,
    y: 20,
};
// point11 = { x: 20, y: 30 }; //* Error
// Property assignment is allowed
point11.x = 20;
point11.y = 30;
// Classes
/**
 * Represents an animal with a name and the ability to move.
 */
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    move(distance = 0) {
        console.log(`${this.name} moved ${distance}m`);
    }
}
// Create a new instance of the Animal class
const dog = new Animal1('Dog');
// read the property
console.log(dog.name);
// Change the property
dog.name = 'Cat';
// prevent the property from being changed by adding the readonly keyword
class Animal2 {
    constructor(name) {
        this.name = name;
    }
}
// Create a new instance of the Animal class
const dog1 = new Animal2('Dog');
// read the property
console.log(dog1.name);
// Change the property
// dog1.name = 'Cat'; //* Error
//* Union types
/**
 * Formats the input into a command line string.
 * @param input - The input string or an array of strings.
 * @returns The formatted command line string.
 */
function formatCommandLine(input) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map((x) => x.trim()).join(' ');
    }
    return line;
}
console.log(formatCommandLine('  hello  ')); // works since it's a string
console.log(formatCommandLine(['  hello  ', 'world'])); // works since it's an array
// console.log(formatCommandLine(10)); //* Error since it's a number and we are not handling it
/**
 * Formats the input into a command line string.
 * @param input - The input string or an array of strings.
 * @returns The formatted command line string.
 */
function formatCommandLine1(input) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map((x) => x.trim()).join(' ');
    }
    return line;
}
console.log(formatCommandLine1('  hello  ')); // works since it's a string
console.log(formatCommandLine1(['  hello  ', 'world'])); // works since it's an array
/**
 * Formats the input into a command line string.
 * @param input - The input string or an array of strings.
 * @returns The formatted command line string.
 */
function formatCommandLine2(input) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map((x) => x.trim()).join(' ');
    }
    return line;
}
// use it in a function
function setDirection(direction) {
    console.log(`you moved to ${(direction)}`);
}
setDirection('left'); // works
// implement it in a function
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
console.log(rollDice()); // works
// console.log(rollDice() + 1); //* Error since it's not in the DiceVal type
//*-*-*-*-*-**-*-*-*-*-*-*-
//! Type narrowing
/**
 * Pads a string with a specified padding.
 * @param value - The string to be padded.
 * @param padding - The padding to be added.
 * @returns The padded string.
 */
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
class Cat {
    /**
     * Makes the cat meow.
     */
    meow() {
        console.log('meow');
    }
}
class Dog {
    /**
     * Makes the dog bark.
     */
    bark() {
        console.log('bark');
    }
}
/**
 * Makes a sound based on the type of animal.
 * @param animal - The animal to make a sound.
 */
function makeSound(animal) {
    //! The instance of operator is used to narrow down the type of the animal
    if (animal instanceof Cat) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
makeSound(new Cat()); // meow
makeSound(new Dog()); // bark
/**
 * Calculates the area of a shape.
 * @param shape - The shape to calculate the area for.
 * @returns The area of the shape.
 */
function calculateArea(shape) {
    //! The in operator is used to narrow down the type of the shape
    if ('size' in shape) {
        return shape.size * shape.size;
    }
    if ('width' in shape) {
        return shape.width * shape.height;
    }
}
console.log(calculateArea({ size: 10 })); // 100
console.log(calculateArea({ width: 10, height: 20 })); // 200
/**
 * Calculates the area of a shape.
 * @param shape - The shape to calculate the area for.
 * @returns The area of the shape.
 */
function calculateArea1(shape) {
    // Extend the functionality of the function to include the circle shape
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    // Use property checs to narrow down the type of the shape
    if (shape.kind === 'square') {
        return shape.size * shape.size;
    }
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
}
/**
 * Validates an input value.
 * @param value - The value to be validated.
 * @returns The validation result.
 */
function logResult(result) {
    if (result.isValid) {
        console.log(`Success: ${result.validatedValue}`);
    }
    if (!result.isValid) {
        console.log(`Failure: ${result.errorReason}`);
    }
}
// *-***-*-*-*-*-*
//! Class parameters properties
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person('Alice', 30);
console.log(person.name, person.age); // Alice 30
// avoid the boilerplate code by using the public keyword in the constructor
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new Person1('James', 30);
console.log(person1.name, person1.age); // James 30
// *-*-*-*-*-*-*-*-*-*-*-*-*
// Null vs Undefined
// If something hasn't being initialized it's undefined
let notDefined = undefined;
// If something is not available it's null
let notAvailable = null;
class Point4 {
}
const point4 = new Point4();
console.log(point4.x); // undefined
function logMessage1(message) {
    console.log(message.match(/[aeiou]/gi));
}
logMessage1('Hello, TypeScript!'); // ['e', 'o', 'a', 'i', 'e']
logMessage1('sky'); // null
function someBooleanOrNullOrUndefinedFunction() {
    return Math.random() > 0.5 ? true : null;
}
const result = someBooleanOrNullOrUndefinedFunction();
if (result == null) {
    console.log('The result is true', result);
}
if (result == undefined) {
    console.log('The result is undefined', result);
}
if (result != null) {
    console.log('The result is not null', result);
}
function decorate(value) {
    if (value == null) {
        return value;
    }
    return `--- ${value.trim()} ---`;
}
console.log(decorate('Hello, TypeScript!')); // --- Hello, TypeScript! ---
console.log(decorate(null)); // null
console.log(decorate(undefined)); // undefined
// Combine the three types using the & operator
function contact(details) {
    console.log(`You can contact ${details.name} at ${details.email} or ${details.phone}`);
}
contact({
    name: 'Alice',
    email: 'hola@hola.com',
    phone: '1234567890'
});
// Create a persons with no phone number
const adam = {
    name: 'Adam',
    age: 30
};
// Create a person with a phone number
const eve = {
    name: 'Eve',
    age: 30,
    phone: '1234567890'
};
class Point3 {
}
const point2 = new Point3();
console.log(point2.x); // undefined
// asign a value to the optional property
point2.x = 10;
// asign an undefined value to the optional property
point2.x = undefined;
let point3;
function initialize() {
    point3 = { x: 10, y: 20 };
}
initialize();
// add the non-null assertion operator to the property
// adding the ! operator tells TypeScript that the property is not null or undefined
console.log('after initialized', point3.x, point3.y); //*@ Error
function initialize1() {
    return { x: 10, y: 20 };
}
let point5 = initialize1();
console.log(point5.x, point5.y); // 10 20
// create an object type using an interface
const point6 = {
    x: 10,
    y: 20
};
function handleRequest(req) {
    req.body;
    req.json;
}
/* interfaces do not support to create values
for primitive types, if you want to create a value
you need to create a type value
*/
// Types vs Interfaces
// Type
// Unions
// Intersections (&)
// Primitives
// Shorthand Functions
// Advanced Type Functions
// Interfaces
// Declaration Merging
// Familiarity (extends)
// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//! Never Type
// This function will never return
const fail = (message) => {
    throw new Error(message);
};
// Only values of type never, are assignable to values of type never
let example;
function calculateArea2(shape) {
    switch (shape.kind) {
        case 'square':
            return shape.size * shape.size;
        case 'rectangle':
            return shape.width * shape.height;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
class Cat1 {
    constructor() {
        this.name = 'Cat';
    }
    voice() {
        return 'meow';
    }
}
class Dog1 {
    constructor() {
        this.name = 'Dog';
    }
    voice() {
        return 'bark';
    }
}
function log(animal) {
    console.log(animal.name, animal.voice());
}
// using the implements keyword to ensure that the object has the required properties
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Definite assignment assertions
let dice;
function rollDice1() {
    dice = Math.floor(Math.random() * 6) + 1;
}
rollDice1();
// ! non null assertion !
// console.log('Current Dice Value:', dice); //*@ Error
console.log('Current Dice Value:', dice);
// Using the definite assignment assertion operator
let dice1;
// This tells TypeScript that the variable will be initialized before it's used
class Point8 {
    moveRandom() {
        this.x = Math.random();
        this.y = Math.random();
    }
}
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! User defined type guards
function isSquare(shape) {
    return shape.kind === 'square';
}
// Create an assertion function 
function assert(condition, msg) {
    // Check if the condition is false
    if (!condition) {
        throw new Error(msg);
    }
}
// Create a function that asserts the date of birth is defined
function assertDateOfBirth(value) {
    if (value instanceof Date)
        return;
    else
        throw new Error('The date of birth is not defined');
}
const myPerson1 = {
    name: 'Alice'
};
assertDateOfBirth(myPerson1.dateOfBirth);
console.log('Date of birth:', myPerson1.dateOfBirth);
function reverse(stringOrStringArray) {
    if (typeof stringOrStringArray === 'string') {
        return stringOrStringArray.split('').reverse().join('');
    }
    return stringOrStringArray.slice().reverse();
}
console.log(reverse('hello')); // olleh
console.log(reverse(['hello', 'world'])); // ['world', 'hello']
function makeDate(timeStampOfTheYear, month, day) {
    if (month != null && day != null) {
        return new Date(timeStampOfTheYear, month - 1, day);
    }
    return new Date(timeStampOfTheYear);
}
const doomsday = makeDate(2024, 6, 8); // June 8, 2024
const epoch = makeDate(0); // January 1, 1970
const add2 = (a, b) => a + b;
const Point3D1 = class {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
};
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Abstract classes
class Command {
    execute() {
        console.log(`Executing: ${this.commandLine()}`);
    }
}
class GitResetCommand extends Command {
    commandLine() {
        return 'git reset';
    }
}
class GitFetchCommand extends Command {
    commandLine() {
        return 'git fetch';
    }
}
new GitResetCommand().execute(); // Executing: git reset
new GitFetchCommand().execute(); // Executing: git fetch
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Index signatures
const str = {
    hello: 'world',
};
console.log(str['hello']); // world
// access the property using the index signature
const nums = {
    123: 'string'
};
// access the property using the index signature
console.log(nums[123]); // string
const person5 = {
    alice: {
        displayName: 'Alice',
        email: 'hello@hello.com'
    }
};
// Add a new person to the dictionary
person5['Beth'] = { displayName: 'Beth', email: 'hello@hello1.com' };
// access the person using the index signature
console.log(person5['Beth']); // { displayName: 'Beth', email: 'hello@hello1.com'}
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Readonly properties Arrays and Tuples
function reverseSorted(input) {
    return input.sort().reverse();
}
const start = [1, 2, 3];
const end = reverseSorted(start);
console.log(end); // [3, 2, 1] // this also mutates the original array
// use the readonly keyword to prevent the array from being modified
function reverseSorted1(input) {
    return input.slice().reverse();
}
// use the readonly keyword to prevent the tuple from being modified
// function move(p: Point9D, dx: number, dy: number): Point9D {
//   p[0] += dx;
//   p[1] += dy;
//   return p;
// }
//! return a new tuple instead of modifying the existing one
function move(p, dx, dy) {
    return [p[0] + dx, p[1] + dy];
}
move([0, 0], 1, 1); // [1, 1]
let point112 = { x: 10, y: 20 };
let point123 = { x: 10, y: 20, z: 30 };
let person10 = { name: 'Alice' };
let tempPoint = { x: 10, y: 20 };
point112 = point123;
// point123 = point112 //* Error as the types are not compatible
point123 = point112; // double assertion
tempPoint = person10; // double assertion
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Const assertions
const king = 'elvis';
// king = 'presley' //* Error
const upper = king.toUpperCase(); // 
const dave = {
    name: 'Dave',
    age: 30,
    role: 'Developer',
    skills: ['TypeScript', 'JavaScript']
};
// dave = 'Dave'; //* Error
dave.name = 'David'; // works
dave.skills.push('React'); // works
// use the const assertion to prevent the object from being modified
const dave1 = {
    name: 'Dave',
    age: 30,
    role: 'Developer',
    skills: ['TypeScript', 'JavaScript']
};
// prevent the object from being modified
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! This parameter properties
// It must be the first parameter in the constructor
function double() {
    this.value = this.value * 2;
}
const valid = {
    value: 10,
    double
};
valid.double();
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Generics Constraints
function addFullName(obj) {
    return Object.assign({}, obj);
}
// Adding Generics Constraints
function addFullName1(obj) {
    return Object.assign(Object.assign({}, obj), { fullName: `${obj.firstName} ${obj.lastName}` });
}
const fullObj = addFullName1({ firstName: 'Alice', lastName: 'Doe' });
console.log(fullObj.fullName); // Alice Doe
console.log(fullObj.firstName); // Alice
console.log(fullObj.lastName); // Doe
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Typeof type operator
const center = { x: 0, y: 0, z: 0 };
// later
const unit1 = {
    x: center.x,
    y: center.y,
    z: center.z,
};
// Create a type alias from an object
const personResponse = {
    name: 'Alice',
    email: 'hola@hola.com',
    firstName: 'test',
    lastName: 'test-1'
};
function processResponse(response) {
    console.log(response.name);
    console.log(response.email);
}
const person2 = {
    name: 'Alice',
    age: 30,
    occupation: 'Engineer'
};
function getProperty(obj, prop) {
    return obj[prop];
}
const name = getProperty(person2, 'name'); // 'Alice'
const age = getProperty(person2, 'age'); // 30
const occupation = getProperty(person2, 'occupation'); // 'Engineer'
const john = {
    name: 'John',
    age: 30,
    location: 'USA'
};
function getLog(obj, kew) {
    const value = obj[kew];
    console.log(`Getting, ${kew}, ${value}`);
    return value;
}
const age1 = getLog(john, 'age'); // 30
// this will return an error
// const location = getLog(john, 'location'); //@ USA
// Limit the amount of values that can be passed to the function
// function getLog1<T extends keyof Person8>(obj: Person8, key: T) {
//   const value = obj[key];
//   console.log(`Getting, ${key}, ${value}`);
//   return value;
// }
function getLog1(obj, key) {
    const value = obj[key];
    console.log(`Getting, ${key}, ${value}`);
    return value;
}
const location1 = getLog1(john, 'location'); // USA
// make it more generic
function getLog2(obj, key) {
    const value = obj[key];
    console.log(`Getting, ${String(key)}, ${value}`);
    return value;
}
const age3 = getLog2(john, 'age'); // 30
function setLog(obj, key, value) {
    console.log(`Setting: `, key, value);
    obj[key] = value;
}
setLog(john, 'age', 31); // Setting: age 31
const isNumber = (value) => {
    return typeof value === 'number' ? 'number' : 'other';
};
const withNumber = isNumber(10); // number
const withString = isNumber('hello'); // other
function typeName(t) {
    return typeof t;
}
const str1 = typeName('hello'); // string
const num = typeName(10); // number
const bool = typeName(true); // boolean
const undef = typeName(undefined); // undefined
const func = typeName(() => { }); // function
const obj = typeName({}); // object
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Conditional types with unions and never
function error(message) {
    throw new Error(message);
}
// not allowed
// const notAllowed: never = 'hello'; // Error
const allowed = error('Something went wrong');
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`
    };
}
exports.createPerson = createPerson;
function logPerson2(person) {
    console.log('Person:', person.firstName, person.lastName, person.fullName);
}
// Create it with less code
function logPerson10(person) {
    console.log('Person:', person.firstName, person.lastName, person.fullName);
}
const center2 = {
    x: 0,
    y: 0,
    z: 0
};
// using the default mapped type
const center3 = {
    x: 0,
    y: 0,
    z: 0,
};
const center1 = {
    x: 0,
    y: 0,
    z: 0
};
// useful example
class State {
    constructor(current) {
        this.current = current;
    }
    update(next) {
        this.current = Object.assign(Object.assign({}, this.current), next);
    }
}
exports.State = State;
const state = new State({ x: 0, y: 0 });
// Now we can pass only the needed values to be updated
state.update({ y: 35 });
state.update({ x: 10, y: 123 });
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Template literal types
let templateLiteral;
templateLiteral = 'Example hello';
templateLiteral = 'Example world';
function size(input, unit) {
    return `${input}${unit}`;
}
function applyStyle(style) {
    // apply the style
}
// applyStyle('color: red;'); //* Error 
applyStyle('small-primary');
class State1 {
    constructor(current) {
        this.current = current;
    }
    update(next) {
        this.current = Object.assign(Object.assign({}, this.current), next);
    }
}
const point25 = { x: 10, y: 20 };
// point25.x = 20; //* Error
function makeReadOny(obj) {
    return Object.freeze(Object.assign({}, obj));
}
const persons = {};
persons['alice'] = { name: 'Alice', role: 'Developer' };
persons['bob'] = { name: 'Bob', role: 'Designer' };
let peopleWithRoles = {
    admin: ['Alice', 'Bob'],
    owner: ['Charlie']
};
const admins = peopleWithRoles.admin;
const pages = {
    home: { id: 'home', title: 'Home' },
    about: { id: 'about', title: 'About' },
    contact: { id: 'contact', title: 'Contact' },
};
function getPadding(padding) {
    if (padding === 'small') {
        return 10;
    }
    if (padding === 'medium') {
        return 20;
    }
    if (padding === 'large') {
        return 30;
    }
    return padding;
}
let padding = 'small';
padding = 'medium';
let padding1 = 'small';
padding1 = 'medium';
padding1 = 'large';
let optional;
optional = { name: 'Alice' }; // Property "name" is present with a value
optional = { name: undefined }; // Property "name" is present with a value of undefined
optional = {}; // Property "name" is not present
let union;
union = { name: 'Alice' }; // Property "name" is present with a value
union = { name: undefined }; // Property "name" is present with a value of undefined
// union = {}; // Error: Property "name" is required
// Using it with functions
function logName(name) {
    console.log(name);
}
logName('Alice'); // Alice
logName(undefined);
// logName(); // undefined
function logName1(name) {
    console.log(name);
}
logName1('Alice'); // Alice
logName1(undefined); // undefined
const theme = {
    primary: 'red',
    secondary: [0, 255, 0],
};
const theme1 = {
    primary: 'red',
    secondary: [0, 255, 0],
    tertiary: 'red'
};
const [r, g, b] = theme.secondary;
// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Property key
const str11 = 'key';
const num11 = 123;
const sym = Symbol('key');
const valid1 = {
    [str11]: 'value',
    [num11]: 'value',
    [sym]: 'value',
};
// const obj1 = {}
// const invalid = {
//   [obj1]: 'value'
// }
// Using the built-in PropertyKey type
let example1;
example1 = str11;
example1 = num11;
example1 = sym;
exports.math = {
    double() {
        this.value *= 2;
    },
    half() {
        this.value /= 2;
    }
};
const obj1 = Object.assign({ value: 10 }, exports.math);
obj1.double();
obj1.half();
exports.math1 = {
    double() {
        this.value *= 2;
    },
    half() {
        this.value /= 2;
    }
};
const name20 = { name: 'Alice' };
const age20 = { age: 30 };
const nameAndAge = { name: 'James', age: 30 };
