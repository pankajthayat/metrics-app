import React from 'react';
import AgileTableData from './AgileTableData';
import DevOpsTableData from './DevOpsTableData';
import EngineeringTableData from './EngineeringTableData';
import axios from 'axios';
import { connect } from "react-redux"
import dashboardSelector from "../../selectors/DashboardSelector"
import { getMonthId } from "../CommonFunctions/CommonFunctions"
import * as dashboardActions from "../../actions/dashboardActions";
import AgileGraphicalDashboard from './AgileGraphicalDashboard';
import DevopsGraphicalDashboard from "./DevopsGraphicalDashboard"
import EngineeringGraphicalDashboard from './EngineeringGraphicalDashboard';
import '../../style/dashboard.css';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAgileDiv: false,
            showEngDiv: false,
            showDevDiv: false,
            showOverDiv: false,
            showProjectDiv: false
        }
    }

    handleOnChange = (e, selectedType, metricType) => {
        const onChangeValue = e.target.value;
        if (selectedType == "filterByYear") {
            this.props.dispatch(dashboardActions.addFilterByYear(onChangeValue, metricType))
        }
        else if (selectedType == "filterByMonth") {
            this.props.dispatch(dashboardActions.addFilterByMonth(onChangeValue, metricType))
        }
        else {
            this.props.dispatch(dashboardActions.addSortBy(onChangeValue, metricType))
        }
    }

    showAgileDiv(e) {
        e.preventDefault();
        this.setState(prevState => ({ showAgileDiv: !prevState.showAgileDiv }))
    }
    showDevDiv(e) {
        e.preventDefault();
        this.setState(prevState => ({ showDevDiv: !prevState.showDevDiv }))
    }
    showEngDiv(e) {
        e.preventDefault();
        this.setState(prevState => ({ showEngDiv: !prevState.showEngDiv }))
    }
    showOverDiv(e) {
        e.preventDefault();
        this.setState(prevState => ({ showOverDiv: !prevState.showOverDiv }))
    }
    showProjectDiv(e) {
        e.preventDefault();
        this.setState(prevState => ({ showProjectDiv: !prevState.showProjectDiv }))
    }

    render() {
        let {showAgileDiv} = this.state;
        let {showDevDiv} = this.state;
        let {showEngDiv} = this.state;
        let {showOverDiv} = this.state;
        let {showProjectDiv} = this.state;
        let agileData = dashboardSelector(this.props.dashboard.agileData,
            this.props.dashboard.filterByYearForAgile,
            getMonthId(this.props.dashboard.filterByMonthForAgile),
            this.props.dashboard.sortByForAgile);
        let devopsData = dashboardSelector(this.props.dashboard.devopsData,
            this.props.dashboard.filterByYearForDevops,
            getMonthId(this.props.dashboard.filterByMonthForDevops),
            this.props.dashboard.sortByForDevops);
        let enggData = dashboardSelector(this.props.dashboard.engineeringData,
            this.props.dashboard.filterByYearForEngineering,
            getMonthId(this.props.dashboard.filterByMonthForEngineering),
            this.props.dashboard.sortByForEngineering);
        return (
            <div className="img-dashboard">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <br></br>
                        <h3 className="title"><strong />Sprint Level Metrics Summary View</h3>
                        <br />
                        {this.showAgileDiv.bind(this) && (
                            <div className="form-group">
                                <AgileGraphicalDashboard agileData={agileData}
                                    year={this.props.dashboard.filterByYearForAgile}
                                    month={this.props.dashboard.filterByMonthForAgile}
                                    handleOnChange={this.handleOnChange} history={this.props.history} />
                                <AgileTableData agileData={agileData} />
                            </div>
                        )}

                        <br />
                        <h3 className="title"><strong />Release Level Metrics Summary View</h3>
                        <br />
                        {this.showDevDiv.bind(this) && (
                            <div><DevopsGraphicalDashboard devopsData={devopsData}
                                handleOnChange={this.handleOnChange}
                                year={this.props.dashboard.filterByYearForDevops}
                                month={this.props.dashboard.filterByMonthForDevops}
                                history={this.props.history} />
                                <DevOpsTableData devopsData={devopsData} />
                            </div>
                        )}

                        <br />
                        <h3 className="title"><strong />Engineering Metrics Summary View</h3>
                        <br />
                        {this.showEngDiv.bind(this) && (
                            <div><EngineeringGraphicalDashboard enggData={enggData}
                                handleOnChange={this.handleOnChange}
                                year={this.props.dashboard.filterByYearForEngineering}
                                month={this.props.dashboard.filterByMonthForEngineering}
                                history={this.props.history} />
                                <EngineeringTableData enggData={enggData} />
                            </div>
                        )}
                    </div>
                    <div className="col-md-1"></div>
                    <br /><br /><br /><br />
                </div>
            </div>
        );
    }

}

const mpStateToProps = (state) => {
    return {
        dashboard: state.dashboard,

    }
}
export default connect(mpStateToProps)(Dashboard);