import { useDispatch } from 'react-redux';
import axios from 'axios';
import store from '../../Store/localStorage';
import ActionCreater from '../../Actions/Actions';
var qs = require('qs');

async function LoginAuthentication(emailId,password,LoggedIn) {
        
        await axios.post("/v1/cta/login/user",{},{headers:{"emailId":emailId,"password":password}
        }).then((response)=>{
             
            if(response.data)
            {
                LoggedIn(response.data);
                
            }
              
           
            
        })
    
}
export default LoginAuthentication;