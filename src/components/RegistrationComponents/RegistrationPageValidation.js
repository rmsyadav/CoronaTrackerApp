function loginPageValidation(values) {
    const error={};
    if(!values.username.trim())
    {
        error.username='username required!'
        
    }
    if(!values.email.trim())
    {
        error.email="email required!";
    }
    else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(values.email)){
        error.email="please Enter Valid Email ID!";
    }
    if(!values.phone.trim())
    {
        error.phone="Phone Number required!";
    }
    else if(values.phone.trim().length>10)
    {
        error.phone="Please Ennter 10 Numeric number!";
    }
     if(!values.password.trim()){
         error.password='password required';
     }
     else if(values.password.trim().length<6)
     {
         error.password="password need to be 6 character or more!";
     }
     if(!values.password2.trim())
     {
        error.password2='confirm password required!';
     }
     else if(values.password2.trim()!==values.password.trim()){
        error.password2='passpord do not Match!';
     }
    return error;
}

export default loginPageValidation