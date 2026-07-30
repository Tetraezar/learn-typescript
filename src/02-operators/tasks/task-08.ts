/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousMeter: number = 25640;
const currentMeter: number = 25892;
const ElectricityPriceperkWh: number = 1650;
const SolarPanelInstalled: boolean = true;
const EnergySavingMode: boolean = false;
const EnergyConsum: number = currentMeter - previousMeter;

const isqualifies = SolarPanelInstalled && EnergyConsum < 300 
&& EnergySavingMode ? `yes` : `no`
const isSolarInstall = SolarPanelInstalled ? 0.2 : 1
const isSavingON = EnergySavingMode ? 0.05 : 0

const electricityBill: number = (EnergyConsum * ElectricityPriceperkWh)
const billAFTRinstall = electricityBill - (electricityBill * isSolarInstall)
const FinalBill = billAFTRinstall - (billAFTRinstall * isSavingON)

console.log(`Total energy consumption: ${EnergyConsum}`)
console.log(`Electricity bill: ${electricityBill}`)
console.log(`Final bill: ${FinalBill }`)
console.log(`Green Energy Program eligibility: ${isqualifies}`)