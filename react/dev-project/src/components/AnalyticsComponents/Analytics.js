import React from "react";
import { connect } from "react-redux"
import { Bar, Line, Pie } from 'react-chartjs-2';
import FilterAnalytics from "./FilterAnalytics";
import axios from 'axios';
import '../../style/analytics.css';
import analyticsSelector from "../../selectors/AnalyticsSelector";
import { defaultAnalyticsData } from "../../selectors/AnalyticsSelector";
import { addAgileDataForAnalytics, addDevOpsDataForAnalytics, addEngineeringDataForAnalytics } from "../../actions/analyticsActions";
import * as url from "../Constants/constants"
import renderChart from "./renderChart";
import ScrollBar from "../Scroll/scroll";

class Analytics extends React.Component {
        state={
            year:new Date().getFullYear(),
            project:"Self Care - Speed",
            metricType:"Sprint"
            }

    handleOnChange = (e, changeType) => {
        e.persist();
        const onChangeValue = e.target.value;
        if (changeType == "year") {
            this.setState({year:onChangeValue})
        }
        else if (changeType == "project") {
            this.setState({project:onChangeValue})
        }
        else {
            this.setState({metricType:onChangeValue})
        }
    }
    render() {
        let { analytics,isPending }=this.props;
        return (
                <div className="img-analytics">
                    <br />
                    <FilterAnalytics handleOnChange={this.handleOnChange} year={this.state.year} project={this.state.project} metricType={this.state.metricType}/>
                    <br />
                    
                    {
                        renderChart(analytics, this.state.year,this.state.project,this.state.metricType)
                    }
                  
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        analytics: state.analytics,
        isPending:state.analytics.isPending,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onRequestAgileData:()=>dispatch(addAgileDataForAnalytics()),
        onRequestDevOpsData:()=>dispatch(addDevOpsDataForAnalytics()),
        onRequestEngineeringData:()=>dispatch(addEngineeringDataForAnalytics()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Analytics);