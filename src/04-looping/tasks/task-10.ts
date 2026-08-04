/**
 * An LMS stores assignment submission information on submissions below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];

let submit: number = 0
let notSubmit: number = 0
let passed: number = 0
let revise: number = 0
let totalscore: number = 0

for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].submitted) {
        submit++
    } else{
        console.log(`Student who did not submit ${submissions[i].student}`)
        notSubmit++
    }

    if (submissions[i].score >= 75) {
        passed++
    } else {
        console.log(`Student who must revise ${submissions[i].student}`)
        revise++
    }
    totalscore += submissions[i].score

}

const averageScore: number = totalscore / submissions.length

console.log(`students who submitted their assignment: ${submit}`)
console.log(`students who did not submitted their assignment: ${notSubmit}`)
console.log(`students who passed: ${passed}`)
console.log(`students who must revise: ${revise}`)
console.log(`class average score: ${averageScore}`)