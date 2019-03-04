import React from 'react'
import { connect } from 'react-redux'
import { getMonthName } from "../CommonFunctions/CommonFunctions";


class DevOpsDisplayList extends React.Component {

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">POD Name</th>
                            <th className="text-center">Month</th>
                            <th className="text-center">Year</th>
                            <th className="text-center">Deployement Frequency(Prod)</th>
                            <th className="text-center">Release Name</th>
                            <th className="text-center">Release Date</th>
                            <th className="text-center">Release Description</th>
                            <th className="text-center">Release Type</th>
                            <th className="text-center">Percentage of Failed Deployments (Prod)</th>
                            <th className="text-center">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">{this.props.podName} </td>
                            <td className="text-center">{getMonthName(this.props.periodMonth)}</td>
                            <td className="text-center">{this.props.periodYear}</td>
                            <td className="text-center">{this.props.prodDevFreq}</td>
                            <td className="text-center">{this.props.releaseName}</td>
                            <td className="text-center">{this.props.releaseDate}</td>
                            <td className="text-center">{this.props.releaseDesc}</td>
                            <td className="text-center">{this.props.releaseType}</td>
                            <td className="text-center">{this.props.percentageFailed}</td>
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
        devops: state.devops.item,
        lists: state.lists
    }
}

export default connect(mapStateToProps)(DevOpsDisplayList)
