import React from "react";
import { connect } from "react-redux"
import analyticsSelector from "../../selectors/ProjectDashboardSelector"
import { getYearById, getYearId } from "../CommonFunctions/CommonFunctions"
import "../../style/projectDashboard.css";

class FilterProjectDashboard extends React.Component {
    // constructor() {
    //     super()
    //     this.year = undefined;
    //     this.project = undefined;
    // }
    render() {
        let { handleOnChange, year, project, podContent } = this.props;
        return (
            <div className="row" >

                <div className="col-md-3 filterBy">
                    <select class="form-control" name="year" value={year} onChange={(e) => { handleOnChange(e, "year") }} >
                        <option key="year" >Year</option>
                        <option key="2015" >2015</option>
                        <option key="2016" >2016</option>
                        <option key="2017" >2017</option>
                        <option key="2018" >2018</option>
                        <option key="2019" >2019</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <select class="form-control" name="project" value={project} onChange={(e) => { handleOnChange(e, "project") }} >
                        <option key="" >Project</option>
                        {
                            podContent.pods.map((pod) => (<option key={pod.podName} >{pod.podName}</option>))
                        }
                    </select>
                </div>
               
            </div>
        )
    }
}

export default connect((state) => ({ podContent: state.podContent, projectDashboard: state.projectDashboard }))(FilterProjectDashboard)