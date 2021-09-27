import React from 'react';
import LoginForm from '../LoginComponents/LoginForm';
import {useSelector} from "react-redux";
import {history} from '../LoginComponents/createhistory'

const  ProtectedRouting=(props)=>{
    const Coronatrackerpag=props.component;
    const LoggedIn=useSelector(state => state.LoggedIn)
    
    return(

         LoggedIn?<Coronatrackerpag></Coronatrackerpag>:<LoginForm history={history}></LoginForm>
    )

     
}

export default ProtectedRouting;
