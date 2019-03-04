import { SHOW_LIST, EXPORT_LIST, DELETE_DEVOPS, DELETE_ENGINEERING, UPDATE_DEVOPS, UPDATE_ENGINEERING} from '../constants/types'

export const showList = (updates) => {
    return {
        type: SHOW_LIST,
        payload:updates
    };
 }


export const updateDevops = (devOps) => {
    return {
        type: UPDATE_DEVOPS,
        payload: devOps
    };
}

export const exportList = (updates) => {
    return {
        type: EXPORT_LIST,
        payload:updates
    };
 }

export const updateEngineering = (engineering) => {
    return {
        type: UPDATE_ENGINEERING,
        payload: engineering
    };
}

export const deleteDevops = (devOps) => {
    return {
        type: DELETE_DEVOPS,
        payload: devOps
    };
}

export const deleteEngineering = (engineering) => {
     return {
        type: DELETE_ENGINEERING,
        payload: engineering
    };
}


