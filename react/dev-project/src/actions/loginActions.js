

export const setUserName =(userName)=>{
    return{
        type:"SET_USER_NAME",
        userName
    }
}

export const setLoginPassword=(password)=>{
    return{
        type:"SET_LOGIN_PASSWORD",
        password
    }
}

export const setIsLoggedIn=(isLoggedIn)=>{
    return{
        type:"SET_IS_LOGGED_IN",
        isLoggedIn
    }
}
export const reSet=()=>({type:"RESET"})
 