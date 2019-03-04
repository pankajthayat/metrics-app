import * as dataForDevopsChart from "./dataForDevopsChart";

export const forLineChart=(metricData)=>{
    return({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                    datasets: [{
                        label: 'Deployment Prod Frequency',
                        data: dataForDevopsChart.deploymentProdFrequency(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                    },
                    {
                        label: 'Open Defects',
                        data: dataForDevopsChart.openDefects(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(54, 162, 235, 0.6)',
                    },
                    {
                        label: 'Total Defects',
                        data: dataForDevopsChart.totalDefects(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255, 206, 86, 0.6)',
                    },
                    {
                        label: 'Failed Deployment',
                        data: dataForDevopsChart.failedDeployment(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(75, 192, 192, 0.6)',
                    },
                    {
                        label: '% Successful Deployment',
                        data: dataForDevopsChart.successfulDeploys(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(153, 102, 255, 0.6)'
                    }
                    ]
    })
}


export const forBarChart=(metricData)=>{
    return({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                    datasets: [        {
                        label: 'Deployment Prod Frequency',
                        data: dataForDevopsChart.deploymentProdFrequency(metricData),
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',


                    },
                    {
                        label: 'Open Defects',
                        data: dataForDevopsChart.openDefects(metricData),
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        
                    },
                    {
                        label: 'Total Defects',
                        data: dataForDevopsChart.totalDefects(metricData),
                        backgroundColor: 'rgba(255, 206, 86, 0.6)',
                    
                    },
                    {
                        label: 'Failed Deployment',
                        data: dataForDevopsChart.failedDeployment(metricData),
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',

                    },
                    {
                        label: '% Successful Deployment',
                        data: dataForDevopsChart.successfulDeploys(metricData),
                        backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    }]
    }
                )
}