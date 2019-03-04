import { SAVE_DEVOPS } from '../constants/types'
import { UPDATE_DEVOPS } from '../constants/types'
import axios from "axios";
import { ADD_DEVOPS_URL } from "../components/Constants/constants"

export const saveDevops = (devOps) => {
    console.log(devOps)
    axios.defaults.headers.post["userName"] = "Krishna";
    axios.post(ADD_DEVOPS_URL,devOps)
        .then(res => {
            console.log(res.data);
        });

    return {
        type: SAVE_DEVOPS,
        payload: devOps
    };
}

