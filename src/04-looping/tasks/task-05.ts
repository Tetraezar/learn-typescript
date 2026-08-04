/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

const scoreslength: number = scores.length
let totalscore: number = 0
let gold: number = 0
let silver: number = 0
let bronze: number = 0
let nomedal: number = 0
for (let i = 0; i < scoreslength; i++) {
    if (scores[i] >= 95) {
        gold ++
    } else if (scores[i] >= 85) {
        silver ++
    } else if (scores[i] >= 75) {
        bronze ++
    } else {
        nomedal ++
    }
    totalscore += scores[i]
}

const averagescore: number = totalscore / scoreslength

console.log(`Gold medal winners: ${gold}`)
console.log(`silver medal winners: ${silver}`)
console.log(`bronze medal winners: ${bronze}`)
console.log(`student with no medal winners: ${nomedal}`)
console.log(`Average competition score: ${averagescore}`)