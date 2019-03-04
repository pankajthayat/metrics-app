import * as dataForCharts from "../agile_analytics/dataForAgileChart";

export const forLineChart=(metricData)=>{
    return{
        labels :['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                datasets: [
                    {
                        label: 'Commitment Reliability',
                        data: dataForCharts.averageCommitmentReliability(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                    },
                    {
                        label: 'Cognizant team size',
                        data: dataForCharts.cognizantTeamSize(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(54, 162, 235, 0.6)',
                    },
                    {
                        label: 'Average Cycle Time',
                        data: dataForCharts.averageCycleTime(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255, 206, 86, 0.6)',
                    },
                    {
                        label: 'Average Velocity Rate',
                        data: dataForCharts.averageVelocityRate(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(75, 192, 192, 0.6)',
                    },
                    {
                        label: 'Average Velocity/Week',
                        data: dataForCharts.averageVelocityPerWeek(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(153, 102, 255, 0.6)'
                    }
                ],
                options: {
					responsive: true,
					title: {
						display: true,
						text: 'Sample tooltip with border'
					},
					tooltips: {
						position: 'nearest',
						mode: 'index',
						intersect: false,
						yPadding: 10,
						xPadding: 10,
						caretSize: 8,
						backgroundColor: 'rgba(72, 241, 12, 1)',
						titleFontColor: "rgba(34,34,34,0.2)",
						bodyFontColor: "rgba(34,34,34,0.2",
						borderColor: 'rgba(0,0,0,1)',
						borderWidth: 4
					}
                }
            }
}



export const forBarChart=(metricData)=>{
    return{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                datasets: [
                    {
                        label: 'Commitment Reliability',
                        data: dataForCharts.averageCommitmentReliability(metricData),
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',


                    },
                    {
                        label: 'Cognizant team size',
                        data: dataForCharts.cognizantTeamSize(metricData),
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        
                    },
                    {
                        label: 'Average Cycle Time',
                        data: dataForCharts.averageCycleTime(metricData),
                        backgroundColor: 'rgba(255, 206, 86, 0.6)',
                    
                    },
                    {
                        label: 'Average Velocity Rate',
                        data: dataForCharts.averageVelocityRate(metricData),
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',

                    },
                    {
                        label: 'Average Velocity/Week',
                        data: dataForCharts.averageVelocityPerWeek(metricData),
                        backgroundColor: 'rgba(153, 102, 255, 0.6)',
                        

                    }
                ]
    }
}