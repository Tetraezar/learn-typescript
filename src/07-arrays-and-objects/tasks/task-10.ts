/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentScores = submissions.map(submission => {
    let correct = 0;

    submission.answers.forEach(answer => {
        const question = questions.find(question => question.id === answer.questionId)

        if (question && question.correctAnswer === answer.answer) {
            correct++;
        }
    })

    return {
        student: submission.student,
        score: correct * 25
    }
})

const studentsAnswer = submissions.map(submission => {
    let correct = 0
    let wrong = 0

    submission.answers.forEach(answer => {
        const question = questions.find(question => question.id === answer.questionId)

        if (question && question.correctAnswer === answer.answer) {
            correct++
        }  else {
            wrong++
        }
    })

    return {
        student: submission.student,
        correct: correct,
        wrong: wrong
    }
})

const scorePerCategory = ["TypeScript", "Array"].map(category => {
    let totalScore = 0
    let totalQuestion = 0

    submissions.forEach(submission => {
        submission.answers.forEach(answer => {
            const question = questions.find(
                question => question.id === answer.questionId
            )

            if (question && question.category === category) {
                totalQuestion++

                if (question.correctAnswer === answer.answer) {
                    totalScore += 25
                }
            }
        })
    })

    return {
        category: category,
        averageScore: totalScore / totalQuestion
    }
})

const totalStudents = studentScores.length

let totalScore = 0

studentScores.forEach(student => {
    totalScore += student.score
})

const averageScore = totalScore / totalStudents
const highestScore = studentScores.reduce((highest, student) =>
    student.score > highest.score ? student : highest
)

const lowestScore = studentScores.reduce((lowest, student) =>
    student.score < lowest.score ? student : lowest
)

const passedStudents = studentScores.filter(
    student => student.score >= 75
).length

const failedStudents = studentScores.filter(
    student => student.score < 75
).length

const passRate = (passedStudents / totalStudents) * 100

const analytics = {
    totalStudents: totalStudents,
    averageScore: averageScore,
    highestScore: highestScore,
    lowestScore: lowestScore,
    passedStudents: passedStudents,
    failedStudents: failedStudents,
    passRate: passRate
}


console.log(`Student Scores:`, studentScores)
console.log(`Student Answer: `, studentsAnswer)
console.log("Score Per Category:", scorePerCategory)
console.log("Final Analytics:", analytics)



