import React from 'react';
import EnggRow from './EngineeringRow';

class EngineeringTableData extends React.Component {
    render() {
        return (<div>
                    <div className="table-responsive">
                        <table className="table-bordered table-head" >
                            <tbody>
                                <tr>
                                    <th className="head">Year</th>
                                    <th className="head">Month</th>
                                    <th className="head">* Cyclomatic complexity</th>
                                    <th className="head">* Technical Debt</th>
                                    <th className="head">* Maintainability Index ( A,B,C,D,E)</th>
                                    <th className="head">Number of Security Defects Identified</th>
                                </tr>
                            </tbody>

                            <tbody>
                                {
                                    this.props.enggData.map((item, index) => (<EnggRow key={index} item={item} index={index} history={this.props.history} />))
                                }
                            </tbody>
                        </table>

                        <br />
                    </div>
                    <div className="row title">
                    <h6>* Code Quality</h6>
                </div>
                    </div>
                
                

        );
    }
}

export default EngineeringTableData;