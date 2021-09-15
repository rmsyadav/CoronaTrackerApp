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
        await axios.get("http://localhost:3333/users").then((response)=>{
            console.log(response.data);
            dispatch(setuser(response.data))
        })
    }
}
function setuser(allRegisteruser){
    return{
        type:SETUSER,
        allRegisteruser:allRegisteruser
    }
}


export default {ActionCreater,ActionCreater2,fetchAllRegisterUser};