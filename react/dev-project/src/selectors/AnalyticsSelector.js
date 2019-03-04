
export default (metric = [], year = undefined, project = undefined) => {
    return (((metric.filter((data) => {
        if (year === undefined || year == "Year")
            return data.year !== year;
        else
            return data.year == year;

    }
    )).filter((data) => {
        if (project == undefined || project == "Project") {
            return data.podName !== undefined;
        }
        else {
            return data.podName == project;
        }

    })).sort((a, b) => a.month - b.month))

}

export const defaultAnalyticsData =(metric=[],year=2018)=>{
    let sortedMetric=metric.sort((a,b)=>a.month-b.month);
     let j=0;
     let finalData=new Array();
     finalData.push(sortedMetric[0]);

for(let i=1;i<sortedMetric.length;i++)
{
 if(sortedMetric[i].month==finalData[j].month)
 {
     finalData[j].averageCommitmentReliability+=sortedMetric[i].averageCommitmentReliability
     finalData[j].averageCycle+=sortedMetric[i].averageCycle;
     finalData[j].cognizantTeamSize+=sortedMetric[i].cognizantTeamSize;
     finalData[j].averageVelocityRate+=sortedMetric[i].averageVelocityRate;
     finalData[j].averageVelocityPerWeek+=sortedMetric[i].averageVelocityPerWeek
     
 }else
 {
    finalData.push(sortedMetric[i]);
    j++;
 }
}
return finalData;

}