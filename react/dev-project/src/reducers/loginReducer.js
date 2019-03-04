
let loginDefaultState={
            userName: "",
            password : "",
            isLoggedIn: false
}
if(sessionStorage.getItem("loginDetails"))
{
    loginDefaultState=JSON.parse(sessionStorage.getItem("loginDetails"));
}
export default (state=loginDefaultState,action)=>{
    switch(action.type){
        case "SET_USER_NAME":
        return {...state,userName:action.userName};
        case "SET_LOGIN_PASSWORD":
        return { ...state,password:action.password };
        case "SET_IS_LOGGED_IN":
        return {...state,isLoggedIn:action.isLoggedIn};
        default:
        return loginDefaultState;

    }

}

