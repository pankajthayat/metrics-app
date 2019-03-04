import {
    averageVelocityPerWeek, averageCycleTime, ProdDevFrequency, successfulDeploys, codeQualityCyclometric,
    codeQualityTechnical, CriticalPostProdDefects, averageCommitmentReliability, unitTestCoverage
} from "./DataForProgramCharts"
import { getMonthName } from "../CommonFunctions/CommonFunctions";
export const forLineChartCycle = (programData = []) => {
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August",
            "September", "October", "November", "December"],
        datasets: [

            {
                label: 'Average Cycle Time',
                data: averageCycleTime(programData),
                backgroundColor: 'transparent',
                borderColor: 'rgba(255, 206, 86, 0.6)',
            },
        ]

    }
}

export const forLineChartVelocity = (programData = []) => {
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August",
            "September", "October", "November", "December"],
        datasets: [

            {
                label: 'Average Velocity/Week',
                data: averageVelocityPerWeek(programData),
                backgroundColor: 'transparent',
                borderColor: 'rgba(153, 102, 255, 0.6)'
            }
        ]

    }
}


export const forBarChart = (programData = []) => {
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August",
            "September", "October", "November", "December"],
        datasets: [
            {
                label: 'Code Complexity',
                data: codeQualityCyclometric(programData),
                backgroundColor: 'rgba(75, 192, 192, 0.6)'

            },
            {
                label: 'Tech Debts',
                data: codeQualityTechnical(programData),
                backgroundColor: 'rgba(153, 102, 255, 0.6)'

            },
            {
                label: 'Post Production Defects',
                data: CriticalPostProdDefects(programData),
                backgroundColor: 'rgba(114, 102, 255, 0.6)'

            }
        ]
    }
}

export const forBarChartFrequency = (programData = []) => {
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August",
            "September", "October", "November", "December"],
        datasets: [

            {
                label: 'Frequency of Deployments',
                data: ProdDevFrequency(programData),
                backgroundColor: 'rgba(255, 206, 86, 0.6)'
            }

        ]
    }
}

export const forPieChartCommitment = (programData = [], value, month) => {
    let text = getMonthName(month);
    if (value == 3) {
        text = "Last 3 Months"
    }
    else if (value == 6) {
        text = "Last 6 Months"
    }
    else if (value == 9) {
        text = "Last 9 Months"
    }
    else if (value == 12) {
        text = "Last 12 Months"
    }
    return {
        labels: [text, ""],
        datasets: [

            {
                label: 'Commitment Reliability',
                data: averageCommitmentReliability(programData, value),
                backgroundColor: ['#808000', 'white'
                ]
            }

        ]
    }
}

export const forPieChartUnitTest = (programData = [], value, month) => {
    let text = getMonthName(month);
    if (value == 3) {
        text = "Last 3 Months"
    }
    else if (value == 6) {
        text = "Last 6 Months"
    }
    else if (value == 9) {
        text = "Last 9 Months"
    }
    else if (value == 12) {
        text = "Last 12 Months"
    }
    return {
        labels: [text, ""],
        datasets: [

            {
                label: 'Unit Test Coverage',
                data: unitTestCoverage(programData, value),
                backgroundColor: ['#e6194b', 'white'

                ]
            }

        ]
    }
}


export const forPieChartSucessful = (programData = [], value, month) => {
    let text = getMonthName(month);
    if (value == 3) {
        text = "Last 3 Months"
    }
    else if (value == 6) {
        text = "Last 6 Months"
    }
    else if (value == 9) {
        text = "Last 9 Months"
    }
    else if (value == 12) {
        text = "Last 12 Months"
    }
    return {
        labels: [text, ""],
        datasets: [
            {
                label: 'Sucessful Deploys',
                data: successfulDeploys(programData, value),
                backgroundColor: ['#4363d8', 'white'

                ]
            }

        ],
    }
}