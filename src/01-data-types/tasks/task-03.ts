/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type studentData = {
    studentID: String
    fullName: String
    age: number
    status: String
}

const Student1: studentData = {
    studentID: `001`,
    fullName: `Fatih lintang adzhabi`,
    age: 17,
    status: `Active student`
}
const Student2: studentData = {
    studentID: `002`,
    fullName: `Okka adelard syahbarr`,
    age: 17,
    status: `Active student`
}
const Student3: studentData = {
    studentID: `003`,
    fullName: `Prabu pranedya putra firdaus putra agelar`,
    age: 17,
    status: `Active student`
}

console.log(`Student 1`)
console.log(`Student ID: ${Student1.studentID}`)
console.log(`Student Name: ${Student1.fullName}`)
console.log(`Student Age: ${Student1.age}`)
console.log(`Student Status: ${Student1.status}`)

console.log(`Student 2`)
console.log(`Student ID: ${Student2.studentID}`)
console.log(`Student Name: ${Student2.fullName}`)
console.log(`Student Age: ${Student2.age}`)
console.log(`Student Status: ${Student2.status}`)

console.log(`Student 3`)
console.log(`Student ID: ${Student3.studentID}`)
console.log(`Student Name: ${Student3.fullName}`)
console.log(`Student Age: ${Student3.age}`)
console.log(`Student Status: ${Student3.status}`)
