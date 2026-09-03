/**
 * A teacher has a list of students and their exam scores below.
 * The teacher wants to analyze the exam results.
 * Tasks:
 * 1. Get an array containing only the student names.
 * expected array: ["Andi", "Budi", "Citra", "Deni", "Eka"]
 * 2. Get students who passed. Passing score is >= 70. 
 * expected array: [
 * { name: "Andi", score: 85 },
 * { name: "Citra", score: 91 },
 * { name: "Deni", score: 74 }
 * ]
 * 
 * 3. Find the student named "Citra".
 * 4. Calculate the average score.
 */

type studentPassed = {
  name:String,
  score:number
}
const students = [
  { name: "Andi", score: 85 },
  { name: "Budi", score: 62 },
  { name: "Citra", score: 91 },
  { name: "Deni", score: 74 },
  { name: "Eka", score: 55 },
];

const StudentsName = students.map(students => students.name)
const StudentPassed = students.filter(students => students.score >= 70)
const citra = students.find(student => student.name === "Citra");
let total: number = 0
for (let i = 0; i < students.length; i++) {
  total += students[i].score
}
const AVGscore = total / students.length

console.log(StudentsName)
console.log(StudentPassed)
console.log(`Student name Citra:`, citra);
console.log(AVGscore)
