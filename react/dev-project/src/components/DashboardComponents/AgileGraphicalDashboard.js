import React from 'react';
import { averageCommitmentReliability, averageRejectionRate, averageCycleTime, averageVelocityRate, telstraTeamSize, cognizantTeamSize, velocityPerWeek, unitTestCoverage } from "./DataForChartsForDashboard";
import BarChart from "./BarChart";
import DashboardFilters from "./DashboardFilters"

export default class AgileGraphicalDashboard extends React.Component {
    chartData = (filteredData) => {
        return {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: 'Cognizant team size',
                    data: cognizantTeamSize(filteredData),
                    backgroundColor: '#00ffff',

                },
                {
                    label: 'Telstra Team Size',
                    data: telstraTeamSize(filteredData),
                    backgroundColor: '#ffff66',

                },
                {
                    label: 'Average Velocity Rate',
                    data: averageVelocityRate(filteredData),
                    backgroundColor: '#66ff66',

                },
                {
                    label: 'Commitment Reliability',
                    data: averageCommitmentReliability(filteredData),
                    backgroundColor: '#ff99ff',

                },
                {
                    label: 'Unit Test Coverage %',
                    data: unitTestCoverage(filteredData),
                    backgroundColor: '#0066ff',

                },
                {
                    label: 'Velocity Per Week',
                    data: velocityPerWeek(filteredData),
                    backgroundColor: '#ff9933',
                },
                {
                    label: 'Average Cycle Time',
                    data: averageCycleTime(filteredData),
                    backgroundColor: '#ffcc99',
                }
            ]

        }
    }
    render() {
        let {year, month, handleOnChange} = this.props;
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <DashboardFilters metricType="Agile" handleOnChange={handleOnChange} year={year} month={month} />
                    <br /><br />
                    <BarChart chartData={this.chartData(this.props.agileData)} />
                </div>
            </div>
        );
    }
}

