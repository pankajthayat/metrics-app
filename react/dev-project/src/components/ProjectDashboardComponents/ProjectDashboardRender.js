import React from "react";
import { connect } from 'react-redux'
import ProjectDashboard from './ProjectDashboard';
import '../../style/projectDashboard.css';

class ProjectDashboardRender extends React.Component {
    render() {
        return (
            <div className="img-project">
                <label>&nbsp;</label>
                <div className="row">
                    <div></div>
                    <div className="col-md-12">
                        <ProjectDashboard agileData={this.props.analytics.agileData}
                            devOpsData={this.props.analytics.devopsData}
                            engineeringData={this.props.analytics.engineeringData} />
                    </div>
                    <div></div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        analytics: state.analytics

    }
}
export default connect(mapStateToProps)(ProjectDashboardRender);