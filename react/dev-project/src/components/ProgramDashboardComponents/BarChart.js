import React from "react";
import { Bar } from 'react-chartjs-2';

export default class BarChart extends React.Component {
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.props.barData}
                    options={{
                        title: {
                            display: true,

                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }}
                />
            </div>
        )
    }
}