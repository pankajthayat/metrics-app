import React from 'react';
import ProgramRow from './ProgramRow';
import '../../style/programDashboard.css';
export default class ProgramTable extends React.Component {
    render() {
        return (<div>
            <div className="row ">
                <div className='col-md-1'></div>
                <div className='col-md-10'>
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered table-sm table-head">
                            <tbody>
                                <tr >
                                    <th className="head">Year</th>
                                    <th className="head">Month</th>
                                    <th className="head">Velocity Per Week*</th>
                                    <th className="head">Commitment Reliability Rate*</th>
                                    <th className="head">Unit Test Coverage*</th>
                                    <th className="head">Cycle Time* (hr)</th>
                                    <th className="head">%Successful Deployments</th>
                                    <th className="head">Frequency of Deployments</th>
                                    <th className="head">Code Complexity(#)</th>
                                    <th className="head">Tech Debt(days)</th>
                                    <th className="head" title="Post production defects reported within 2 weeks of release">Post production defects</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {
                                    this.props.programData.map((item, index) => (<ProgramRow key={index} index={index} item={item} history={this.props.history} />))
                                }
                            </tbody>
                        </table>
                        <br />
                    </div></div>
                <div className='col-md-1'></div>
            </div>
        </div>
        );
    }
}
