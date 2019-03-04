import React from 'react';
import '../../style/header.css';
import { HashRouter, NavLink } from 'react-router-dom';
import HeaderContent from './HeaderContent';
import Sidebar from "../SidebarComponents/Sidebar"

export default class Header extends React.Component {

  render() {

    return (
      <HashRouter>
        <div className="header">
          <div className="row">
            <div className="col-md-2  header-logo">
              <img alt="logo" className="img-fluid tlogo" src={require('../../images/tlogo1.png')} />
            </div>
            <h3 className="col-md-8">
              <b className="heading">COGNIZANT TELSTRA METRICS</b>
            </h3>
            <div className="col-md-2">
              <img alt="logo" className="img-fluid clogo" src={require('../../images/clogo3.png')} />
            </div>
          </div>
          <Sidebar />
          <HeaderContent />
          <br /><br />
        </div>
      </HashRouter>
    )
  }
}