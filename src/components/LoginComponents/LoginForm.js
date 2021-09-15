import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import {NavLink} from 'react-router-dom';
import loginPageValidation from './loginPageValidation';
import {connect} from 'react-redux';
import Actions from '../../Actions/Actions';



 class LoginForm extends Component {
    
    constructor(props){
        super(props);
        this.isInvaliduser=false;
        this.state={
              user:{
                    userid:'',
                    password:''
                    },
              isSubmited:false,
              error:{
                userid:'',
                password:''
              },
              isvalidUser:false,
              isInvaliduser:false
            }
         this.handleChange=this.handleChange.bind(this);   
         this.handleSubmit=this.handleSubmit.bind(this);

       }
   

    handleChange(event){
       console.log("hello for testing");
        var {user,isSubmited,error,isvalidUser,isInvaliduser}={...this.state};
        const currentState=user;
        const {name,value}=event.target;
        currentState[name]=value;
        this.setState({user:currentState,isSubmited:isSubmited,error:error,isvalidUser:isvalidUser,isInvaliduser:isInvaliduser});
    };


    handleSubmit(event){
        event.preventDefault();
        var {user,isSubmited,error,isvalidUser}={...this.state};
        const currenterror=loginPageValidation(user);
        this.setState({user:this.state.user,isSubmited:false,error:currenterror,isvalidUser:false}); 
        if(Object.keys(currenterror).length===0)
        {   
           
              let valid=false;
              let localuser={}; 

             this.props.allRegisteruser.map((obj)=>{
                if(obj.email===this.state.user.userid && obj.password===this.state.user.password)
                    {
                        valid=true;
                        localuser=obj;
                    }
                })
               if(valid)
                {
                    this.props.Loggedin(localuser);
                    alert("you have been seccefully Loggedin!"); 
                    this.setState({user:localuser,isSubmited:isSubmited,error:currenterror,isvalidUser:true,isInvaliduser:false});
                    this.props.history.push('/coronatrackerpage')
                         
                        
              }
             else{
                alert("Username & password is invalid!");    
                this.setState({user:user,isSubmited:isSubmited,error:currenterror,isvalidUser:false,isInvaliduser:true});
             }
                    
            
         }    
           

     }
    

    
    render() {
        return (

            <>
           
            <div className='registration card border-0 shadow'>
               <h1 className="text-primary card-header">Login Form</h1><br></br><br></br>
               <div  className='form-inputs'>
                  <div className='form-group'>
                       <input type='text' placeholder="Enter your userid" value={this.state.user.userid||''}  onChange={this.handleChange} className="form-control" name="userid"></input>
                       
                  </div>
                     {this.state.error.userid && <p>{this.state.error.userid}</p>}<br/>
                  <div className='form-group'>
                  <input type='password' placeholder="Enter your password" value={this.state.user.password||''}  onChange={this.handleChange} className="form-control" name="password"></input>
                  </div>
                  {this.state.error.password && <p>{this.state.error.password}</p>}<br/>
                  <div>
                  <input type='submit'  value="Login" onClick={this.handleSubmit} className="form-control btn-success"></input>
                  </div>
                 <div>
                     <span>You don't have Account? Click <NavLink to="/Registration">Here</NavLink></span>
                     {this.state.isvalidUser?<p>seccefuly loggin</p>:null}
                     {this.state.isInvaliduser?<p>invalid UserID and Password!</p>:null}
                 </div>
               </div>
                
            </div>
            </>
        )
    }
}
const mapStateToprops=state=>{
    return{
        loginuser:state.user,
        allRegisteruser:state.allRegisteruser
    }
}
const mapDispatchToprops=dispatch=>{
    return{
        Loggedin:(user)=>dispatch(Actions.ActionCreater(user))

    }
}

export default connect( mapStateToprops,mapDispatchToprops)(LoginForm);