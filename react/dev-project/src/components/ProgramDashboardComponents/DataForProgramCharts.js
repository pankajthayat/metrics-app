
export const averageCommitmentReliability = (filteredData,value=1) => {
  let data =[0,0];
  let range=value>filteredData.length?filteredData.length:value;
    for (let i = 0; i < range; i++) {
        data[0]=data[0]+Number(filteredData[filteredData.length-i-1].commitmentReliability);
    }
    data[0]=(Math.round((data[0]/range)*100));
    data[1]=(100-data[0]).toFixed(2);
    return data;
}

export const unitTestCoverage = (filteredData,value=1) => {
    let data =[0,0];
    let range=value>filteredData.length?filteredData.length:value;
    for (let i = 0; i < range; i++) {
        data[0]=data[0]+Number(filteredData[filteredData.length-i-1].unitTestCoverage);
    }
    data[0]=(Math.round((data[0]/range)*100));
    data[1]=(100-data[0]).toFixed(2);
    return data;
}

export const successfulDeploys = (filteredData,value=1) => {
    let data =[0,0];
    let range=value>filteredData.length?filteredData.length:value;
    for (let i = 0; i < range; i++) {
        data[0]=data[0]+Number(filteredData[filteredData.length-i-1].successfulDeploys);
    }
    data[0]=(Math.round((data[0]/range)*100));
    data[1]=(100-data[0]).toFixed(2);
    return data;
} 

export const averageVelocityPerWeek = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].averageAceeptedStoryPoint;
    }
    return data;
}

export const averageCycleTime = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].agileAverageCycle;
    }
    return data;
}

export const ProdDevFrequency = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].frequencyOfDeployment;
    }
    return data;
}   

export const codeQualityCyclometric = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].CodeQualityCyclometric;
    }
    return data;
}
export const codeQualityTechnical = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].CodeQualityTechnical;
    }
    return data;
}
export const CriticalPostProdDefects = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].PostProdDefectsCritical;
    }
    return data;
}


