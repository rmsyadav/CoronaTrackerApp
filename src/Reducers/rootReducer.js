import {LOGGEDIN,LOGOUT,SETUSER} from '../Types/Constant'
const initialState={
    user:false,
    allRegisteruser:[],
    LoggedIn:false
}


export default function rootReducer(state=initialState,action){
    
    switch(action.type)
    {
        case LOGGEDIN:
            return{
                ...state,
                user:action.user,
                LoggedIn:true
            }
        case LOGOUT:
            return{
                ...state,
                user:{},
                LoggedIn:false
            }    
        case SETUSER:
            return{
                ...state,
                allRegisteruser:action.allRegisteruser
            } 
         default:
             return state;   
    }
}