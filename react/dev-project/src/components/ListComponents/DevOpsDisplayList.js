import React from 'react'
import { connect } from 'react-redux'
import DevOpsList from './DevOpsList'
import '../../style/devops.css';

class DevOpsDisplayList extends React.Component {
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
                                    <th className="text-center head">Release Name</th>
                                    <th className="text-center head releaseName-head" >Release Date</th>
                                    <th className="text-center head">Release Description</th>
                                    <th className="text-center head">Release Type</th>
                                    <th className="text-center head">Total Deployments Attempted</th>
                                    <th className="text-center head">Roll backs</th>
                                    <th className="text-center head">Total Defects</th>
                                    <th className="text-center head">No of Open Defects</th>
                                    <th className="text-center head">Post Production Critical Defects</th>
                                    <th className="text-center head">Post Production High Defects</th>
                                    <th className="text-center head">Post Production Medium Defects</th>
                                    <th className="text-center head">Post Production Low Defects</th>
                                    <th className="text-center head">% Successful Deployements</th>
                                    <th className="text-center head">Comments</th>

                                </tr>
                            </thead>
                            {this.props.lists.items.length == 0 ? <tbody>*no data</tbody> :
                                <tbody>
                                    {
                                        this.props.lists.items.map((item, index) => (<DevOpsList key={index} index={index} item={item} />))
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
        devops: state.devops.item,
        lists: state.lists
    }
}

export default connect(mapStateToProps)(DevOpsDisplayList)
