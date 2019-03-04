import React, { Component } from 'react';
import Header from './components/HeaderComponents/Header.js';
import Footer from './components/FooterComponents/Footer.js';
import Login from './components/LoginComponents/Login';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import LoginContent from './components/LoginComponents/LoginContent';
import { BrowserRouter } from 'react-router-dom'
import { HashRouter, NavLink } from 'react-router-dom';


class App extends Component {
  componentWillUnmount()
  {
    localStorage.clear(); 
  }

  render() {
    return (
       <BrowserRouter>
      <div className="App">
       <LoginContent />
      </div>
       </BrowserRouter>
    );
  }
}

export default App;

