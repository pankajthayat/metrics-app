
export const averageCommitmentReliability = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].averageCommitmentReliability;
    }
    return data;
}

export const averageRejectionRate = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].averageRejectionRate;
    }
    return data;
}

export const averageVelocityPerWeek = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].averageVelocityPerWeek;
    }
    return data;
}

export const averageVelocityRate = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].averageVelocityRate;
    }
    return data;
}

export const averageCycleTime = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].averageCycle;
    }
    return data;
}

export const cognizantTeamSize = (filteredData) => {
    let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < filteredData.length; i++) {
        data[Number(filteredData[i].month - 1)] = filteredData[i].cognizantTeamSize;
    }
    return data;
}
