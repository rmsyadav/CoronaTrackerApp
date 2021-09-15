import React from 'react';
import {Route,Switch,BrowserRouter,Redirect} from 'react-router-dom';
import RegistrationForm from '../RegistrationComponents/RegistrationForm';
import LoginForm from '../LoginComponents/LoginForm';
import Aboutus from '../DefaultComponets/Aboutus';
import Contactus from '../DefaultComponets/Contactus';
import Logout from "../DefaultComponets/Logout";
import Coronatrackerpage from '../DefaultComponets/CoronaTrackerPage';
import MenuBar from './MenuBar';
import {Provider} from 'react-redux';
import store from '../../Store/localStorage';
import ProtectedRouting from './ProtectedRouting';
import UpdateProfile from '../UpdateProfileComponent/UpdateProfile';


function Routing() {
    return (
        <>
         
          <BrowserRouter>
            <Provider store={store}>
            <MenuBar></MenuBar>
            <Switch>
           
                <Route exact path='/login'  component={LoginForm}></Route>
               <Route exact path='/'>
                   <Redirect to='login'/>
               </Route>
               <ProtectedRouting  exact path='/contactus' component={Contactus}></ProtectedRouting>  
               <ProtectedRouting exact path='/aboutus' component={Aboutus}></ProtectedRouting>
               <ProtectedRouting exact path='/coronatrackerpage' component={Coronatrackerpage}></ProtectedRouting>
               <ProtectedRouting  exact path='/updateprofile' component={UpdateProfile}></ProtectedRouting>  
               <Route exact path='/registration' component={RegistrationForm}></Route>
              
               <Route exact path='/logout' component={Logout}></Route>
               
               
               <Route exact path="*" component={()=>{
                   return (
                       <h1>404 Page not Found!</h1>
                   )
               }}></Route>




    
            </Switch> 


            </Provider>
               

          </BrowserRouter>

        </>
    )
}

export default Routing
