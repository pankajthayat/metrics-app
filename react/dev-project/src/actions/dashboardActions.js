
export const addAgileDataInDashboard = (updates) => {
    return {
        type: "ADD_AGILE_DATA_IN_DASHBOARD",
        updates
    }
}

export const addDevOpsDataInDashboard = (updates) => {
    return {
        type: "ADD_DEVOPS_DATA_IN_DASHBOARD",
        updates
    }
}

export const addEngineeringDataInDashboard = (updates) => {
    return {
        type: "ADD_ENGINEERING_DATA_IN_DASHBOARD",
        updates
    }
}


export const dataSortingDetailsForListView = (updates) => {
    return {
        type: "ADD_SORTING_DETAILS_FOR_LIST_VIEW",
        updates
    }
}

export const addFilterByYear = (updates, metricType = "") => {
    return {
        type: "ADD_FILTER_BY_YEAR_FOR_" + metricType.toUpperCase(),
        updates
    }
}
export const addFilterByMonth = (updates, metricType = "") => {
    return {
        type: "ADD_FILTER_BY_MONTH_FOR_" + metricType.toUpperCase(),
        updates
    }
}
export const addSortBy = (updates, metricType = "") => {
    return {
        type: "ADD_SORT_BY_FOR_" + metricType.toUpperCase(),
        updates
    }
}
