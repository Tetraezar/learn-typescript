/**
 * A school system needs to store information about people who are part of the school community. 
 * Every person has a name and age.
 * However, students and teachers have different additional information.
 * A student has:
 * - Student ID
 * - Grade
 * 
 * A teacher has:
 * - Employee ID
 * - Subject
 * 
 * Example:
 * Student
 * Name: Kylian Mbappé
 * Age: 17
 * Student ID: ST001
 * Grade: 11
 * 
 * Teacher:
 * Name: Cristiano Ronaldo
 * Age: 38
 * Employee ID: EMP001
 * Subject: Programming
 * 
 * Student Tasks
 * Create a parent class Person with:
 * - name
 * - age
 * - showInfo()
 * 
 * Then create class Student extends Person and class Teacher extends Person
 * Each child class should add its own properties.
 * 
 */
class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    showInfo(): void {
        console.log(`${this.name}, ${this.age} years old`);
    }
}

class Student extends Person {
    constructor(
        name: string,
        age: number,
        public StudentID: string,
        public Grade: number,
    ) {
        super(name, age)
    }

    public showInfo(): void {
        console.log(`Student`)
        console.log(`Name : ${this.name}`)
        console.log(`Age : ${this.age}`)
        console.log(`Student ID : ${this.StudentID}`)
        console.log(`Grade : ${this.Grade}`)
    }
}

class Teacher extends Person {
    constructor(
        name: string,
        age: number,
        public EmployeeID: string,
        public Subject: string,
    ) {
        super(name, age)
    }

    public showInfo(): void {
        console.log(`Teacher`)
        console.log(`Name : ${this.name}`)
        console.log(`Age : ${this.age}`)
        console.log(`Employee ID : ${this.EmployeeID}`)
        console.log(`Subject : ${this.Subject}`)
    }
}

const student = new Student(
    `Kylian Mbappé`,
    17,
    `ST001`,
    11
)

const teacher = new Teacher(
    `Cristiano Ronaldo`,
    38,
    `EMP001`,
    `Programming`
)

student.showInfo()
teacher.showInfo()
