/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName: string = `Nadia Putri`
const PremiumMember: string = `Premium`
const roomAvailable: boolean = true

if (roomAvailable) {
    if (PremiumMember == `VVIP`) {
        console.log(`${customerName} receive a free room upgrade and free breakfast`)
    } else if(PremiumMember == `Premium`){
        console.log(`${customerName} receive a free room upgrade only`)
    }else {
        console.log(`${customerName} receive the reserved room only`)
    }
} else {

    if (PremiumMember == `VVIP`) {
        console.log(`${customerName} are placed on the priority waiting list`)
    } else {
        console.log(`${customerName} are informed that no rooms are available`)
    }
}