import React from 'react'
import { connect } from 'react-redux'
import AgileList from './AgileList'

class AgileDisplayList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10" id = "table_align">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-sm table-head border">
                            <thead>
                                <tr>
                                    {/*<th className="text-center text-header">POD Name</th>
                            <th className="text-center text-header">Month</th>
                            <th className="text-center text-header">Year</th>*/}
                                    <th className="text-center head" colSpan="2">Action</th>
                                    <th className="text-center head">Iteration</th>
                                    <th className="text-center head">Cognizant Team Size</th>
                                    <th className="text-center head">Telstra Team Size</th>
                                    <th className="text-center head">Cognizant Holiday</th>
                                    <th className="text-center head">Cognizant Leaves</th>
                                    <th className="text-center head">Telstra Holiday</th>
                                    <th className="text-center head">Telstra Leaves</th>
                                    <th className="text-center head">Iteration Number</th>
                                    <th className="text-center head">UserStory Committed</th>
                                    <th className="text-center head">UserStory Accepted</th>
                                    <th className="text-center head">Committed Story Points</th>
                                    <th className="text-center head">Accepted Story Points</th>
                                    <th className="text-center head">Accepted Story Points/Week</th>
                                    <th className="text-center head">Unit Test Coverage</th>
                                    <th className="text-center head">Average Cycle Time(hr)</th>
                                    <th className="text-center head">Velocity Rate</th>
                                    <th className="text-center head">Commitment Reliability</th>
                                    <th className="text-center head">Comments</th>


                                </tr>
                            </thead>
                            {this.props.lists.items.length == 0 ? <tbody>* no data</tbody> :
                                <tbody>
                                    {
                                        this.props.lists.items.map((item, index) => (<AgileList key={index} index={index} item={item} />))
                                    }
                                </tbody>}
                        </table>
                    </div>
                </div>
                <div className="col-md-1"></div>
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
