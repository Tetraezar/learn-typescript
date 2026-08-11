/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
type Student = {name: string, present:boolean}
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];


function printAttendanceReport (arr: Student[]) {
    let totalPresent = 0
    let totalAbsent = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].present) {
            totalPresent++
        } else {
            totalAbsent++
            console.log(`Names of absent students ${arr[i].name}`)
        }
    }
    console.log(`Total Present: ${totalPresent}`)
    console.log(`Total Absent: ${totalAbsent}`)
}

printAttendanceReport(attendances)