/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type learningPlatform = {
    student : {
        studentID: String,
        fullName: String,
        gradeLevel: String
    },
    course : {
        courseID: String, 
        courseTitle: String, 
        instructorName: String,
    },
    totalHours: number,
    regisDate: String,
    payment: boolean
}

const students1: learningPlatform = {
    student : {
        studentID: `001`,
        fullName: `Okka kecap`,
        gradeLevel: `67`
    },
    course : {
        courseID: `Course001`, 
        courseTitle: `MTK`, 
        instructorName: `Tetra ezar`,
    },
    totalHours: 67,
    regisDate: `24-July-2026`,
    payment: true
}
const students2: learningPlatform = {
    student : {
        studentID: `002`,
        fullName: `Prabu tomat`,
        gradeLevel: `69`
    },
    course : {
        courseID: `Course069`, 
        courseTitle: `Informatika`, 
        instructorName: `Tetra ezar`,
    },
    totalHours: 969,
    regisDate: `24-July-2026`,
    payment: false
}
const students3: learningPlatform = {
    student : {
        studentID: `003`,
        fullName: `fatih lemon`,
        gradeLevel: `1`
    },
    course : {
        courseID: `Course900`, 
        courseTitle: `Sales lemon`, 
        instructorName: `Tetra ezar`,
    },
    totalHours: 1000,
    regisDate: `24-July-2026`,
    payment: true
}

console.log(`Student 1`)
console.log(`Student ID: ${students1.student.studentID}`)
console.log(`Student Name: ${students1.student.fullName}`)
console.log(`Student Grade Level: ${students1.student.gradeLevel}`)
console.log(`Student Course ID: ${students1.course.courseID}`)
console.log(`Student Course Title: ${students1.course.courseTitle}`)
console.log(`Student Instrutor Name: ${students1.course.instructorName}`)
console.log(`Student Total Hours: ${students1.totalHours}`)
console.log(`Student Registration Date: ${students1.regisDate}`)
console.log(`Student Payment: ${students1.payment}`)

console.log(`Student 2`)
console.log(`Student ID: ${students2.student.studentID}`)
console.log(`Student Name: ${students2.student.fullName}`)
console.log(`Student Grade Level: ${students2.student.gradeLevel}`)
console.log(`Student Course ID: ${students2.course.courseID}`)
console.log(`Student Course Title: ${students2.course.courseTitle}`)
console.log(`Student Instrutor Name: ${students2.course.instructorName}`)
console.log(`Student Total Hours: ${students2.totalHours}`)
console.log(`Student Registration Date: ${students2.regisDate}`)
console.log(`Student Payment: ${students2.payment}`)

console.log(`Student 3`)
console.log(`Student ID: ${students3.student.studentID}`)
console.log(`Student Name: ${students3.student.fullName}`)
console.log(`Student Grade Level: ${students3.student.gradeLevel}`)
console.log(`Student Course ID: ${students3.course.courseID}`)
console.log(`Student Course Title: ${students3.course.courseTitle}`)
console.log(`Student Instrutor Name: ${students3.course.instructorName}`)
console.log(`Student Total Hours: ${students3.totalHours}`)
console.log(`Student Registration Date: ${students3.regisDate}`)
console.log(`Student Payment: ${students3.payment}`)