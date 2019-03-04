let defaultState = {
    projectDasboard: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "PROJECT_DASHBOARD":
            return { ...state, projectDasboard: action.updates };
        default:
            return state;
    }
}