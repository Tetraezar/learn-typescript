/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     | 
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */


function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    // implementation
    for (let i = 0; i < scores.length; i++) {
        callback(scores[i])        
    }
}

function StudentPassed(score: number) {
    // implementation
    if (score >= 70) {
        console.log(score, `passed`)
    } else {
        console.log(score, `not passed`)
    }
}

function showGrade(score: number) {
    // implementation
    let grade: String = ``
    if (score >= 90) {
        grade = `A`
    } else if (score >= 80) {
        grade = `B`
    } else if (score >= 70) {
        grade = `C`
    } else {
        grade = `D`
    }
    console.log(`Score: ${score}, grade: ${grade}`)
}

function plusFive(score: number) {
    console.log(score, `+ 5 :`, score + 5)
}

function ExcellentScore(score: number) {
    if (score + 5 > 90) {
        console.log(`Score`, score + 5, `: Excellent`)
    } else {
        console.log(`Score`, score + 5, `: Reguler`)
    }
}

// implementation of callback function
console.log(`Student Who Passed and Not :`)
processScores(scores, StudentPassed)

console.log(`Grades : `)
processScores(scores, showGrade)

console.log(`Score After Added Five :`)
processScores(scores, plusFive)

console.log(`Excellent Score and Regular Score :`)
processScores(scores, ExcellentScore)