var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Basic Types
var id = 5;
var company = "Sofka";
var isDone = true;
var x = "Hello";
x = 5;
var idNumbers = [1, 2, 3, 4, 5];
var array = [1, "sofka", true];
array = [1, false, "Tech"];
// Tuple
var worker = ["manuel", "pineda", 37];
// Tuple array
var member;
member = [
    [1, "juan"],
    [2, "manuel"],
    [3, "maria"]
];
// Union
var passport;
passport = 5;
passport = "5";
// Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "up";
    Direction["Down"] = "down";
    Direction["Left"] = "left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
var user = {
    id: 1,
    name: "manuel"
};
// Type assertion
var idNumber;
idNumber = 5;
var customerId = idNumber;
var clientId = idNumber;
// Functions
var addNumber = function (num1, num2) {
    return num1 + num2;
};
var printMessage = function (message) {
    console.log(message);
};
var person = {
    id: 1,
    name: "manuel"
};
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
var mult = function (X, Y) { return X * Y; };
// Clases
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
        console.log("New person created!");
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered!");
    };
    return Person;
}());
var newPerson = new Person(1, "manuel");
// Subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, position) {
        var _this = _super.call(this, id, name) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var employee = new Employee(1, "manuel", "developer");
console.log(employee.position);
employee.register();
// Class that implements an interface
var Session = /** @class */ (function () {
    function Session(id, name) {
        this.id = id;
        this.name = name;
    }
    Session.prototype.register = function () {
        return "".concat(this.name, " has now a session!");
    };
    return Session;
}());
// Generics
var getArray = function (items) {
    return new Array().concat(items);
};
var numArray = getArray([1, 2, 3, 4, 5]);
// numArray.push("berry")   Not possible because the generic!
var strArray = getArray(["apple", "banana", "orange"]);
// numArray.push(4)   Not possible because the generic!
