//Basic Types
let id: number = 5
let company: string = "Sofka"
let isDone: boolean = true
let x: any = "Hello"
    x = 5;


let idNumbers: number[] = [1,2,3,4,5];
let array: any[] = [1, "sofka", true]
    array = [1, false, "Tech"]


// Tuple
let worker: [string, string, number] = ["manuel", "pineda", 37]


// Tuple array
let member: [number, string][]
    member = [
        [1, "juan"],
        [2, "manuel"],
        [3, "maria"]
    ]


// Union
let passport: string | number
    passport = 5;
    passport = "5"


// Enums
enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "Right"
}


// Objects
type User = {
    id: number,
    name: string
}


const user: User = {
    id: 1,
    name : "manuel"
}


// Type assertion
let idNumber: any
    idNumber = 5


let customerId = idNumber as string
let clientId = <number>idNumber


// Functions
const addNumber = (num1: number, num2: number) : number => {
    return num1 + num2;
}

const printMessage = (message: string | number): void => {
    console.log(message)
}


// Interface with objects
interface PersonInterface {
    readonly id: number,
    name: string,
    age?: number //This parameter is optional adding the question mark "?"
}

const person : PersonInterface = {
    id: 1,
    name: "manuel"
}


// Interface with functions
interface MathFunc {
    (x: number, y: number) : number
}
const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;
const mult: MathFunc = (X, Y) => X*Y;


// Clases
class Person {
    private id: number      // Also can be "public" or "protected"
    private name: string

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        console.log("New person created!")
    }
    register(): string {
        return `${this.name} is now registered!`
    }
}
const newPerson = new Person(1, "manuel");


// Subclasses
class Employee extends Person {
    position: string;

    constructor(id: number, name: string, position: string){
        super(id, name);
        this.position = position;
    }
}
const employee = new Employee(1, "manuel", "developer")
console.log(employee.position);
employee.register();


// Interface with clases
interface SessionInterface {
    id: number
    name: string
    register(): string
}

// Class that implements an interface
class Session implements SessionInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    register(): string {
        return `${this.name} has now a session!`
    }
}


// Generics
const getArray = <T>(items: T[]): T[] => {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
// numArray.push("berry")   Not possible because the generic!
let strArray = getArray<string>(["apple", "banana", "orange"])
// numArray.push(4)   Not possible because the generic!
