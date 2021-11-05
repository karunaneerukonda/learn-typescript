"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var greetUser = function (name) {
    return "Hello  " + name;
};
console.log(greetUser("Karuna "));
console.log(greetUser("Js"));
var animalName = "Lion";
var dayInAWeek = 6;
var isPass = true;
var tree = 8;
tree = "banana";
var stat = 'pass';
stat = 'fail';
var workProgress = "bad";
var learningProgress = "good";
var fruits = ["apple", "banana"];
var animals = ["lion", "cat"];
var company = ["foogle", "apple"];
function Calculator() {
    function add(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }
    function multiply(num1, num2) {
        return num1 * num2;
    }
    function divide(num1, num2) {
        return num1 / num2;
    }
    return { add: add, sub: subtract, multiply: multiply, divide: divide };
}
var calculator = Calculator();
console.log(calculator.add(5, 3));
console.log(calculator.sub(5, 3));
var Pencil = /** @class */ (function () {
    function Pencil() {
        this.color = "pink";
    }
    Pencil.prototype.write = function (msg) {
        console.log(msg);
    };
    return Pencil;
}());
var pencil = new Pencil();
console.log(pencil.color);
pencil.write("Iam a pencil");
var Pen = /** @class */ (function (_super) {
    __extends(Pen, _super);
    function Pen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pen.inkColor = "black";
    return Pen;
}(Pencil));
var pen = new Pen();
pen.write("Iam a Pen");
console.log(Pen.inkColor);
var student = {
    name: "KAruna",
    age: 11,
    rollNo: 23,
    isScoreAbove50: true
};
console.log(student);
var students = [
    {
        name: "KAruna",
        age: 11,
        rollNo: 23,
        isScoreAbove50: true
    }, {
        name: "KAruna",
        age: 11,
        rollNo: 23,
        isScoreAbove50: true
    }, {
        name: "KAruna",
        age: 11,
        rollNo: 23,
        isScoreAbove50: true
    }
];
var studentPro = [{
        name: "KAruna",
        age: 11,
        rollNo: 23,
        isScoreAbove50: true
    }];
var loginResponse = {
    msg: "Login Successful",
    data: {
        name: "KAruna",
        age: 11,
        rollNo: 23,
        isScoreAbove50: true
    }
};
var forgotResponse = {
    msg: "Email sent successfully",
    data: {
        email: "test@test.com"
    }
};
var power = { name: "I hav power" };
var power1 = { name: "I hav power", isGreatPower: true };
