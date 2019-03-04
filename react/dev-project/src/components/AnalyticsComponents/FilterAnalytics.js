import React from "react";
import { connect } from "react-redux"
import analyticsSelector from "../../selectors/AnalyticsSelector"
import { getYearById, getYearId } from "../CommonFunctions/CommonFunctions"

class FilterAnalytics extends React.Component {
    render() {
        let { handleOnChange, year, project, metricType, podContent } = this.props;
        return (
            <div className="row" >
                <div className="col-md-3">
                    </div>
                <div className="col-md-2">
                    <select className="form-control" name="year" value={year} onChange={(e) => { handleOnChange(e, "year") }} >
                        <option key="2015" >2015</option>
                        <option key="2016" >2016</option>
                        <option key="2017" >2017</option>
                        <option key="2018" >2018</option>
                        <option key="2019" >2019</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <select className="form-control" name="project" value={project} onChange={(e) => { handleOnChange(e, "project") }} >
                        {
                            podContent.pods.map((pod) => (<option key={pod.podName} >{pod.podName}</option>))
                        }
                    </select>
                </div>

                <div className="col-md-2">
                    <select className="form-control" name="metric" value={metricType} onChange={(e) => { handleOnChange(e, "metric") }} >
                        <option key="agile" > Sprint </option>
                        <option key="devops" >Release</option>
                        <option key="engineering" >Engineering</option>
                    </select>
                </div>
                <div className="col-md-3">
                    </div>
            </div>
        )
    }
}

export default connect((state) => ({ podContent: state.podContent, analytics: state.analytics }))(FilterAnalytics)