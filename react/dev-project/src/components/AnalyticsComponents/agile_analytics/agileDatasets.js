import * as dataForAgile from "./dataForAgileChart"

export const forLineChart1=(filteredData)=>{
    return(
        {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                    datasets: [
                        {
                            label: 'Commitment Reliability',
                            data: dataForAgile.averageCommitmentReliability(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#ffff66',
                        },
        
                        {
                            label: 'Average Cycle',
                            data: dataForAgile.averageCycleTime(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#ff99ff',
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
                            label: 'Cognizant team size',
                            data: dataForAgile.cognizantTeamSize(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#ff3300',
                        },
                
                        {
                            label: 'Average Velocity Rate',
                            data: dataForAgile.averageVelocityRate(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#00ffff',
                        },
                        {
                            label: 'Average Velocity/Week',
                            data: dataForAgile.averageVelocityPerWeek(filteredData),
                            backgroundColor: 'transparent',
                            borderColor: '#66ff66'
                        }
                    ]
    })
}

export const forBarChart1=(filteredData)=>{
    return({
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                    datasets:
                    [
                        {
                            label: 'Commitment Reliability',
                            data: dataForAgile.averageCommitmentReliability(filteredData),
                            backgroundColor: '#ff3300'

                        },
                        {
                            label: 'Average Cycle',
                            data: dataForAgile.averageCycleTime(filteredData),
                            backgroundColor: '#ff9933'

                        }
                    ]
    })
}

 export const forBarChart2=(filteredData)=>{
    return({
         labels: ['January', 'February', 'March', 'April', 'May', 'June', "July", "August", "September", "October", "November", "December"],
                    datasets:
                    [
                        {
                            label: 'Cognizant team size',
                            data: dataForAgile.cognizantTeamSize(filteredData),
                            backgroundColor: '#ff6666'

                        },

                        {
                            label: 'Average Velocity Rate',
                            data: dataForAgile.averageVelocityRate(filteredData),
                            backgroundColor: '#ffff66'

                        },
                        {
                            label: 'Average Velocity/Week',
                            data: dataForAgile.averageVelocityPerWeek(filteredData),
                            backgroundColor: '#00ffff',

                        }
                    ]
    })
}
