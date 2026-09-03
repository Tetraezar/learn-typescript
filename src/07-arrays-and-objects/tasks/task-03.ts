/**
 * A school has attendance data below.
 * Tasks:
 * 1. Get all student's names who are present
 * expected array: ["Andi","Citra"]
 * 2. Get all students who are present
 * expected array: ["Budi"]
 * 3. Get students who are late
 * expected array: ["Deni"]
 * 4. Generate array that contains {name, status}
 */

const students = [
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
    { id: 4, name: "Deni" },
];

const attendance = [
    { studentId: 1, status: "present" },
    { studentId: 2, status: "absent" },
    { studentId: 3, status: "present" },
    { studentId: 4, status: "late" },
];

const studentPresent = attendance.filter(attendance => attendance.status == `present`).map(attendance => attendance.studentId)
const namePresent = students.filter(students => studentPresent.includes(students.id))
const studentabsent = attendance.filter(attendance => attendance.status == `absent`).map(attendance => attendance.studentId)
const nameabsent = students.filter(students => studentabsent.includes(students.id))
const studentlate = attendance.filter(attendance => attendance.status == `late`).map(attendance => attendance.studentId)
const namelate = students.filter(students => studentlate.includes(students.id))

const studentStatusArray = students
.map(student => {
    const record = attendance.find(attendance => attendance.studentId == student.id)
    return { name: student.name, status: record?.status}
})

console.log(namePresent)
console.log(nameabsent)
console.log(namelate)
console.log(studentStatusArray)