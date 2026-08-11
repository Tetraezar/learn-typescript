/**
 * A university stores enrollment information at following student
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

type studentInfo = {name: string, major: string, active: boolean}
const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

let activeStudents = 0
let inactiveStudents = 0

function countActiveStudents(students: studentInfo[]): number{
  for (let i = 0; i < students.length; i++) {
    if (students[i].active) {
      activeStudents++
    }
  }
  return activeStudents
}

function countInactiveStudents(students: studentInfo[]): number{
  for (let i = 0; i < students.length; i++) {
    if (students[i].active == false) {
      inactiveStudents++
    }
  }
  return inactiveStudents
}

function countStudentsByMajor(students: studentInfo[], major: string): number{
  let Major:number = 0
  for (let i = 0; i < students.length; i++) {
    if (students[i].major == major) {
      Major++
    }
  }
  return Major
}

function printEnrollmentReport(Students: studentInfo[]){
  console.log(`Total Students: ${students.length}`)
  console.log(`Active Students: `, countActiveStudents(students))
  console.log(`Inactive Students: `, countInactiveStudents(students))
  console.log(`Software Engineering Students: `, countStudentsByMajor(students, `Software Engineering`))
  console.log(`Multimedia Students: `, countStudentsByMajor(students, `Multimedia`))
  console.log(`Networking Students: `, countStudentsByMajor(students, `Networking`))
}

printEnrollmentReport(students)
