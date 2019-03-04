import React from "react"
import { Line } from 'react-chartjs-2';

export default class LineChart extends React.Component {
    render() {
        return (
            <div>

                <div className="chart">
                    <Line
                        data={this.props.chartData}
                        options={{
                            title: {
                                display: true,                                
                                fontSize: 10
                            },
                            legend: {
                                display: true,
                                position: "bottom",
                                fontSize: 10
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}





