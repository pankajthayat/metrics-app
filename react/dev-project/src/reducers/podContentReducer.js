
const podContentDefaultState={
            pods: [],
            podId: 1,
            podName: 'RTFA'
}

export default (state=podContentDefaultState,action)=>{
    switch(action.type)
    {
        case 'ADD_POD_CONTENT':
        return {...state,...action.updates}
        default:
        return state;
    }
}
