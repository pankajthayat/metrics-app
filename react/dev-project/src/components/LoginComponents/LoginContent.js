import React from 'react';
import { Route } from 'react-router-dom';

import Login from "../LoginComponents/Login"
import Layout from "../LayoutComponent/Layout"

export default class LoginContent extends React.Component {
    render() {
        return (
            <div className="col-md-12">
            <div className="headerContent">
                <Route exact path="/" component={Login}></Route>
                <Route path="/Layout" component={Layout}></Route>
            </div>
            </div>

        )
    }
}