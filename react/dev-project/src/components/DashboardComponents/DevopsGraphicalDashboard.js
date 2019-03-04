import React from 'react';
import BarChart from "./BarChart";
import { releaseDescription, prodDevFrequency, successfulDeploys, postProdDefectsCritical, postProdDefectsHigh, postProdDefectsMedium, postProdDefectsLow, totalDefects, openDefects } from "./DataForChartsForDashboard"
import DashboardFilters from "./DashboardFilters"

export default class DevopsGraphicalDashboard extends React.Component {
    chartData = (filteredData) => (
        {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
            datasets: [
                {
                    label: 'Deployment Frequency(Prod)',
                    data: prodDevFrequency(filteredData),
                    backgroundColor: '#ffff66',

                },
                {
                    label: 'Percentage of Successful Deployments',
                    data: successfulDeploys(filteredData),
                    backgroundColor: '#ff99ff',

                },
                {
                    label: 'Post Production Defects Critical',
                    data: postProdDefectsCritical(filteredData),
                    backgroundColor: '#ff3300',

                },
                {
                    label: 'Post Production Defects High',
                    data: postProdDefectsHigh(filteredData),
                    backgroundColor: '#00ffff',

                },
                {
                    label: 'Post Production Defects Medium',
                    data: postProdDefectsMedium(filteredData),
                    backgroundColor: '#66ff66',

                },
                {
                    label: 'Post Production Defects Low',
                    data: postProdDefectsLow(filteredData),
                    backgroundColor: '#ffcc99',

                },
                {
                    label: 'Total Defects (CAT)',
                    data: totalDefects(filteredData),
                    backgroundColor: '#ff9933',

                },
                {
                    label: 'Open Defects (CAT)',
                    data: openDefects(filteredData),
                    backgroundColor: '#0066ff',
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
                    <DashboardFilters metricType="Devops" handleOnChange={handleOnChange} year={year} month={month} />
                    <br />
                    <br />
                    <BarChart chartData={this.chartData(this.props.devopsData)} />

                </div>
            </div>
        );
    }

}

