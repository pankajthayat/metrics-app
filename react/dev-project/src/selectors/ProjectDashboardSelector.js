
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