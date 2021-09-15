

function loginPageValidation(values) {
    const error={};
    if(!values.userid.trim())
    {
        error.userid='username required'
    }
     if(!values.password.trim()){
         error.password='password required';
     }
     else if(values.password.trim().length<6)
     {
         error.password="password need to be 6 character or more!";
     }
    return error;
}

export default loginPageValidation
