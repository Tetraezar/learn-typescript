/**
 * An airline automatically determines a passenger's check-in status.
 * Business Rules
 * Step 1
 * If the passenger has not checked in online, display:
 * "Please complete online check-in first.""
 * 
 * Otherwise, continue.
 * Step 2
 * If baggage weight exceeds 20 kg:
 * - Business Class → Extra baggage allowed.
 * - Economy Class → Additional baggage fee required.
 * 
 * Otherwise:
 * Proceed to boarding pass printing.
 * 
 * Passenger Information
 * | Information     | Value         |
 * | --------------- | ------------- |
 * | Passenger       | Fajar Nugroho |
 * | Online Check-in | Yes           |
 * | Cabin Class     | Economy       |
 * | Baggage Weight  | 24 kg         |
 * 
 * Student Tasks
 * 1. Declare all variables.
 * 2. Implement the airline decision process.
 * 3. Display the correct message.
 */

const Passenger: string = `Fajar Nugroho`
const OnlineCheckIn: boolean = true
const CabinClass: string = `Economy`
const BaggageWeight: number = 24
let checkOnline: String = ``

if (OnlineCheckIn) {
    checkOnline = `done`
    if (checkOnline == `done` && BaggageWeight < 20) {
        console.log(`${Passenger} Proceed to boarding pass printing`)
    } else {
        if (CabinClass == `Bussiness`) {
            console.log(`${Passenger} Extra baggage allowed`)  
        } else{
            console.log(`${Passenger} Additional baggage fee required`)  
        }
    }
} else{
    console.log(`${Passenger} Please complete online check-in first`)
}
