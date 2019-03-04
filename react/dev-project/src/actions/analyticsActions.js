import { getApiCall } from "../apiCalls/apiCall";
import * as url from "../components/Constants/constants";
export const addAgileDataForAnalytics = (updates) => {
    return {
        type: "ADD_AGILE_FOR_ANALYTICS",
        updates
    }
}

 export const addAgileDataForAnalytics2 = ()=>(dispatch)=>{
    dispatch({type:"REQUEST_PENDING",isPending:true})
    getApiCall(url.LOAD_AGILE_ANALYTICS)
    .then(response=>dispatch({
        type: "ADD_AGILE_FOR_ANALYTICS",
        updates:response.data,}))
        .catch(error=>dispatch({
            type:"REQUEST_FAILED",
            error
        }))
}


export const addDevOpsDataForAnalytics = (updates) => {
    return {
        type: "ADD_DEVOPS_FOR_ANALYTICS",
        updates
    }

}

export const addEngineeringDataForAnalytics = (updates) => {
    return {
        type: "ADD_ENGINEERING_FOR_ANALYTICS",
        updates
    }

}
