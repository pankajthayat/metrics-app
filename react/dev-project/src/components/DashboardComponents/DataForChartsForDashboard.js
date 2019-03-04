
export const averageCommitmentReliability = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].commitmentReliability;
    }
    return data;
}

export const velocityPerWeek = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].velocityPerWeek;
    }
    return data;
}

export const averageCycleTime = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].averageCycleTime;
    }
    return data;
}

export const averageVelocityRate = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].velocityRate;
    }
    return data;
}

export const telstraTeamSize = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].telstraTeamSize;
    }
    return data;
}

export const cognizantTeamSize = (filteredData) => {
    console.log(filteredData)
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].cognizantTeamSize;
    }

    return data;
}

export const postProdDefectsMedium = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].postProdDefectsMedium;
    }
    return data;
}

export const prodDevFrequency = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].prodDevFrequency;
    }
    return data;
}

export const postProdDefectsHigh = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].postProdDefectsHigh;
    }
    return data;
}

export const postProdDefectsCritical = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].postProdDefectsCritical;
     }
    return data;
}

export const successfulDeploys = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].successfulDeploys;
    }
    return data;
}

export const postProdDefectsLow = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].postProdDefectsLow;
    }
    return data;
}

export const totalDefects = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].totalDefects;
     }
    return data;
}


export const openDefects = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].openDefects;
    }
    return data;
}

export const averageCyclometricCode = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].CyclometricCode;
    }
    return data;
}

export const averageTechnicalCode = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].TechnicalCode;
    }
    return data;
}

export const averageMaintainabilityIndex = (filteredData) => {
    let data =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].MaintainabilityIndex;
    }
    return data;
}

export const averageSecurityDefects = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].SecurityDefects;
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

