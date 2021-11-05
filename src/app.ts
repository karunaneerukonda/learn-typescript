import { Power,GreatPower } from "./power";

const greetUser = (name: string): string => {
    return "Hello  " + name;
}

console.log(greetUser("Karuna "))
console.log(greetUser("Js"))

const animalName: string = "Lion"
const dayInAWeek: number = 6
const isPass: boolean = true

let tree: string | number = 8
tree = "banana"
let stat: 'pass' | 'fail' = 'pass'
stat = 'fail'


type Progress = 'good' | 'bad'
const workProgress: Progress = "bad"

const learningProgress: Progress = "good"

const fruits: string[] = ["apple", "banana"]
const animals: Array<string> = ["lion", "cat"]
const company = ["foogle", "apple"] as string[]

function Calculator() {
    function add(num1: number, num2: number) {
        return num1 + num2
    }
    function subtract(num1: number, num2: number) {
        return num1 - num2
    }
    function multiply(num1: number, num2: number) {
        return num1 * num2
    }
    function divide(num1: number, num2: number) {
        return num1 / num2
    }
    return { add, sub: subtract, multiply, divide }
}
const calculator = Calculator()
console.log(calculator.add(5, 3))
console.log(calculator.sub(5, 3))

interface IPencil {
    readonly color: string;
    write(msg: string): void
}

class Pencil implements IPencil {
    readonly color: string = "pink";
    public write(msg: string): void {
        console.log(msg)
    }
}
const pencil: Pencil = new Pencil();
console.log(pencil.color)
pencil.write("Iam a pencil")

class Pen extends Pencil {
    static inkColor: string = "black"
}
const pen = new Pen();
pen.write("Iam a Pen")
console.log(Pen.inkColor)

interface Student {
    name: string;
    age: number;
    rollNo?: number;
    isScoreAbove50: boolean;
}
const student: Student = {
    name: "KAruna",
    age: 11,
    rollNo: 23,
    isScoreAbove50: true
}

console.log(student)
const students: Student[] = [
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
]
interface School {
    name: string;
    students: {
        name: string;
        age: number;
        rollNo: number;
        isScoreAbove50: boolean;
    }[]
}

interface SchoolPro {
    name: string;
    students: Student[]
}

const studentPro: SchoolPro["students"] = [{
    name: "KAruna",
    age: 11,
    rollNo: 23,
    isScoreAbove50: true
}]

interface Res<ResponseType> {
    msg: string;
    data: ResponseType
}

const loginResponse: Res<Student> = {

    msg: "Login Successful",
    data: {
        name: "KAruna",
        age: 11,
        rollNo: 23,
        isScoreAbove50: true
    }
}

const forgotResponse: Res<{ email: string }> = {
    msg: "Email sent successfully",
    data: {
        email: "test@test.com"
    }
}
const power : Power = {name: "I hav power"}
const power1 : GreatPower = {name: "I hav power",isGreatPower:true}