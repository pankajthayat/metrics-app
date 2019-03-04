import React from 'react'
import { connect } from 'react-redux'
import "../../style/tableStyles.css";
import { getMonthName } from "../CommonFunctions/CommonFunctions";

class AgileDisplayList extends React.Component {

    render() {
        return (
            <div>
               <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">POD Name</th>
                            <th className="text-center">Month</th>
                            <th className="text-center">Year</th>
                            <th className="text-center">Iteration</th>
                            <th className="text-center">Cognizant Team Size</th>
                            <th className="text-center">Telstra Team Size</th>
                            <th className="text-center">Number Of Holidays</th>
                            <th className="text-center">Number of Days Leave in Person Days</th>
                            <th className="text-center">Iteration Number</th>
                            <th className="text-center">Velocity</th>
                            <th className="text-center">Planned Velocity</th>
                            <th className="text-center">Rejection Rate</th>
                            <th className="text-center">Average Cycle Time</th>
                            <th className="text-center">Velocity Rate</th>
                            <th className="text-center">Commitment Reliability</th>
                            <th className="text-center">Velocity/Week</th>
                            <th className="text-center">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">{this.props.podName} </td>
                            <td className="text-center">{getMonthName(this.props.month)}</td>
                            <td className="text-center">{this.props.year}</td>
                            <td className="text-center">{this.props.iteration}</td>
                            <td className="text-center">{this.props.cognizantTeamSize}</td>
                            <td className="text-center">{this.props.telstraTeamSize}</td>
                            <td className="text-center">{this.props.numberOfHolidays}</td>
                            <td className="text-center">{this.props.numberOfLeavesInPersonDays}</td>
                            <td className="text-center">{this.props.iterationNumber}</td>
                            <td className="text-center">{this.props.velocity}</td>
                            <td className="text-center">{this.props.plannedVelocity}</td>
                            <td className="text-center">{this.props.rejectionRate}</td>
                            <td className="text-center">{this.props.averageCycle}</td>
                            <td className="text-center">{this.props.velocityRate}</td>
                            <td className="text-center">{this.props.commitmentReliability}</td>
                            <td className="text-center">{this.props.velocityPerWeek}</td>
                            <td className="text-center">{this.props.comments}</td>
                        </tr>
                    </tbody>
                </table>
<br />
            </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        podContent: state.podContent,
        agile: state.agile.item,
        lists: state.lists
    }
}

export default connect(mapStateToProps)(AgileDisplayList)
