/**
 * An LMS stores assignment submission data at following Students.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */

import { LargeNumberLike } from "node:crypto";

type studentInfo = {
    student: string
    submitted: boolean
    score: number
}
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function Totalstudent(Students: studentInfo[]) {
    

}

function submitAssign(Students: studentInfo[]): number {
    let submitAssignment: number = 0
    for (let i = 0; i < Students.length; i++) {
        if (Students[i].submitted) {
            submitAssignment++
        }
    }
    return submitAssignment
}
 function MissingAssign(Students: studentInfo[]): number {
    let MissingAssignment: number = 0
    for (let i = 0; i < Students.length; i++) {
        if (Students[i].submitted == false) {
            MissingAssignment++
        }
    }
    return MissingAssignment
}

function passStudent(Students: studentInfo[]): number {
    let passedStudent: number = 0
    for (let i = 0; i < Students.length; i++) {
        if (Students[i].score >= 75) {
            passedStudent++
        } 
    }
    return passedStudent
}

function revisionStudent(Students: studentInfo[]): number {
    let revisionStudent: number = 0
    for (let i = 0; i < Students.length; i++) {
        if (Students[i].score < 75) {
            revisionStudent++
        }
    }
    return revisionStudent
}

function HighestScore(Students: studentInfo[]): number {
    let HighestScore = Students[0].score
    for (let i = 0; i < Students.length; i++) {
        if (Students[i].score > HighestScore) {
            HighestScore = Students[i].score
        }
    }
    return HighestScore
}

function LowestScore(Students: studentInfo[]): number {
    let LowestScore = Students[0].score
    for (let i = 0; i < Students.length; i++) {
        if (Students[i].score < LowestScore) {
            LowestScore = Students[i].score
        }      
    }
    return LowestScore
}

function AverageScore(Students: studentInfo[]): number {
    let Totalscore: number = 0
    for (let i = 0; i < Students.length; i++) {
        Totalscore += Students[i].score
    }  
    const Averagescore: number = Totalscore / Students.length
    return Averagescore
}

function printReport(Students: studentInfo[]) {
    console.log(`Total Students: ${Students.length}`)
    console.log(`Submitted Assignments: `, submitAssign(Students))
    console.log(`Missing Assignments: `, MissingAssign(Students))
    console.log(`Passed Students: `, passStudent(Students))
    console.log(`Students requiring revision: `, revisionStudent(Students))
    console.log(`Average Score: `, AverageScore(Students))
    console.log(`Highest Score: `, HighestScore(Students))
    console.log(`Lowest Score: `, LowestScore(Students))
}

printReport(submissions)