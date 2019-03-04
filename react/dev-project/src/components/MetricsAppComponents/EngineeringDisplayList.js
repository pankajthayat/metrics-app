import React from 'react'
import { connect } from 'react-redux'
import { getMonthName } from "../CommonFunctions/CommonFunctions";
import EngineeringList from './EngineeringList';

class EngineeringDisplayList extends React.Component {
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">POD Name</th>
                            <th className="text-center">Month</th>
                            <th className="text-center">Year</th>
                            <th className="text-center">Release</th>
                            <th className="text-center">Iteration</th>
                            <th className="text-center">Code Quality Cyclometric</th>
                            <th className="text-center">Technical Code</th>
                            <th className="text-center">Unit Test</th>
                            <th className="text-center">Maintainability Quality</th>
                            <th className="text-center">Comments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*<tr>
                            <td className="text-center">{this.props.podName} </td>
                            <td className="text-center">{getMonthName(this.props.periodMonth)}</td>
                            <td className="text-center">{this.props.periodYear}</td>
                            <td className="text-center">{this.props.release}</td>
                            <td className="text-center">{this.props.iteration}</td>
                            <td className="text-center">{this.props.cyclometricCode}</td>
                            <td className="text-center">{this.props.technicalCode}</td>
                            <td className="text-center">{this.props.unitTest}</td>
                            <td className="text-center">{this.props.maintainabilityQuality}</td>
                            <td className="text-center">{this.props.comments}</td>
                        </tr>*/}
                        
                            {
                                this.props.lists.map((item, index) => (<EngineeringList key={index} index={index} item={item} history={this.props.history} />))
                            }
                        
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
        engineering: state.engineering.item,
        lists: state.lists
    }
}

export default connect(mapStateToProps)(EngineeringDisplayList)
