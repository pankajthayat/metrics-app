export const TelstraTeamSize = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].TelstraTeamSize;
      }
    return data;
}

export const CognizantTeamSize = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].CognizantTeamSize;
    }
    return data;
}

export const commitmentReliability = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].commitmentReliability;
    }
    return data;
}

export const unitTestCoverage = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].unitTestCoverage;
    }
    return data;
}

export const AvgVelocityPerWeek = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].AvgVelocityPerWeek;
    }
    return data;
}

export const CodeQualityTechnical = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].CodeQualityTechnical;
    }
    console.log("datatec>>>")
    console.log(data)
    return data;
}
export const successfulDeploys = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].successfulDeploys;
    }
    return data;
}
export const PostProdDefectsCritical = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].PostProdDefectsCritical;
    }
    return data;
}