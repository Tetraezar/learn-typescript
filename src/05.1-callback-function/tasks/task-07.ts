/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

type student= {
    name: String,
    score: number,
    attendance: number
}

type STATUS = `PASS` | `FAIL` 
type recommendation = `Excellent` | `Good` | `Improve Attendance` | `Improve Academic Performance`
type STUDENT_SUCCESFULL= student & { 
    Status: STATUS, 
    Recommendation: recommendation
    }

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function StudentSuccesfull(selectedStudent: student): STUDENT_SUCCESFULL {
    let status:STATUS = `FAIL`

    if (selectedStudent.score >= 75 && selectedStudent.attendance >= 90) {
        status = `PASS`
    }

    let recommendation: recommendation = `Improve Academic Performance`
    if (selectedStudent.score >= 90 && selectedStudent.attendance >= 90) {
        recommendation = `Excellent`
    } else if (selectedStudent.score >= 75 && selectedStudent.attendance >= 90) {
        recommendation = `Good`
    } else if (selectedStudent.score >= 75 && selectedStudent.attendance < 90) {
        recommendation = `Improve Attendance`
    }
    

    return {
        ...selectedStudent,
        Status: status,
        Recommendation: recommendation
    }
}

function processStudents<T>(
    arr: student[],
    callback: (student: student) => T
): T[] {
    let result: T[] = []

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }

    return result
}

const studentAcademicInfo = processStudents(students, StudentSuccesfull)

console.log(studentAcademicInfo)