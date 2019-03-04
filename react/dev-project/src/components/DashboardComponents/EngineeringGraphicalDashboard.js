import React from 'react';
import { averageCyclometricCode, averageTechnicalCode, averageMaintainabilityIndex, averageSecurityDefects } from "./DataForChartsForDashboard";
import BarChart from "./BarChart";
import DashboardFilters from "./DashboardFilters"

export default class EngineeringGraphicalDashboard extends React.Component {
    chartData = (filteredData) => (
        {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: 'Code Quality Cyclometric',
                    data: averageCyclometricCode(filteredData),
                    backgroundColor: '#ff9933',
                },
                {
                    label: 'Code Quality Technical',
                    data: averageTechnicalCode(filteredData),
                    backgroundColor: '#ffff66',
                },
                {
                    label: 'Number of Security Defects Identified',
                    data: averageSecurityDefects(filteredData),
                    backgroundColor: '#00ffff',
                }
            ]
        }
    )

    render() {
        let {year, month, handleOnChange} = this.props;
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <DashboardFilters metricType="Engineering" handleOnChange={handleOnChange} year={year} month={month} />
                    <br /><br />
                    <BarChart chartData={this.chartData(this.props.enggData)} />

                </div>
            </div>
        );
    }
}
