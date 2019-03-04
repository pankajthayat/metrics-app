import React from "react";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import analyticsSelector from "../../selectors/AnalyticsSelector";
import * as agileDataSets from "./agile_analytics/agileDatasets";
import * as devopsDataSets from "./devops_analytics/devopsDatasets";
import * as enggDatasets from "./engg_analytics/engineeringDatasets";
const style=
{
      color: 'white',
      textAlign: 'center',
      alignSelf: 'center' //if style using flexbox
}
export default (analytics, year, project, metricType) => {
    if (metricType == "Sprint") {
        let filteredData = analyticsSelector(analytics.agileData, year, project)
        return ( <div>
            <h3 style={style}><strong>{"Sprint Report for "+year +" Of "+project }</strong>
            </h3>
        <div className="row">
        <div className="col-md-6">
            <LineChart chartData={agileDataSets.forLineChart1(filteredData)} text={""} display={true}/>
           </div>
            <div className="col-md-6">
            <LineChart chartData={agileDataSets.forLineChart2(filteredData)} text="" display={false}/>
            </div>
            <br/>
            <div className="col-md-6">
            <BarChart barData={agileDataSets.forBarChart1(filteredData)}  text="" display={false}/>
           </div>
            <div className="col-md-6">
            <BarChart barData={agileDataSets.forBarChart2(filteredData)}  text="" display={false}/>
            </div>
        </div>
        </div>
        )
    }
    else if (metricType == "Release") {
        let filteredData = analyticsSelector(analytics.devopsData, year, project)
        return ( 
         <div>
             <h3 style={style}><strong>{"Release Report for "+year +" Of "+project }</strong>
         </h3>
         <div className="row">
            <div className="col-md-6">
            <LineChart chartData={devopsDataSets.forLineChart(filteredData)} text={""} display={true} />
            </div>
            <div className="col-md-6">
            <BarChart barData={devopsDataSets.forBarChart(filteredData)}  text="" display={false}/>
            </div>
            </div>
        </div>)
    }
    else if (metricType == "Engineering") {
        let filteredData = analyticsSelector(analytics.engineeringData, year, project)
        return (<div>
            <h3 style={style}><strong>{ "Engineering Report for "+year +" Of "+project}</strong>
            </h3>
        <div className="row">
            <div className="col-md-6">
            <LineChart chartData={enggDatasets.forLineChart(filteredData)} text={""} display={true} />
            </div>
            <div className="col-md-6">
            <BarChart barData={enggDatasets.forBarChart(filteredData)} text=""display={false}/>
            </div>
            </div>
        </div>)
    }

}