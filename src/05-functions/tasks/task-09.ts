/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

type PatientsInfo = {
    id: String,
    name: String,
    age: number,
    department: String,
    admitted: boolean,
    bill: number
}
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function admittedPatients (patient: PatientsInfo[]) {
    let admittedpatients: number = 0
    for (let i = 0; i < patient.length; i++) {
        if (patient[i].admitted) {
            admittedpatients++
        }        
    }
    return admittedpatients
}

function dischargedPatients (patient: PatientsInfo[]) {
    let dischargedpatients: number = 0
    for (let i = 0; i < patient.length; i++) {
        if (patient[i].admitted == false) {
            dischargedpatients++
        }        
    }
    return dischargedpatients
}

function PatientsPerDepart (patient: PatientsInfo[], departmentName: String) {
    let PatientsPerDepartmen: number = 0
    for (let i = 0; i < patient.length; i++) {
        if (patient[i].department == departmentName) {
            PatientsPerDepartmen++
        }        
    }
    return PatientsPerDepartmen
}

function HighestBill (patient: PatientsInfo[]) {
    let highestbill = patient[0].bill
    for (let i = 0; i < patient.length; i++) {
        if (patient[i].bill > highestbill) {
            highestbill = patient[i].bill
        }        
    }
    return highestbill
}

function LowesttBill (patient: PatientsInfo[]) {
    let lowestbill = patient[0].bill
    for (let i = 0; i < patient.length; i++) {
        if (patient[i].bill < lowestbill) {
            lowestbill = patient[i].bill
        }        
    }
    return lowestbill
}

function AverageBill (patient: PatientsInfo[]) {
    let totalbill: number = 0
    for (let i = 0; i < patient.length; i++) {
        totalbill += patient[i].bill   
    }
    let averagebill: number = totalbill / patient.length

    return averagebill
}

function TotalRevenue (patient: PatientsInfo[]) {
    let totalrevenue: number = 0
    for (let i = 0; i < patient.length; i++) {
        totalrevenue += patient[i].bill   
    }
    
    return totalrevenue
}

function admittedPatientsName (patient: PatientsInfo[]): String[]  {
    const admittedpatientsname: String[] = []
    for (let i = 0; i < patient.length; i++) {
        if (patient[i].admitted) {
            admittedpatientsname.push(patient[i].name)
        }  
    }
    return admittedpatientsname
    
}

function printHospitalReport(patient: PatientsInfo[]) {
    console.log(`Total patients: ${patient.length}`)
    console.log(`Total padmitted atients: `, admittedPatients(patient))
    console.log(`Total discharged atients: `, dischargedPatients(patient))
    console.log(`Number of patients in Pediatrics department: `, PatientsPerDepart(patient, `Pediatrics`))
    console.log(`Number of patients in Cardiology department: `, PatientsPerDepart(patient, `Cardiology`))
    console.log(`Number of patients in Orthopedics department: `, PatientsPerDepart(patient, `Orthopedics`))
    console.log(`Highest hospital bill: `, HighestBill(patient))
    console.log(`Lowest hospital bill: `, LowesttBill(patient))
    console.log(`Average hospital bill: `, AverageBill(patient))
    console.log(`Total hospital revenue: `, TotalRevenue(patient))
    console.log(`Names of admitted patients: `, admittedPatientsName(patient))
}

printHospitalReport(patients)