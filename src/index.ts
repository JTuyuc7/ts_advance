/**
 * Represents a message string.
 */
let message: string = 'Hello, TypeScript!';

//! classes

/**
 * Represents a regular expression.
 */
let regex: RegExp = new RegExp('foo', 'g');

//* Arrays

/**
 * Represents an array of numbers.
 */
let list: number[] = [1, 2, 3];

//* Sets

/**
 * Represents a set of numbers.
 */
let set: Set<number> = new Set([1, 2, 3]);

//* First class collection

/**
 * Represents a queue data structure.
 */
class Queue<T> {
  private data: Array<T> = [];

  /**
   * Adds an item to the queue.
   * @param item - The item to be added.
   */
  push(item: T) {
    this.data.push(item);
  }

  /**
   * Removes and returns the first item from the queue.
   * @returns The first item in the queue, or undefined if the queue is empty.
   */
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue<number>();

// * Arrarys and tupples

/**
 * Represents a tuple with a number and a string.
 */
let tuple: [number, string] = [1, 'hello'];

//* Arrays with fixed lengths are known as tuples

/**
 * Represents a tuple with two numbers.
 */
let tuple2: [number, number] = [1, 10];

//* Object types and type Aliases

/**
 * Represents a point with x and y coordinates.
 */
type Point = {
  x: number;
  y: number;
};

let point: Point = {
  x: 10,
  y: 20,
};

let unit: Point = {
  x: 0,
  y: 0,
};

//* Using constant variables

/**
 * Represents a constant point with x and y coordinates.
 */
const point1: Point = {
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
function add(a: number, b: number): number {
  return a + b;
}

/**
 * Logs a message to the console.
 * @param message - The message to be logged.
 */
function logMessage(message: string): void {
  console.log(message);
}

//* Rest parameters

/**
 * Sums up a variable number of numbers.
 * @param numbers - The numbers to be summed up.
 * @returns The sum of the numbers.
 */
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

//* first call functions

/**
 * Represents a function that adds two numbers and returns the result.
 */
type Add = (a: number, b: number) => number;

let add1: Add;

add1 = function (a: number, b: number): number {
  return a + b;
};

//* Structural typing

/**
 * Represents a user with an ID.
 */
type User = { id: string };

/**
 * Represents a product with an ID.
 */
type Product = { id: string };

let user: User = { id: '1' };
let product: Product = { id: '1' };
console.log("🚀 ~ user:", user)
console.log("🚀 ~ product:", product)

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 10, z: 20 };

/** Extra infor is OK in TS */
function iTakePoint2D(point: Point2D) { }
iTakePoint2D(point3D);

/** Error: missing info */
function iTakePoint3D(point: Point3D) { }
// iTakePoint3D(point2D); //*@ Error


//* Classes

/**
 * Represents an animal with a name and the ability to move.
 */
class Animal {
  // private Properties
  // private name: string;
  //* restricted access outside the class but can be accessed by subclasses
  protected name: string;

  /**
   * Creates a new instance of the Animal class.
   * @param name - The name of the animal.
   */
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Moves the animal a certain distance.
   * @param distance - The distance to move.
   */
  public move(distance: number = 0): void {
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
  fly(distance: number = 0): void {
    console.log(`${this.name} flew ${distance}m`);
  }
}

//* Generics

/**
 * Represents a queue data structure with a generic type.
 */
class Quee1<T> {
  data: T[] = []; // Provide a type for the data array

  /**
   * Adds an item to the queue.
   * @param item - The item to be added.
   */
  push(item: T) {
    this.data.push(item);
  }

