import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../DashboardComponents/Dashboard';
import Logout from '../LogoutComponents/Logout';
import Agile from '../AgileComponents/Agile';
import DevOps from '../DevopsComponents/DevOps';
import Engineering from '../EngineeringComponents/Engineering';
import Metricsapp from '../MetricsAppComponents/Metricsapp';
import ListItems from '../ListComponents/ListItems';
import Login from "../LoginComponents/Login"
import Layout from "../LayoutComponent/Layout"
import Analytics from "../AnalyticsComponents/Analytics"
import ProjectDashboardRender from "../ProjectDashboardComponents/ProjectDashboardRender"
import ProgramDashboardRender from "../ProgramDashboardComponents/ProgramDashboardRender"
import ErrorPage from '../ErrorPage'
export default class HeaderContent extends React.Component {
    render() {
        return (
            <div>
                    <Switch>
                        <Route exact={true} path="/Login" component={Login}></Route>
                        <Route exact={true} path="/Layout" component={Layout}></Route>
                        <Route path="/Layout/#/" component={Dashboard}></Route>
                        <Route path="/Dashboard" component={Dashboard}></Route>
                        <Route path="/ProjectDashboard" component={ProjectDashboardRender}></Route>
                        <Route path="/ProgramDashboard" component={ProgramDashboardRender}></Route>
                        <Route path="/Analytics" component={Analytics}></Route>

                        <Route path="/Login" component={Login}></Route>
                        <Route path="/ListItems" component={ListItems}></Route>

                        <Route path="/Agile" component={Agile}></Route>
                        <Route path="/DevOps" component={DevOps}></Route>
                        <Route path="/Engineering" component={Engineering}></Route>
                        <Route path="/Logout" component={Logout}></Route>
                        <Route path="*" component={ErrorPage}></Route>
                    </Switch>
            </div>

        )
    }
}