/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 *
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type enrollmentsinfo= {
    student: String,
    course: String,
    completed: boolean,
    score: number,
    duration: number
}

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function CompletedEnrollment(enrollment: enrollmentsinfo[]) {
    let completedenrollment: number = 0
    for (let i = 0; i < enrollment.length; i++) {
        if (enrollment[i].completed) {
            completedenrollment++
        }        
    }
    return completedenrollment
}

function IncompletedEnrollment(enrollment: enrollmentsinfo[]) {
    let incompletedenrollment: number = 0
    for (let i = 0; i < enrollment.length; i++) {
        if (enrollment[i].completed == false) {
            incompletedenrollment++
        }        
    }
    return incompletedenrollment
}

function CompletionPercentage(enrollment: enrollmentsinfo[]) {
    let completionpercentage = CompletedEnrollment(enrollment) / enrollment.length * 100
    
    return completionpercentage
}

function HighestScore(enrollment: enrollmentsinfo[]) {
    let highestscore: number = enrollment[0].score
    for (let i = 0; i < enrollment.length; i++) {
        if (enrollment[i].score >= highestscore) {
            highestscore = enrollment[i].score
        }        
    }
    return highestscore
}

function LowestScore(enrollment: enrollmentsinfo[]) {
    let lowestscore: number = enrollment[0].score
    for (let i = 0; i < enrollment.length; i++) {
        if (enrollment[i].score <= lowestscore) {
            lowestscore = enrollment[i].score
        }        
    }
    return lowestscore
}

function AverageScore(enrollment: enrollmentsinfo[]) {
    let totalscore: number = 0
    for (let i = 0; i < enrollment.length; i++) {
        totalscore += enrollment[i].score
    }

    const averagescore: number = totalscore / enrollment.length
    return averagescore
}

function StudentsPassingScores(enrollment: enrollmentsinfo[]) {
    let studentspassingscore: String[] = []
    for (let i = 0; i < enrollment.length; i++) {
        if (enrollment[i].score >= 75) {
            studentspassingscore.push(enrollment[i].student)
        }
    }

    return studentspassingscore
}

function StudentsPerCourse(enrollment: enrollmentsinfo[], course: String) {
    let studentpercourse: number = 0
    for (let i = 0; i < enrollment.length; i++) {
        if (enrollment[i].course == course) {
            studentpercourse++
        }        
    }
    return studentpercourse
}

function AverageScorePerCourse(enrollment: enrollmentsinfo[], course: String) {
    let totalscorepercourse: number = 0
    for (let i = 0; i < enrollment.length; i++) {
        if (enrollment[i].course == course) {
            totalscorepercourse += enrollment[i].score
        }        
    }
    const studentPerCourse = StudentsPerCourse(enrollment, course)
    const averagestudentpercourse = totalscorepercourse / studentPerCourse 
    return averagestudentpercourse
}

function TotalLearningHours(enrollment: enrollmentsinfo[]) {
    let totallearninghours: number = 0
    for (let i = 0; i < enrollment.length; i++) {
            totallearninghours += enrollment[i].duration
    }

    return totallearninghours
}

function AverageLearningHours(enrollment: enrollmentsinfo[]) {

    const averagetotallearninghours = TotalLearningHours(enrollment) / enrollment.length
    return averagetotallearninghours
}

function PrintCompletionStatistics(enrollment: enrollmentsinfo[]) {
    console.log(`Completion Statistics: `)
    console.log(`Total enrollment: ${enrollment.length}`)
    console.log(`Completed enrollment: `, CompletedEnrollment(enrollment))
    console.log(`Incomplete enrollment: `, IncompletedEnrollment(enrollment))
    console.log(`Completion percentage: `, CompletionPercentage(enrollment), `%`)
    console.log(``)
}

function PrintAcademicStatistics(enrollment: enrollmentsinfo[]) {
    console.log(`Academic Statistics:`)
    console.log(`Highest score: `, HighestScore(enrollment))
    console.log(`Lowest score: `, LowestScore(enrollment))
    console.log(`Average score: `, AverageScore(enrollment))
    console.log(`Student with passing score: `, AverageScore(enrollment))
    console.log(``)
}

function PrintCourseStatistics(enrollment: enrollmentsinfo[]) {
    console.log(`Course Statistics:`)
    console.log(`Number of students enrolled in TypeScript course: `, StudentsPerCourse(enrollment, `TypeScript`))
    console.log(`Number of students enrolled in Database course: `, StudentsPerCourse(enrollment, `Database`))
    console.log(`Number of students enrolled in Backend course: `, StudentsPerCourse(enrollment, `Backend`))
    console.log(`Average of students enrolled in TypeScript course: `, AverageScorePerCourse(enrollment, `TypeScript`))
    console.log(`Average of students enrolled in Database course: `, AverageScorePerCourse(enrollment, `Database`))
    console.log(`Average of students enrolled in Backend course: `, AverageScorePerCourse(enrollment, `Backend`))
    console.log(``)
}

function PrintLearningstatistics(enrollment: enrollmentsinfo[]) {
    console.log(`Learning Statistics:`)
    console.log(`Total learning hours: `, TotalLearningHours(enrollment))
    console.log(`Average learning duration: `, AverageLearningHours(enrollment))
}

PrintCompletionStatistics(enrollments)
PrintAcademicStatistics(enrollments)
PrintCourseStatistics(enrollments)
PrintLearningstatistics(enrollments)