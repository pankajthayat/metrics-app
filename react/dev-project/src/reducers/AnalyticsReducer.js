let defaultState = {
    agileData: [],
    devopsData: [],
    engineeringData: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "REQUEST_PENDING":
            return {...state,isPending:action.isPending };
        case "REQUEST_FAILED":
            return {error:action.error };
        case "ADD_AGILE_FOR_ANALYTICS":
            return { ...state, agileData: action.updates ,isPending:false};
        case "ADD_DEVOPS_FOR_ANALYTICS":
            return { ...state, devopsData: action.updates,isPending:false };
        case "ADD_ENGINEERING_FOR_ANALYTICS":
            return { ...state, engineeringData: action.updates,isPending:false };
        default:
            return state;
    }
}