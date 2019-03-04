
import { SHOW_LIST, UPDATE_DEVOPS, EXPORT_LIST, UPDATE_ENGINEERING, DELETE_DEVOPS, DELETE_ENGINEERING } from '../constants/types'


const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SHOW_LIST:
            return {
                ...state,
                items:action.payload
            }
            case UPDATE_DEVOPS:
            return {
                ...state,
                item: action.payload
            }
            case UPDATE_ENGINEERING:
            return {
                ...state,
                item: action.payload
            }
            case EXPORT_LIST:
            return {
                ...state,
                items: action.payload
            }
            case DELETE_DEVOPS:
            return {
                ...state,
                item: action.payload
            }
            case DELETE_ENGINEERING:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}

