import axios from "axios"
import { SAVE_AGILE } from '../constants/types'
import { UPDATE_AGILE } from '../constants/types'
import { DELETE_AGILE } from '../constants/types'
import { ADD_AGILE_URL } from "../components/Constants/constants"

export const saveAgile = (AgileData) => {
    axios.defaults.headers.post["userName"] = "Krishna";
    axios.post(ADD_AGILE_URL,AgileData)
    .then(res =>{
        console.log(res.data);
        });
    return {
        type: SAVE_AGILE,
        updates: AgileData
    };
}

export const updateAgile = (agile) => {
    return {
        type: UPDATE_AGILE,
        payload: agile
    };
}

export const deleteAgile = (agile) => {
    return {
        type: DELETE_AGILE,
        delete: agile
    };
}