import { SAVE_AGILE, UPDATE_AGILE, DELETE_AGILE } from '../constants/types'

const agileDefaultState = {
    month: "",
    year: "",
    iteration: undefined,
    cognizantTeamSize: undefined,
    telstraTeamSize: undefined,
    numberOfHolidays: undefined,
    numberOfLeavesInPersonDays: undefined,
    iterationNumber: undefined,
    velocity: undefined,
    plannedVelocity: undefined,
    rejectionRate: undefined,
    averageCycle: undefined,
    velocityRate: undefined,
    commitmentReliability: undefined,
    velocityPerWeek: undefined,
    comments: "",
    messageFromServer: ""
}

const initialState = {
    item: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_AGILE:
            return {
                ...state,
                item: action.updates
            }

        case UPDATE_AGILE:
            return {
                ...state,
                item: action.payload
            }

        case DELETE_AGILE:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}


