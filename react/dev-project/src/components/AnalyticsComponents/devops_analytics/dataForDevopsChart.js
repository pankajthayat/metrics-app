
export const  deploymentProdFrequency= (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].deploymentProdFrequency;
    }
    return data;
}

export const  openDefects= (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].openDefects;
    }
    return data;
}

export const  totalDefects= (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].totalDefects;
    }
    return data;
}

export const  failedDeployment= (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].failedDeploys;
    }
    return data;
}


export const  successfulDeploys= (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].successfulDeploys;
    }
    return data;
}