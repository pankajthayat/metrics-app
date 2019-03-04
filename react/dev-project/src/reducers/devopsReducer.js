import { SAVE_DEVOPS, UPDATE_DEVOPS } from '../constants/types'

const initialState = {
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_DEVOPS:
            return {
                ...state,
                item: action.payload
            }
            case UPDATE_DEVOPS:
            console.log("update in reducer")
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}