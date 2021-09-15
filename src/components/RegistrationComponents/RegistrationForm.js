import React, { Component } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import {NavLink} from 'react-router-dom';
import  RegistrationPageValidation from "./RegistrationPageValidation";
import axios from 'axios';
import {connect} from 'react-redux';
import Actions from '../../Actions/Actions'
class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state={
              user:{
                    username:'',
                    phone:'',
                    email:'',
                    password:'',
                    password2:''
                    },
              isSubmited:false,
              error:{
                username:'',
                phone:'',
                email:'',
                password:'',
                password2:''
              },
              isValidUser:false
            }
         this.handleChange=this.handleChange.bind(this);   
         this.handleSubmit=this.handleSubmit.bind(this);

       }
    componentDidMount(){

    };
    handleChange(event){

        const {user,isSubmited,error,isValidUser}={...this.state};
        const currentState=user;
        const {name,value}=event.target;
        currentState[name]=value;
        this.setState({user:currentState,isSubmited:isSubmited,error:error,isValidUser:isValidUser});
    };
    handleSubmit(event){
        event.preventDefault();
        const {localuser,isSubmited,error,isValidUser}={...this.state};
        const currenterror=RegistrationPageValidation(this.state.user);
        this.setState({user:this.state.user,isSubmited:false,error:currenterror,isvalidUser:false}); 
        if(Object.keys(currenterror).length===0)
        {
            
            axios.get("http://localhost:3333/users?q="+this.state.user.email).then(response=>{
               
               if(response.data.length>0)
               {
     
                    var {localusers,isSubmited,error,isvalidUser}={...this.state};              
                    this.setState({user:this.state.user,isSubmited:false,error:error,isvalidUser:true}); 
                    alert("you have Already Registered!"); 
                
               
                }
                else
                {
                    axios.post("http://localhost:3333/users",this.state.user).then(response=>{
                    
                        if(response.status===201)
                        {
                         var {localuser,isSubmited,error,isvalidUser}={...this.state};   
                         
                         this.setState({user:this.state.user,isSubmited:true,error:error,isvalidUser:false});
                         this.props.newRegisteruser();
                         alert("you have been Registered seccefully !"); 
                           
                        }
                    })   
                }
              
               
           })
        }    
        
    };
    render() {
        return (
            <>
            <div className='registration card border-0 shadow'>
               <h1 className="text-primary card-header">Registration Form</h1><br></br><br></br>
               <form onSubmit={this.handleSubmit} className='form-inputs'>
                  <div className='form-group'>
                       <input type='text' placeholder="Enter your username" value={this.state.user.username} onChange={this.handleChange} className="form-control" name="username"></input>
                     
                  </div>
                   
                     {this.state.error.username && <p>{this.state.error.username}</p>}<br/>
                  <div className='form-group'>
                       <input type='email' placeholder="Enter your EmailID" value={this.state.user.email} onChange={this.handleChange} className="form-control" name="email"></input>
                  </div>
                  {this.state.error.email && <p>{this.state.error.email}</p>}<br/>
                  <div className='form-group'>
                  <input type='tel' placeholder="Enter your Phone Number" value={this.state.user.phone} onChange={this.handleChange} className="form-control" name="phone"></input>
                  </div> 
                  {this.state.error.phone && <p>{this.state.error.phone}</p>}<br/> 
                  <div className='form-group'>
                  <input type='password' placeholder="Enter your password" value={this.state.user.password} onChange={this.handleChange} className="form-control" name="password"></input>
                  </div>
                  {this.state.error.password && <p>{this.state.error.password}</p>}<br/>
                  <div className='form-group'>
                  <input type='password' placeholder="Enter Confirm password" value={this.state.user.password2} onChange={this.handleChange} className="form-control" name="password2"></input>
                  </div>
                  {this.state.error.password2 && <p>{this.state.error.password2}</p>}<br/>
                  <div>
                  <input type='submit'  value="Register" className="form-control btn-success"></input>
                  </div>
                 <div>
                     <span>You have Already Account? Click <NavLink to="/login">Here</NavLink></span>
                     {this.state.isvalidUser?<p>You Have Already Registered!</p>:null}
                     {this.state.isSubmited?<p>You have been seccefully Registered!</p>:null}
                 </div>
               </form>
                
            </div>
            </>
        )
    } 
  
   
}
const mapDispatchToprops=dispatch=>{
    return{
        newRegisteruser:(user)=>dispatch(Actions.fetchAllRegisterUser())

    }
}
export default connect(null,mapDispatchToprops)(RegistrationForm);