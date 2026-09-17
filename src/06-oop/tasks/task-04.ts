/**
 * A company wants to create an employee salary management system.
 * Each employee has:
 * - Employee ID
 * - Name
 * - Position
 * - Basic salary
 * - Performance bonus
 * 
 * for example:
 * | Property     | Value            |
 * | ------------ | ---------------- |
 * | Employee ID  | EMP001           |
 * | Name         | Kevin De Bruyne  |
 * | Position     | Senior Developer |
 * | Basic Salary | Rp12,000,000     |
 * | Bonus        | Rp2,000,000      |
 * 
 * The company does not want employees or other parts of the application to directly modify their salary.
 * Student Tasks
 * - Create class Employee
 * - Use private properties for sensitive data such as:
 *   * private basicSalary: number;
 *   * private bonus: number;
 * - Create methods:
 *   * getBasicSalary()
 *   * setBasicSalary()
 *   * addBonus()
 *   * getTotalSalary()
 *   * showProfile()
 * - Business Rules
 *   * setBasicSalary():
 *     - Salary cannot be negative.
 *     - Salary must be greater than 0.
 *   * addBonus():
 *     - Bonus cannot be negative.
 *   * getTotalSalary():
 *     - basicSalary + bonus
 * - Implement class with object
 */

class Employee {
    constructor(
        public employeeID: String,
        public name: String,
        public position: String,
        private basicSalary: number,
        private bonus: number
    ) {
    }
    public getbasicsalary() {
        console.log(`Basic Salary ${this.basicSalary}`)
    }
    public setbasicsalary(salary: number) {
        if (salary < 0) {
            console.log(`Basic Salary cannot be negative`)
        } else {
            this.basicSalary = salary
        }
    }
    public addBonus(bonusmoney: number) {
        this.bonus = bonusmoney
    }

    public getTotalSalary() {
        console.log(`Total Salary : ${this.basicSalary + this.bonus}`)
    }

    public showProfile() {
        console.log()
    }
}

const employee = new Employee(
    "EMP001",
    "Kevin De Bruyne",
    "Senior Developer",
    12000000,
    0
);

employee.addBonus(2000000);

console.log(employee.getbasicsalary());
console.log(employee.getTotalSalary());