export default (state = [], action) => {
    switch (action.type) {
            case "ADD_PROGRAM_DASHBOARD":
            return action.updates ;
            default:
            return state;
    }
}
