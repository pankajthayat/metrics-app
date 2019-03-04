import React from 'react';
import AgileRow from './AgileRow';


class AgileTableData extends React.Component {
    render() {
        return (
                <div className="table-responsive">
                    <table className="table-bordered table-head" >
                        <tbody>
                            <tr >
                                <th className="head">Year</th>
                                <th className="head">Month</th>
                                <th className="head">Cognizant Team Size</th>
                                <th className="head">Testra Team Size</th>
                                <th className="head">Average Velocity Rate</th>
                                <th className="head">Commitment Reliability</th>
                                <th className="head">Unit Test Coverage %</th>
                                <th className="head">Velocity Per Week</th>
                                <th className="head">Average Cycle Time</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {
                                this.props.agileData.map((item, index) => (<AgileRow key={index} index={index} item={item} history={this.props.history} />))
                            }
                        </tbody>
                    </table>
                    <br />
                </div>
        
        );
    }
}

export default AgileTableData;
