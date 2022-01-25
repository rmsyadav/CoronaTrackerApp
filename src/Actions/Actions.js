import axios from "axios";

import {LOGGEDIN,LOGOUT,SETUSER} from '../Types/Constant'
    function ActionCreater(user){
    
        return{
            type:LOGGEDIN,
            user:user
        }
    }
    function ActionCreater2(){
        
        return{
            type:LOGOUT,
            user:{}
        }

}
function fetchAllRegisterUser() {

    return async (dispatch)=>{
        await axios.get("/v1/cta/featch/userDetails").then((response)=>{
            console.log(response.data);
            dispatch(setuser(response.data))
        })
    }
}
export function setuser(allRegisteruser){
    return{
        type:SETUSER,
        allRegisteruser:allRegisteruser
    }
}


export default {ActionCreater,ActionCreater2,fetchAllRegisterUser};