  /**
   * Removes and returns the first item from the queue.
   * @returns The first item in the queue, or undefined if the queue is empty.
   */
  pop(): T | undefined {
    return this.data.shift();
  }
}

const quee = new Quee1<number>();
quee.push(123);
quee.push(256);

console.log(quee.pop()?.toPrecision(2));

//* Any and unknown types

//! Both are universal supertypes in TypeScript

let complexity: any = 10;
let mystery: unknown = 10;

complexity = 'string';
mystery = 'string';

complexity = true;
mystery = true;

//! unknown is safer than any
// mistery.trim(); //* Error
let mistery1: boolean = true
//! unknown requires a type assertion to be used

//* JavaScript to TypeScript

let someLegacyCode: unknown = 'Hello, TypeScript!';

someLegacyCode = 10;
someLegacyCode = true;
someLegacyCode = {};
someLegacyCode = function loadString() { }

//* Type assertions

let hello: unknown = "Merry Christmas!";
// First method of assertion
const trimmed = (hello as string).trim();
// Second method of assertion
// not recommended in tsx files
const trimmed1 = (<string>hello).trim();

//* Type casting

let hello1;
let world = '123';
const number11 = +world;
console.log("🚀 ~ number11:", number11 === 123) // true
console.log("🚀 ~ number11:", number11) // 123

//* Modules

/**
 * Checks if the input string is a palindrome.
 * @param text - The input string.
 * @returns True if the input string is a palindrome, false otherwise.
 */
export function isPalindrome(text: string): boolean {
  return text === text.split('').reverse().join('');
}

isPalindrome('hello'); // false
isPalindrome('level'); // true

//* Type declarations

console.log(
  'Logged in user:',
  process.env.USER
)

import fs from 'fs';
// import { Point112D, Point3D } from './interfaces';
fs.writeFileSync('message.txt', 'Hello, TypeScript!');

//! 08/06/2024
// console.log('Hello, TypeScript!');

type Point11 = {
  x: number;
  y: number;
}

const point11: Point11 = {
  x: 10,
  y: 20,
}

// point11 = { x: 20, y: 30 }; //* Error

// Property assignment is allowed
point11.x = 20;
point11.y = 30;
// But you can add the readonly keyword to prevent this
type Point12 = {
  readonly x: number;
  readonly y: number;
}

// Classes

/**
 * Represents an animal with a name and the ability to move.
 */
class Animal1 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(distance: number = 0): void {
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
  readonly name: string;
  constructor(name: string) {
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
function formatCommandLine(input: any) {
  let line = '';
  if (typeof input === 'string') {
    line = input.trim();
  } else {
    line = input.map((x: any) => x.trim()).join(' ');
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
function formatCommandLine1(input: string | string[]) {
  let line = '';
  if (typeof input === 'string') {
    line = input.trim();
  } else {
    line = input.map((x: string) => x.trim()).join(' ');
  }
  return line;
}

console.log(formatCommandLine1('  hello  ')); // works since it's a string
console.log(formatCommandLine1(['  hello  ', 'world'])); // works since it's an array
// console.log(formatCommandLine1(10)); //* Error since it's a number and we are not handling it since the union type is string or string[]

//! Exract the union type into a type alias

/**
 * Represents a string or an array of strings.
 */
type StringOrStringArray = string | string[];

/**
 * Formats the input into a command line string.
 * @param input - The input string or an array of strings.
 * @returns The formatted command line string.
 */
function formatCommandLine2(input: StringOrStringArray) {
  let line = '';
  if (typeof input === 'string') {
    line = input.trim();
  } else {
    line = input.map((x: string) => x.trim()).join(' ');
  }
  return line;
}

//! Literal types

/**
 * Represents the format of an image.
 */
type Format = 'jpeg' | 'png';

/**
 * Represents a direction.
 */
type direction = 'left' | 'right' | 'top' | 'bottom';

// use it in a function
function setDirection(direction: direction) {
  console.log(`you moved to ${(direction)}`);
}

setDirection('left'); // works
// setDirection('up'); //* Error since it's not in the direction type

//! Also applies to numbers

/**
 * Represents the value of a dice roll.
 */
type DiceVal = 1 | 2 | 3 | 4 | 5 | 6;

// implement it in a function
function rollDice(): DiceVal {
  return (Math.floor(Math.random() * 6) + 1) as DiceVal;
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
function padLeft(value: string, padding: string | number): string | number {
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

type Animal3 = Cat | Dog;

/**
 * Makes a sound based on the type of animal.
 * @param animal - The animal to make a sound.
 */
function makeSound(animal: Animal3) {
  //! The instance of operator is used to narrow down the type of the animal
  if (animal instanceof Cat) {
    animal.meow();
  } else {
    animal.bark();
  }
}

makeSound(new Cat()); // meow
makeSound(new Dog()); // bark

type Square = {
  size: number;
}

type Rectangle = {
  width: number;
  height: number;
}

// Create a union type of Square and Rectangle
type Shape = Square | Rectangle;

/**
 * Calculates the area of a shape.
 * @param shape - The shape to calculate the area for.
 * @returns The area of the shape.
 */
function calculateArea(shape: Shape) {
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

// *-***-*-*-*-*-*
//! Discriminated unions

/**
 * Represents a square shape.
 */
type Square1 = {
  // add a kind property to the Square type
  kind: 'square';
  size: number
}

/**
 * Represents a rectangle shape.
 */
type Rectangle1 = {
  // add a kind property to the Rectangle type
  kind: 'rectangle';
  width: number;
  height: number;
}

/**
 * Represents a circle shape.
 */
type Circle = {
  // add a kind property to the Circle type
  kind: 'circle';
  radius: number;
}

type Shape1 = Square1 | Rectangle1 | Circle;

/**
 * Calculates the area of a shape.
 * @param shape - The shape to calculate the area for.
 * @returns The area of the shape.
 */
function calculateArea1(shape: Shape1) {

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

// Using not only for strings but also for numbers boolean
type ValidationSuccess = {
  isValid: true;
  validatedValue: string;
}

type ValidationFailure = {
  isValid: false;
  errorReason: string;
}

type ValidationResult = ValidationSuccess | ValidationFailure;

/**
 * Validates an input value.
 * @param value - The value to be validated.
 * @returns The validation result.
 */
function logResult(result: ValidationResult): void {
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
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person = new Person('Alice', 30);
console.log(person.name, person.age); // Alice 30

// avoid the boilerplate code by using the public keyword in the constructor
class Person1 {
  constructor(public name: string, public age: number) { }
}

const person1 = new Person1('James', 30);
console.log(person1.name, person1.age); // James 30

// *-*-*-*-*-*-*-*-*-*-*-*-*
// Null vs Undefined
// If something hasn't being initialized it's undefined
let notDefined: undefined = undefined;

// If something is not available it's null
let notAvailable: null = null;

class Point4 {
  x: number | undefined;
  y: number | undefined;
  // constructor(x: number, y: number) {
  //   this.x = x;
  //   this.y = y;
  // }
}

const point4 = new Point4();
console.log(point4.x); // undefined

function logMessage1(message: string): void {
  console.log(message.match(/[aeiou]/gi));
}

logMessage1('Hello, TypeScript!'); // ['e', 'o', 'a', 'i', 'e']
logMessage1('sky'); // null

function someBooleanOrNullOrUndefinedFunction(): boolean | null | undefined {
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


function decorate(value: string | null | undefined) {
  if (value == null) {
    return value
  }
  return `--- ${value.trim()} ---`;
}

console.log(decorate('Hello, TypeScript!')); // --- Hello, TypeScript! ---
console.log(decorate(null)); // null
console.log(decorate(undefined)); // undefined

// *-*-*-*-*-*-*-*-*-*-*-*-*-*
//! Intersection types

type Point12D = {
  x: number;
  y: number;
}

type Point23D = {
  x: number;
  y: number;
  z: number;
}

// by adding the & operator we can combine the two types
type Point123D = Point12D & {
  z: number;
};

// Other example
type Person3 = {
  name: string
}

type Email = {
  email: string
}

type Phone = {
  phone: string
}

// Create a new type that combines the three types
type ContactInfo =
  & Person3
  & Email
  & Phone;

// Combine the three types using the & operator
function contact(details: Person3 & Email & Phone) {
  console.log(`You can contact ${details.name} at ${details.email} or ${details.phone}`);
}

contact({
  name: 'Alice',
  email: 'hola@hola.com',
  phone: '1234567890'
})

// *-*-*-*-*-*-*-*-*-*-*-*-*-*
//! Optional properties

type Person2 = {
  name: string;
  age: number;
  phone?: string;
}

// Create a persons with no phone number
const adam: Person2 = {
  name: 'Adam',
  age: 30
}

// Create a person with a phone number
const eve: Person2 = {
  name: 'Eve',
  age: 30,
  phone: '1234567890'
}

class Point3 {
  x?: number;
  y?: number;
}

const point2 = new Point3();
console.log(point2.x); // undefined

// asign a value to the optional property
point2.x = 10;
// asign an undefined value to the optional property
point2.x = undefined;
// null is not allowed in optional properties
// point2.x = null; //* Error
// support null by using union types
type Point5 = {
  x: number | null;
  y: number | null;
}

// *-*-*-*-*-*-*-*-*-*-*-*-*-*
// Non-null assertion operator
type Point6 = {
  x: number;
  y: number;
}

let point3: Point6;

function initialize() {
  point3 = { x: 10, y: 20 };
}

initialize();

// add the non-null assertion operator to the property
// adding the ! operator tells TypeScript that the property is not null or undefined
console.log('after initialized', point3!.x, point3!.y); //*@ Error

//! Another way of making it
type Point7 = {
  x: number;
  y: number;
}

function initialize1(): Point7 {
  return { x: 10, y: 20 };
}

let point5 = initialize1();

console.log(point5.x, point5.y); // 10 20

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//! Interfaces

export interface Point112D {
  x: number;
  y: number;
}

// use two or more interfaces into one
export interface Point13D extends Point112D {
  z: number;
}

// create an object type using an interface
const point6: Point112D = {
  x: 10,
  y: 20
}

// *-*-*-*-*-*-*-*-*-*-*-*-*-
//! Interface declaration merging

export interface Request {
  body: any
}

export interface Request {
  json: any
}

function handleRequest(req: Request) {
  req.body
  req.json
}

// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
//! Types vs Interfaces

export interface InputProps {
  type: 'text' | 'email';
  value: string;
  onChange: (newValue: string) => void
}

// Extract the values into a single types
type inpuValue = string;
type InputOnChange = (newVal: inpuValue) => void
type InputType = 'text' | 'string';

export type InputProps1 = {
  type: InputType;
  value: inpuValue;
  onChange: InputOnChange;
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
const fail = (message: string) => {
  throw new Error(message)
}

// Only values of type never, are assignable to values of type never
let example: never;

// Ensure all posible cases are covered when using never
type Square2 = {
  kind: 'square';
  size: number;
}

type Rectangle2 = {
  kind: 'rectangle';
  width: number;
  height: number;
}

type Shape3 = | Square2 | Rectangle2;

function calculateArea2(shape: Shape3) {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.width * shape.height;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

// *-*-*-*-*-*-*-*-*-*-*-*
//! Implements keyword

type Animal4 = {
  name: string;
  voice(): string;
}

class Cat1 implements Animal4 {
  name = 'Cat';
  voice() {
    return 'meow';
  }
}

class Dog1 implements Animal4 {
  name = 'Dog';
  voice() {
    return 'bark';
  }
}

function log(animal: Animal4) {
  console.log(animal.name, animal.voice());
}
// using the implements keyword to ensure that the object has the required properties

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Definite assignment assertions

let dice: number;

function rollDice1() {
  dice = Math.floor(Math.random() * 6) + 1;
}

rollDice1();

// ! non null assertion !
// console.log('Current Dice Value:', dice); //*@ Error
console.log('Current Dice Value:', dice!);

// Using the definite assignment assertion operator
let dice1!: number;
// This tells TypeScript that the variable will be initialized before it's used

class Point8 {
  // Add the definite assignment assertion operator to the properties
  x!: number;
  y!: number;

  moveRandom() {
    this.x = Math.random();
    this.y = Math.random();
  }
}

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! User defined type guards

function isSquare(shape: any): shape is Square2 {
  return shape.kind === 'square';
}

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Assertion functions

type Person4 = {
  name: string;
  dateOfBirth?: Date;
}

// Create an assertion function 
function assert(condition: unknown, msg: string): asserts condition {
  // Check if the condition is false
  if (!condition) {
    throw new Error(msg);
  }
}

// Create a function that asserts the date of birth is defined
function assertDateOfBirth(value: unknown) {
  if (value instanceof Date) return

  else throw new Error('The date of birth is not defined')
}

const myPerson1: Person4 = {
  name: 'Alice'
}

assertDateOfBirth(myPerson1.dateOfBirth);
console.log('Date of birth:', myPerson1.dateOfBirth);

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Function overloads

function reverse(string: string): string;
function reverse(string: string[]): string[];

function reverse(stringOrStringArray: string | string[]): string | string[] {
  if (typeof stringOrStringArray === 'string') {
    return stringOrStringArray.split('').reverse().join('');
  }
  return stringOrStringArray.slice().reverse();
}

console.log(reverse('hello')); // olleh
console.log(reverse(['hello', 'world'])); // ['world', 'hello']

// another example
function makeDate(timeStampOfTheYear: number): Date;
function makeDate(timeStampOfTheYear: number, month: number, day: number): Date;

function makeDate(timeStampOfTheYear: number, month?: number, day?: number): Date {
  if (month != null && day != null) {
    return new Date(timeStampOfTheYear, month - 1, day);
  }
  return new Date(timeStampOfTheYear);
}

const doomsday = makeDate(2024, 6, 8); // June 8, 2024
const epoch = makeDate(0); // January 1, 1970

// call the function with incorrect parameters
// const error = makeDate(2024, 6); //* Error

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Call signatures

type Add1 = (a: number, b: number) => number;

const add2: Add1 = (a, b) => a + b;

// add a call signature to the Add type
type Add2 = {
  (a: number, b: number): number;
  // add additional properties
  description: string;
}

type PointCreator = new (x: number, y: number) => { x: number, y: number };

// Using a bound function
type PointCreator1 = {
  new(x: number, y: number): { x: number, y: number };
  // add additional properties
  description: string;
}

const Point3D1: PointCreator = class {
  constructor(public x: number, public y: number) { }
}

type PointCreatorWithMultipleConstructorsOverloads = {
  new(x: number, y: number): { x: number, y: number };
  new(x: number): { x: number, y: number };

  (x: number, y: number): { x: number, y: number };
  (x: number): { x: number, y: number };

  debugName: string;
}

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Abstract classes

abstract class Command {
  abstract commandLine(): string;

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
}

console.log(str['hello']); // world
// access the property using the index signature

const nums = {
  123: 'string'
}
// access the property using the index signature
console.log(nums[123]); // string

type Dictionary = {
  [key: string]: string;
}

type Person5 = {
  displayName: string;
  email: string
}

type PersonDictionary = {
  [username: string]: Person5;
}

const person5: PersonDictionary = {
  alice: {
    displayName: 'Alice',
    email: 'hello@hello.com'
  }
}

// Add a new person to the dictionary
person5['Beth'] = { displayName: 'Beth', email: 'hello@hello1.com'}

// access the person using the index signature
console.log(person5['Beth']); // { displayName: 'Beth', email: 'hello@hello1.com'}

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Readonly properties Arrays and Tuples

function reverseSorted(input: number[]): number[] {
  return input.sort().reverse();
}

const start = [1, 2, 3];
const end = reverseSorted(start);
console.log(end); // [3, 2, 1] // this also mutates the original array

// use the readonly keyword to prevent the array from being modified
function reverseSorted1(input: readonly number[]): number[] {
  return input.slice().reverse();
}

// Tuples
type Point9D = readonly [number, number];

// use the readonly keyword to prevent the tuple from being modified
// function move(p: Point9D, dx: number, dy: number): Point9D {
//   p[0] += dx;
//   p[1] += dy;
//   return p;
// }

//! return a new tuple instead of modifying the existing one
function move(p: Point9D, dx: number, dy: number): Point9D {
  return [p[0] + dx, p[1] + dy];
}

move([0, 0], 1, 1); // [1, 1]

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Double assertion
type Point1123D = {
  x: number;
  y: number;
}

type Point1231D = {
  x: number;
  y: number;
  z: number;
}

type Person9 = { name: string };

let point112: Point1123D = { x: 10, y: 20 };
let point123: Point1231D = { x: 10, y: 20, z: 30 };
let person10: Person9 = { name: 'Alice' };
let tempPoint: Point1123D = { x: 10, y: 20 };

point112 = point123;
// point123 = point112 //* Error as the types are not compatible
point123 = point112 as Point1231D; // double assertion

tempPoint = person10 as unknown as Point1123D; // double assertion

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Const assertions

const king = 'elvis'
// king = 'presley' //* Error

const upper = king.toUpperCase(); // 

const dave = {
  name: 'Dave',
  age: 30,
  role: 'Developer',
  skills: ['TypeScript', 'JavaScript']
}

// dave = 'Dave'; //* Error
dave.name = 'David'; // works
dave.skills.push('React'); // works

// use the const assertion to prevent the object from being modified
const dave1 = {
  name: 'Dave',
  age: 30,
  role: 'Developer',
  skills: ['TypeScript', 'JavaScript']
} as const;
// prevent the object from being modified

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! This parameter properties
// It must be the first parameter in the constructor
function double(this: { value: number }) {
  this.value = this.value * 2;
}

const valid = {
  value: 10,
  double
}

valid.double();

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Generics Constraints

function addFullName<T>(obj: T): T {
  return {
    ...obj
  }
}

// Adding Generics Constraints
function addFullName1<T extends { firstName: string, lastName: string }>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
}

const fullObj = addFullName1({ firstName: 'Alice', lastName: 'Doe' });
console.log(fullObj.fullName); // Alice Doe
console.log(fullObj.firstName); // Alice
console.log(fullObj.lastName); // Doe

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Typeof type operator

const center = { x: 0, y: 0, z: 0 };

// Generate a type alias from the center object
type Point2 = typeof center;

// later
const unit1: Point2 = {
  x: center.x,
  y: center.y,
  z: center.z,
}

// Create a type alias from an object
const personResponse = {
  name: 'Alice',
  email: 'hola@hola.com',
  firstName: 'test',
  lastName: 'test-1'
}

type PersonResponse = typeof personResponse;

function processResponse(response: PersonResponse) {
  console.log(response.name);
  console.log(response.email);
}

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Lookup types
type Person6 = {
  name: string;
  age: number;
  occupation: string;
}

const person2: Person6 = {
  name: 'Alice',
  age: 30,
  occupation: 'Engineer'
}

type PersonProperty = keyof Person6;

function getProperty(obj: Person6, prop: PersonProperty) {
  return obj[prop];
}

const name = getProperty(person2, 'name'); // 'Alice'
const age = getProperty(person2, 'age'); // 30
const occupation = getProperty(person2, 'occupation'); // 'Engineer'

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Keyof type operator
type Person8 = {
  name: string;
  age: number;
  location: string;
}

const john: Person8 = {
  name: 'John',
  age: 30,
  location: 'USA'
}

function getLog(obj: any, kew: string) {
  const value = obj[kew];
  console.log(`Getting, ${kew}, ${value}`);
  return value
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

function getLog1(obj: Person8, key: keyof Person8) { 
  const value = obj[key];
  console.log(`Getting, ${key}, ${value}`);
  return value;
}

const location1 = getLog1(john, 'location'); // USA

// make it more generic
function getLog2<Obj, key extends keyof Obj>(obj: Obj, key: key) {
  const value = obj[key];
  console.log(`Getting, ${String(key)}, ${value}`);
  return value;
}

const age3 = getLog2(john, 'age'); // 30

function setLog<Obj, key extends keyof Obj>(obj: Obj, key: key, value: Obj[key]) {
  console.log(`Setting: `, key, value);
  obj[key] = value;
}

setLog(john, 'age', 31); // Setting: age 31

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Conditional types

type IsNumber<T> = T extends number ? 'number' : 'other';

const isNumber = (value: unknown) => {
  return typeof value === 'number' ? 'number' : 'other';
}

type withNumber = IsNumber<number>; // number
type withString = IsNumber<string>; // other

const withNumber = isNumber(10); // number
const withString = isNumber('hello'); // other

// use Cases
export type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' : 'object';

function typeName<T>(t: T): TypeName<T> { 
  return typeof t as TypeName<T>;
}

const str1 = typeName('hello'); // string
const num = typeName(10); // number
const bool = typeName(true); // boolean
const undef = typeName(undefined); // undefined
const func = typeName(() => { }); // function
const obj = typeName({}); // object

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Conditional types with unions and never

function error(message: string): never {
  throw new Error(message);
}

// not allowed
// const notAllowed: never = 'hello'; // Error
const allowed: never = error('Something went wrong');
// const example: string = error('Something went wrong');

type Verbose = string | never;
type Concise = string;

// distributions of unions and conditional types
export type NoEmpty<T> = T extends null | undefined ? never : T;

type Example = NoEmpty<string | null>; // string

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! infer keyword and ReturnType<T>

type IsArray<T> = T extends Array<infer Member> ? 'array' : 'other';

type ArrayType = IsArray<string[]>; // array
type withNoArray = IsArray<string>; // other

type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

type UnboxedStringArray = UnboxArray<string[]>; // string
type UnboxedNumberArray = UnboxArray<number[]>; // number
type AnythingElse = UnboxArray<string>; // string

export function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`
  }
}

type ReturnType<T> = T extends (...args: any) => infer R ? R : never;

type Person10 = ReturnType<typeof createPerson>;

function logPerson2(person: Person10) {
  console.log(
    'Person:',
    person.firstName,
    person.lastName,
    person.fullName
  )
}

// Create it with less code
function logPerson10(person: ReturnType<typeof createPerson>) {
  console.log(
    'Person:',
    person.firstName,
    person.lastName,
    person.fullName
  )
}


// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Mapped types

export type Point10 = {
  x: number;
  y: number;
  z: number;
}

// To avoid duplication we can use mapped types
type ReadOnlyPoint = {
  [Item in 'x'| 'y'| 'z']: number
}

// add modifiers to the properties
type OptionalPoint = {
  [Item in 'x' | 'y' | 'z']?: number
}

// add modifiers to the properties readonly
type ReadonlyPoint1 = {
  readonly [Item in 'x' | 'y' | 'z']: number
}

// create a more generic type
type ReadOnlyPointType<T> = {
  readonly [Item in keyof T]: T[Item]
}

const center2: ReadOnlyPointType<Point10> = {
  x: 0,
  y: 0,
  z: 0
}

// using the default mapped type
const center3: Readonly<ReadonlyPoint1> = {
  x: 0,
  y: 0,
  z: 0,
}

const center1: ReadOnlyPoint = {
  x: 0,
  y: 0,
  z: 0
}

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Mapped Types modifiers

export type Point20 = {
  readonly x: number;
  y?: number
}

// Utility types Mapped
export type Mapped<T> = {
  readonly [P in keyof T]: T[P]
}
// you can make it optional by adding the ? sign

export type Result1 = Mapped<Point20>;

// Create a utitlily type to pass the data and mark as optional if needed
export type Partial<T> = {
  [P in keyof T]?: T[P]
}

// useful example
export class State<T> {
  constructor(public current: T) { }

  update(next: Partial<T>) {
    this.current = {...this.current, ...next}
  }
}

const state = new State({ x: 0, y: 0 })
// Now we can pass only the needed values to be updated
state.update({ y: 35 })
state.update({ x: 10, y: 123 })

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Template literal types

let templateLiteral: `Example ${string}`;
templateLiteral = 'Example hello';
templateLiteral = 'Example world';
// templateLiteral = 'hola Example 123'; //* Error

type CSSValue = | number | string;

function size(input: CSSValue, unit: 'px' | 'em' | 'rem') {
  return `${input}${unit}`;
}

type Size1 = | 'small' | 'medium' | 'large';
type Color = | 'primary' | 'secondary';
type Style = `${Size1}-${Color}`;

function applyStyle(style: Style) {
  // apply the style
}

// applyStyle('color: red;'); //* Error 
applyStyle('small-primary');

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
// ! Partial<T>

export type Partial1<T> = {
  [P in keyof T]?: T[P]
}

type Point22 = {
  x: number;
  y: number;
}

type PartialPoint = Partial1<Point22>;

class State1<T> {
  constructor(public current: T) { }

  update(next: Partial1<T>) {
    this.current = { ...this.current, ...next }
  }
}

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Required<T>

export type Required<T> = {
  [P in keyof T]-?: T[P]
  // add the -? modifier to the property will make it required
}

type Point23 = {
  x: number;
  y?: number;
}

type RequiredPoint = Required<Point23>;

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Readonly<T>

export type Readonly2<T> = {
  readonly [P in keyof T]: T[P]
}

type Point24 = {
  x: number;
  y: number;
}

type ReadonlyPoint2 = Readonly2<Point24>;

const point25: ReadonlyPoint2 = { x: 10, y: 20 };
// point25.x = 20; //* Error

function makeReadOny<T>(obj: T): Readonly<T> {
  return Object.freeze({...obj})
}

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Record<T, K>

type Persons = Record<string, { name: string, role: string }>;

const persons: Persons = {};

persons['alice'] = { name: 'Alice', role: 'Developer' };
persons['bob'] = { name: 'Bob', role: 'Designer' };

type Roles = 'admin' | 'owner';
let peopleWithRoles: Record<Roles, string[]> = {
  admin: ['Alice', 'Bob'],
  owner: ['Charlie']
};

const admins: string[] = peopleWithRoles.admin;

type Pages = Record<'home' | 'about' | 'contact', { id: string, title: string }>;

const pages: Pages = {
  home: { id: 'home', title: 'Home' },
  about: { id: 'about', title: 'About' },
  contact: { id: 'contact', title: 'Contact' },
}

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Autocomplete literals union types

type Padding = 'small' | 'medium' | 'large';

function getPadding(padding: Padding) {
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

let padding: Padding = 'small';
padding = 'medium';

// allow the user to enter any value while still providing autocomplete

type Padding1 = 'small' | 'medium' | 'large' | ( string & {});

let padding1: Padding1 = 'small';
padding1 = 'medium';
padding1 = 'large';

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Undefined vs Optional

type ExampleOptional = {
  name?: string;
}


let optional: ExampleOptional;

optional = { name: 'Alice' }; // Property "name" is present with a value
optional = { name: undefined }; // Property "name" is present with a value of undefined
optional = {}; // Property "name" is not present

type ExampleUnion = {
  name: string | undefined;
}


let union: ExampleUnion;
union = { name: 'Alice' }; // Property "name" is present with a value
union = { name: undefined }; // Property "name" is present with a value of undefined
// union = {}; // Error: Property "name" is required

// Using it with functions
function logName(name?: string) {
  console.log(name);
}

logName('Alice'); // Alice

logName(undefined);
// logName(); // undefined

function logName1(name: string | undefined) {
  console.log(name);
}

logName1('Alice'); // Alice
logName1(undefined); // undefined
// logName1(); // undefined //@ Error

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Satisfies the operator

type Color1 = ColorString | ColorRGB;
type ColorString = 'red' | 'green' | 'blue';
type ColorRGB = [ r: number, g: number, b: number ];

type Theme = Record<string, Color1>;

const theme: Theme = {
  primary: 'red',
  secondary: [0, 255, 0],
}

const theme1 = {
  primary: 'red',
  secondary: [0, 255, 0],
  tertiary: 'red'
} satisfies Theme;

const [ r, g, b] = theme.secondary;

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Property key

const str11: string = 'key'
const num11: number = 123;
const sym: symbol = Symbol('key');

const valid1 = {
  [str11]: 'value',
  [num11]: 'value',
  [sym]: 'value',
}

// const obj1 = {}

// const invalid = {
//   [obj1]: 'value'
// }

// Using the built-in PropertyKey type
let example1: PropertyKey;
example1 = str11;
example1 = num11;
example1 = sym;

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! ThisType<T>

type Math = {
  double(): void;
  half(): void;
}

export const math: Math = {
  double(this: { value: number }) { 
    this.value *= 2;
  },
  half(this: { value: number }) { 
    this.value /= 2;
  }
}

const obj1 = { value: 10, ...math };
obj1.double();

obj1.half();

// using the ThisType<T> utility type
type Math1 = ThisType<{ value: number }>;

export const math1: Math1 = {
  double() {
    this.value *= 2;
  },
  half() {
    this.value /= 2;
  }
}

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Awaited<T>


// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! String manipulation Utilities

type uppercase = Uppercase<'hello'>; // HELLO
type lowercase = Lowercase<'HELLO'>; // hello
type capitalize = Capitalize<'hello'>; // Hello
type uncapitalize = Uncapitalize<'Hello'>; // hello

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Mapped Types as Clauses

type State2 = {
  name: string;
  age: number;
}

type Setters = {
  [P in keyof State2]: (value: State2[P]) => void
}

type SetPropery<K extends string> = `set${Capitalize<K>}`;
type GetPropery<K extends string> = `get${Capitalize<K>}`;

type name = SetPropery<'name'>; // setName
type age = GetPropery<'age'>; // getAge

// *-*-*-*-*-*-*-*-*-*-*-**-*-*-*-*
//! Unions and Intersection
export type Name = { name: string }
export type Age = { age: number }

export type Union = Name | Age;
export type Intersection = Name & Age;

const name20 = { name: 'Alice' };
const age20 = { age: 30 };
const nameAndAge = { name: 'James', age: 30 };