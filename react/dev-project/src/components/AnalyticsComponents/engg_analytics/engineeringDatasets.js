import * as dataForEnggDatasets from "./dataForEnggCharts";

export const forLineChart=(metricData)=>{
    return({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                    datasets: [{
                        label: 'Cyclo Metric Code',
                        data: dataForEnggDatasets.cyclometricCode(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255, 99, 132, 0.6)',
                    },
                    {
                        label: 'Technical Code',
                        data: dataForEnggDatasets.technicalCode(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(54, 162, 235, 0.6)',
                    },
                    {
                        label: 'Security Defects',
                        data: dataForEnggDatasets.securityDefects(metricData),
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(75, 192, 192, 0.6)',
                    }
                    ]
    })
}


export const forBarChart=(metricData)=>{
    return({
            labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                    datasets: [        {
                        label: 'Cyclo Metric Code',
                        data: dataForEnggDatasets.cyclometricCode(metricData),
                        backgroundColor: 'rgba(255, 99, 132, 0.6)',


                    },
                    {
                        label: 'Technical Code',
                        data: dataForEnggDatasets.technicalCode(metricData),
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        
                    },
                    {
                        label: 'Security Defects',
                        data: dataForEnggDatasets.securityDefects(metricData),
                        backgroundColor: 'rgba(75, 192, 192, 0.6)',

                    }]
    }
                )
}