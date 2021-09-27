import React from 'react'
import {NavLink} from 'react-router-dom';
import './MenuBar.css';
import {useSelector} from 'react-redux';
const styling={
  textDecoration:'none',
  color:'white',
}
  



const MenuBar=()=>{
  const username= useSelector(state => state.user.userName);
  const LoggedIn= useSelector(state => state.LoggedIn);
    return(
        <>
        
         <nav id="navbar">
         <div id='Header'>
           {username?<h1>Welcome {username}!</h1>:<h1>Welcome to CoronaTrackerApp</h1>}
         </div>
         <div id="menu">
          {LoggedIn?<><NavLink exact activeClassName="active_link" style={styling} to="/coronatrackerpage"><i className="fa fa-home" style={{fontSize:"24px"}}></i>Home</NavLink> <NavLink exact activeClassName="active_link" style={styling} to="/aboutus">About US</NavLink><NavLink exact activeClassName="active_link" style={styling} to="/contactus">Contact US</NavLink> <NavLink exact activeClassName="active_link" style={styling} to="/updateprofile">UpdateProfile</NavLink><NavLink exact activeClassName="active_link" style={styling}  to="/logout">Logout</NavLink></>: <><NavLink exact activeClassName="active_link" style={styling}  to="/login"><i className="fa fa-sign-in" style={{fontSize:"24px"}}></i>Login</NavLink><NavLink exact activeClassName="active_link" style={styling} to="/registration"><i className="fa fa-registered" style={{fontSize:"24px"}}></i>Registration</NavLink></>}
          
          
          </div>
         </nav>
           
           



        </>
    );
    };
  export default MenuBar; 
