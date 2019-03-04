import "../../style/sidebar.css";
import React from "react";
import { NavLink } from 'react-router-dom';

export default class Sidebar extends React.Component {

    render() {
        return (<div class="topnav">
            <NavLink exact={true} to='/ProgramDashboard'>Dashboard</NavLink>
            <NavLink to='/ProjectDashboard'>Project Dashboard</NavLink>
            <NavLink to='/Dashboard'>Program Dashboard</NavLink>
            <NavLink to='/ListItems'>Metrics</NavLink>
            <NavLink to='/Analytics'>Analytics</NavLink>
        </div>
        )
    }
}
