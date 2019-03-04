import React from 'react';
import '../../style/Login.css';
import axios from 'axios';
import { connect } from "react-redux";
import { setUserName,setLoginPassword,setIsLoggedIn } from "../../actions/loginActions";
import swal from 'sweetalert';
class Login extends React.Component{
 
loginAuth(userName, password,e) {
    e.preventDefault();
    axios.post('http://localhost:8080//metrics-app/v1/api/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
        userName: userName,
        password: password
      
    })
    .then(response => {
      if(response.status >= 200 && response.data === "success"){
         this.props.dispatch(setIsLoggedIn(true));
          const loginDetailsJson=JSON.stringify(this.props.login);
         sessionStorage.setItem("loginDetails",loginDetailsJson);
        this.props.history.push('/Layout/#ProgramDashboard')
        
        

      } else {
        const error = new Error(response.statusText);
        error.response = response;
        swal({text: "Username or password is incorrect"})
        .then(function(){ 
                window.location.reload();
             });  
      }
    })
    .catch(error => { console.log('Request Failed: ', error);});
  }
    handleChange1 = e => {
        let userName;
        userName = e.target.value
    this.props.dispatch(setUserName(userName))
    
  };
   handleChange2 = e => {
        let password;
        password = e.target.value
     this.props.dispatch(setLoginPassword(password))
    
  };

    render(){
        return(

<div className="img-background">
<div className="row">
<div className="col-lg-1 ">
<div className="col-lg-10">
        

<div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto" id="form-body">
        <div class="card card-signin">
            <h5 class="card-title text-center signin-header">COGNIZANT METRICS PAGE</h5>
            <form class="form-signin">
              <div class="form-label-group tabs-row-1"> 
                <div class="col-lg-4"><label>Username</label></div>
                <div class="col-lg-5"><input type="text" id="inputEmail" class="form-control" name="userName" placeholder="Username" required autofocus onChange={this.handleChange1}/></div>
              </div>

              <div class="form-label-group tabs-row-2"> 
              <div class="col-lg-4"><label>Password</label></div>
              <div class="col-lg-6"><input type="password" id="inputPassword" class="form-control" name="password" placeholder="Password" required onChange={this.handleChange2}/></div>
               
              </div>

              <br></br>
              <button class="btn btn-lg btn-primary btn-block text-uppercase signin-btn" type="submit" onClick={this.loginAuth.bind(this,this.props.login.userName,this.props.login.password)}>Sign in</button>
             
            </form>
          </div>
      </div>
    </div>
    </div>
    </div>
    <div className="col-lg-1"></div>
    </div>
</div>

       
        );
    }

}
const mapStateToProps=(state)=>{
    return{
        login:state.login        
    }
    
}
export default connect(mapStateToProps)(Login);
