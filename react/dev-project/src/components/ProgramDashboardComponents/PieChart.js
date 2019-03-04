import React from "react"
import { Pie } from 'react-chartjs-2';

export default class LineChart extends React.Component {
    render() {
        return (
            <div>

                <div className="chart">
                    <Pie
                        data={this.props.chartData}
                        options={{
                            title: {
                                display: true,
                                fontSize: 10
                            },
                            legend: {
                                display: true,
                                position: "bottom",
                                fontSize: 10,
                                labels: {
                                    fontColor: 'white'
                                }
                            },
                            label: {
                                color: 'white'
                            },

                            tooltips: {
                                callbacks: {
                                    afterLabel: function () {
                                        return '%';
                                    }

                                }
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}





