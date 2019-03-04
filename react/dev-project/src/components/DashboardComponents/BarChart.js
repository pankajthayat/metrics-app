import React from "react";
import { Bar } from 'react-chartjs-2';

export default class BarChart extends React.Component {
    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.props.chartData}
                    options={{
                        title: {
                            display: this.props.display,
                            fontSize: 25
                        },
                        legend: {
                            labels:{    
                                boxWidth:50,
                                fontColor:'white'
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
                        
                            },
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        fontColor: "white",

                                    },
                                    gridLines: {
                                        display: true,
                                        color: '#808080'
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        fontColor: "white",
                                      },
                                        gridLines: {
                                            display: true,
                                            color: '#808080'
                                        },
                                }]
                            }
                    }}
                />
            </div>
        )
    }
}