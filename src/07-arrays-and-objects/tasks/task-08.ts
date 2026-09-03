/**
 * A company evaluates employees based on several projects.
 * Tasks:
 * 1. Calculate each employee's average score format {name, averageScore}
 * 2. Find employees whose average score is above 85.
 * 3. Find employees who have at least one project with a score below 80.
 */
const employees = [
    {
        name: "Andi",
        department: "Backend",
        projects: [
            { name: "LMS", score: 90 },
            { name: "Payment", score: 85 },
            { name: "API", score: 95 },
        ],
    },
    {
        name: "Budi",
        department: "Frontend",
        projects: [
            { name: "Dashboard", score: 80 },
            { name: "Landing Page", score: 75 },
        ],
    },
    {
        name: "Citra",
        department: "Backend",
        projects: [
            { name: "LMS", score: 95 },
            { name: "API", score: 88 },
        ],
    },
];

const employeeAverage = employees.map(employee => {
    const totalScore = employee.projects.reduce(
        (total, project) => total + project.score, 0)

    const averageScore = totalScore / employee.projects.length;

    return {
        name: employee.name,
        averageScore: averageScore
    }
})

const above85 = employeeAverage.filter(employee => employee.averageScore > 85)
const below80 = employees.filter(employee => employee.projects.some(project => project.score < 80))

console.log("Average Score:", employeeAverage)
console.log("Above 85:", above85)
console.log("Below 80:", below80)