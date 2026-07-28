/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type attendance = {
    employeeID: String
    employeeName: String
    date: String
    checkInTime: String
    checkOutTime: String
    totalWorkingHours: String
    present: boolean
}

const employee1: attendance = {
    employeeID: `001`,
    employeeName: `Fatih firdausa`,
    date: `24-July-2026`,
    checkInTime: `06.15`,
    checkOutTime: `15.15`,
    totalWorkingHours: `9 hours`,
    present: true
}
const employee2: attendance = {
    employeeID: `002`,
    employeeName: `Okka lintang firdausa`,
    date: `24-July-2026`,
    checkInTime: ``,
    checkOutTime: ``,
    totalWorkingHours: ``,
    present: false
}
const employee3: attendance = {
    employeeID: `003`,
    employeeName: `Razan cannavaro`,
    date: `24-July-2026`,
    checkInTime: `06.35`,
    checkOutTime: `15.15`,
    totalWorkingHours: `9 hours`,
    present: true
}

console.log(`employee 1`)
console.log(`Employee ID: ${employee1.employeeID}`)
console.log(`Employee Name: ${employee1.employeeName}`)
console.log(`Date: ${employee1.date}`)
console.log(`Check In Time: ${employee1.checkInTime}`)
console.log(`Check Out Time: ${employee1.checkOutTime}`)
console.log(`Total working hours: ${employee1.totalWorkingHours}`)
console.log(`Present: ${employee1.present}`)

console.log(`employee 2`)
console.log(`Employee ID: ${employee2.employeeID}`)
console.log(`Employee Name: ${employee2.employeeName}`)
console.log(`Date: ${employee2.date}`)
console.log(`Check In Time: ${employee2.checkInTime}`)
console.log(`Check Out Time: ${employee2.checkOutTime}`)
console.log(`Total working hours: ${employee2.totalWorkingHours}`)
console.log(`Present: ${employee2.present}`)

console.log(`employee 3`)
console.log(`Employee ID: ${employee3.employeeID}`)
console.log(`Employee Name: ${employee3.employeeName}`)
console.log(`Date: ${employee3.date}`)
console.log(`Check In Time: ${employee3.checkInTime}`)
console.log(`Check Out Time: ${employee3.checkOutTime}`)
console.log(`Total working hours: ${employee3.totalWorkingHours}`)
console.log(`Present: ${employee3.present}`)
