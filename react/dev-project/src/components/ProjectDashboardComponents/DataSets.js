import * as dataforProjectDB from "./Data";

export const forLineChart1=(filteredData)=>{
    return(
        {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: 'Telstra team size',
                            data: dataforProjectDB.TelstraTeamSize(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: 'yellow',
                        },
                        {
                            label: 'Cognizant team size',
                            data: dataforProjectDB.CognizantTeamSize(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#ffccff',
                        }
                    ]
                    
                }
                
    )
}

export const forLineChart2=(filteredData)=>{
    return({
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                    datasets: [
                       
                        {
                            label: 'Commitment Reliability',
                            data: dataforProjectDB.commitmentReliability(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#00ff00',
                        },
                
                        {
                            label: 'Unit test coverage',
                            data: dataforProjectDB.unitTestCoverage(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#ff6600',
                        },
                        {
                            label: 'Successful Deployments',
                            data: dataforProjectDB.successfulDeploys(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#ff66cc'
                        }
                    ]
    })
}

export const forLineChart3=(filteredData)=>{
    return({
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                    datasets: [
                       
                        {
                            label: 'Average Velocity/Week',
                            data: dataforProjectDB.AvgVelocityPerWeek(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#00ffff',
                        },
                
                        {
                            label: 'Code Quality Technical',
                            data: dataforProjectDB.CodeQualityTechnical(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#ffffcc',
                        },
                        {
                            label: 'PPD Severity 1',
                            data: dataforProjectDB.PostProdDefectsCritical(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#9999ff'
                        }
                    ]
    })
}