import React from "react";
import { Pie } from 'react-chartjs-2';

export default class PieChart extends React.Component {
    render() {
        return (
            <div className="chart">
                <Pie
                    data={this.props.chartData}
                    options={{
                        title: {
                            display: this.props.display,
                            text: this.props.text,
                            fontSize: 25
                        },
                        legend: {
                            labels:{    
                                boxWidth:50
                                },
                            display: true,
                            position: "right",
                            onHover: function (event,chartElement) {
                                    event.target.style.cursor = 'pointer' 
                        
                            },
                            tooltips: {
                                mode: 'label',
                            }
                        },
                        onHover: function (event,chartElement) {
                                    event.target.style.cursor = 'default';
                        
                            }
                    }}
                />
            </div>
        )
    }
}
