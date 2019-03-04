export default (agileData, devOpsData, engineeringData) => {
    let filteredAgileData = (agileData.filter((data) => data.year === "2018")).sort((a, b) => a.month - b.month);
    let filteredDevOpsData = devOpsData.filter((data) => data.year === "2018").sort((a, b) => a.month - b.month);
    let filteredEngineeringData = engineeringData.filter((data) => data.year === "2018").sort((a, b) => a.month - b.month);
    let finalProgramData = [];
    for (let i = 0; i < filteredAgileData.length; i++) {
        finalProgramData[i] = {
            year: 2018,
            month: filteredAgileData[i].month,
            commitmentReliability: filteredAgileData[i].commitmentReliability,
            VelocityPerWeek: filteredAgileData[i].VelocityPerWeek,
            unitTestCoverage: filteredAgileData[i].unitTestCoverage,
            ProdDevFrequency: filteredDevOpsData[i] ? filteredDevOpsData[i].ProdDevFrequency : 0,
            PercentageOfFailedDeployment: filteredDevOpsData[i] ? filteredDevOpsData[i].PercentageOfFailedDeployment : 0,
            TestCasesExecuted: filteredEngineeringData[i] ? filteredEngineeringData[i].TestCasesExecuted : 0,
            TotalDefects: filteredEngineeringData[i] ? filteredEngineeringData[i].TotalDefects : 0,
            successfulDeploys: filteredDevOpsData[i] ? filteredDevOpsData[i].successfulDeploys : 0
        }
    }

    return finalProgramData;
}