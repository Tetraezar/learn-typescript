/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let a: number = 0
let b: number = 0
let c: number = 0
let d: number = 0
let totalscore: number = 0


let highestScore = students[0].score;
let lowestScore = students[0].score;

for (let i = 0; i < students.length; i++) {

    if (students[i].score >= 90) {
        a++;
    } else if (students[i].score >= 80) {
        b++;
    } else if (students[i].score >= 70) {
        c++;
    } else {
        d++;
    }

    totalscore += students[i].score;

    if (students[i].score > highestScore) {
        highestScore = students[i].score;
    }

    if (students[i].score < lowestScore) {
        lowestScore = students[i].score;
    }
}

const averageScore = totalscore / students.length;

console.log(`Number of A students: ${a}`);
console.log(`Number of B students: ${b}`);
console.log(`Number of C students: ${c}`);
console.log(`Number of D students: ${d}`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore}`);
