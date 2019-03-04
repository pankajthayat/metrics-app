import React, { Component } from 'react';
import { connect } from "react-redux"
import Login from "../LoginComponents/Login"
import { reSet } from "../../actions/loginActions";
import { HashRouter, NavLink } from 'react-router-dom';

class Logout extends Component {
  constructor(props) {
    super(props)
    
  }
  componentDidMount()
  {
this.props.dispatch(reSet())
  }
  render() {
    return (
      <div>
     Logout....
     click here to login
     <NavLink to='/Login'>Login</NavLink>
    
     </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}
export default connect(mapStateToProps)(Logout);