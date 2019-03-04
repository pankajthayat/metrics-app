import React from 'react';
import axios from 'axios'
import FilterProjectDashboard from "./FilterProjectDashboard"
import projectDashboardSelector from "../../selectors/ProjectDashboardSelector"
import { Bar,Pie,Line } from 'react-chartjs-2';
import { connect } from "react-redux";
import LineChart from "../charts/LineChart"
import { addProjectDashboardData } from "../../actions/projectDashboardAction";
import * as dataSets from "./DataSets";
import ProjectTable from './ProjectTable';
import "../../style/projectDashboard.css";
import { TelstraTeamSize, CognizantTeamSize, commitmentReliability, unitTestCoverage, AvgVelocityPerWeek, CodeQualityTechnical,successfulDeploys,PostProdDefectsCritical } from "./Data"
class ProjectDashboard extends React.Component 
{
        state = {
            year:2019,
            project:"Selfcare"
        }
    componentWillMount() 
    {
        axios.get("http://localhost:8080/metrics-app/v1/api/dashboard/load_project_dashboard").then(res => {
            this.props.dispatch(addProjectDashboardData(res.data))
        })
    }

    handleOnChange = (e, changeType) => 
    {
        e.persist();
        const onChangeValue = e.target.value;
        if (changeType == "year") {
            this.setState({year:onChangeValue})
        }
        else {
            this.setState({project:onChangeValue})
        }
        
    }

    render() 
    {
       
        this.filteredData = projectDashboardSelector(this.props.projectDashboard.projectDasboard, this.state.year, this.state.project)
        console.log(this.filteredData)
        return (
            <div>
                
            <div className="filterbY">     
                <FilterProjectDashboard handleOnChange={this.handleOnChange} year={this.state.year} project={this.state.project}/>
            </div>
            <br />
            <div className="row">
                    <div className="col-lg-6"><LineChart className="lineChart1" chartData={dataSets.forLineChart1(projectDashboardSelector(this.filteredData, this.state.year, this.state.project))} text="" /></div>
                    <div className="col-lg-6"><LineChart className="lineChart2" chartData={dataSets.forLineChart2(projectDashboardSelector(this.filteredData, this.state.year, this.state.project))} text=""/></div>
                    <div className="col-lg-6 lineChart3"><LineChart chartData={dataSets.forLineChart3(projectDashboardSelector(this.filteredData, this.state.year, this.state.project))} text=""/></div>
            </div>
             <br />
                <div className="row">
                        <ProjectTable programData={this.filteredData} />
                </div><br />
           </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projectDashboard: state.projectDashboard
    }
}

export default connect(mapStateToProps)(ProjectDashboard);
