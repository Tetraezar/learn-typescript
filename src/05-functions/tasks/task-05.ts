/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

 
const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  let highestscore: number = scores[0]
  for (let i = 0; i < scores.length; i++) {
    if (highestscore < scores[i]) {
        highestscore = scores[i]
      }    
  }
  return highestscore
}

function findLowestScore(scores: number[]): number {
  let lowestscore: number = scores[0]
  for (let i = 0; i < scores.length; i++) {
    if (lowestscore > scores[i]) {
        lowestscore = scores[i]
      }    
  }
  return lowestscore
}

function calculateAverage(scores: number[]): number {
  let totalscore: number = 0
  for (let i = 0; i < scores.length; i++) {
    totalscore += scores[i] 
  }
  const avgScore: number = totalscore / scores.length
  return avgScore
}

function countPassedStudents(scores: number[]): number {
  let countpassedstudents: number = 0
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 75) {
      countpassedstudents++
    }    
  }
  return countpassedstudents
}

console.log(`Highest value: `, findHighestScore(scores))
console.log(`Lowest value: `, findLowestScore(scores))
console.log(`Average value: `, calculateAverage(scores))
console.log(`Passed students: `, countPassedStudents(scores))