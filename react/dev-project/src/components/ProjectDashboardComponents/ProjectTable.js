import React from 'react';
import ProjectRow from './ProjectRow';
import { connect } from "react-redux";
import "../../style/projectDashboard.css";
class ProgramTable extends React.Component {
    render() {
        return (<div>
            <div className="row ">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-sm project-table table-head">
                        <tbody>
                            <tr >
                                <th className='head'>Year</th>
                                <th className='head'>Month</th>
                                <th className='head'>Telstra Team Size</th>
                                <th className='head'>Cognizant Team Size</th>
                                <th className='head'>Commitment Reliability</th>
                                <th className='head'>Unit Test Coverage</th>
                                <th className='head'>Average Velocity/Week</th>
                                <th className='head'>Tech Debts</th>
                                <th className='head'>Code Quality Cyclometric</th>
                                <th className='head'>Successful Deployments</th>
                                <th className='head' title="Post production defects reported within 2 weeks of release">Post production defects</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.props.programData.map((item, index) => (<ProjectRow key={index} index={index} item={item} history={this.props.history} />))
                            } 
                        </tbody>
                    </table>
                    <br />
                </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.projectDashboard.projectDashboard)
    return {
        projectDashboard: state.projectDashboard
        
    }
}

export default connect(mapStateToProps)(ProgramTable);