const dashboardDefaultState={
            agileData: [],
            devopsData: [],
            engineeringData: [],
            sortingDetails:{},
            filterByYearForAgile:new Date().getFullYear(),
            filterByMonthForAgile: "All Month",
            sortByForAgile: "Month",
            filterByYearForDevops: new Date().getFullYear(),
            filterByMonthForDevops: "All Month",
            sortByForDevops: "Month",
            filterByYearForEngineering: new Date().getFullYear(),
            filterByMonthForEngineering:"All Month",
            sortByForEngineering: "Month"
}

export default (state=dashboardDefaultState,action)=>{
switch(action.type)
{
    case "ADD_AGILE_DATA_IN_DASHBOARD":
    return {...state,agileData:action.updates}

    case "ADD_DEVOPS_DATA_IN_DASHBOARD":
    return {...state,devopsData:action.updates}

    case "ADD_ENGINEERING_DATA_IN_DASHBOARD":
    return {...state,engineeringData:action.updates}

    case "ADD_SORTING_DETAILS_FOR_LIST_VIEW":
    return {...state,sortingDetails:action.updates}

    case "ADD_FILTER_BY_YEAR_FOR_AGILE":
    return {...state,filterByYearForAgile:action.updates}

    case "ADD_FILTER_BY_YEAR_FOR_DEVOPS":
    return {...state,filterByYearForDevops:action.updates}

    case "ADD_FILTER_BY_YEAR_FOR_ENGINEERING":
    return {...state,filterByYearForEngineering:action.updates}

    case "ADD_FILTER_BY_MONTH_FOR_AGILE":
    return {...state,filterByMonthForAgile:action.updates}

    case "ADD_FILTER_BY_MONTH_FOR_DEVOPS":
    return {...state,filterByMonthForDevops:action.updates}

    case "ADD_FILTER_BY_MONTH_FOR_ENGINEERING":
    return {...state,filterByMonthForEngineering:action.updates}

    case "ADD_SORT_BY_FOR_AGILE":
    return {...state,sortByForAgile:action.updates}

    case "ADD_SORT_BY_FOR_DEVOPS":
    return {...state,sortByForDevops:action.updates}

    case "ADD_SORT_BY_FOR_ENGINEERING":
    return {...state,sortByForEngineering:action.updates}

    default:
    return state;
}
}