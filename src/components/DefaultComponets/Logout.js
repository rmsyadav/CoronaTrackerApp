import React  from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Actions from '../../Actions/Actions';

const Logout=()=> {
        
        const dispatch=useDispatch();
        dispatch(Actions.ActionCreater2());


        return (
           <Redirect to="/login"></Redirect>
        )
    
}
export default Logout;