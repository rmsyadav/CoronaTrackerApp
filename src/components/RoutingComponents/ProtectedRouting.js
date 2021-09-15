import React from 'react';
import LoginForm from '../LoginComponents/LoginForm';
import {useSelector} from "react-redux";
import {history} from '../LoginComponents/createhistory'

const  ProtectedRouting=(props)=>{
    const Coronatrackerpag=props.component;
    const email=useSelector(state => state.user.email)
    
    return(

         email?<Coronatrackerpag></Coronatrackerpag>:<LoginForm history={history}></LoginForm>
    )

     
}

export default ProtectedRouting;
