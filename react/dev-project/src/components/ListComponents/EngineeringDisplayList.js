import React from 'react'
import { connect } from 'react-redux'
import EngineeringList from './EngineeringList';

class EngineeringDisplayList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10" id = "table_align">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-sm table-head border">
                            <tbody>
                                <tr>
                                    {/*<th className="text-center text-header">POD Name</th>
                            <th className="text-center text-header">Month</th>
                            <th className="text-center text-header">Year</th>*/}
                                    <th className="text-center head" colSpan="2">Action</th>
                                    <th className="text-center head">Code Quality Cyclometric</th>
                                    <th className="text-center head">Technical Code</th>
                                    <th className="text-center head">Maintainability Quality</th>
                                    <th className="text-center head">Security Defects</th>
                                    <th className="text-center head">Comments</th>

                                </tr>
                            </tbody>
                            {this.props.lists.items.length == 0 ? <tbody>*no data</tbody> :
                                <tbody>
                                    {
                                        this.props.lists.items.map((item, index) => (<EngineeringList key={index} index={index} item={item} />))
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
        engineering: state.engineering.item,
        lists: state.lists
    }
}

export default connect(mapStateToProps)(EngineeringDisplayList)
