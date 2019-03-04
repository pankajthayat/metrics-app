import React from 'react';
import DevopsRow from './DevOpsRow';


class DevOpsTableData extends React.Component {
    render() {
        return (<div>
                    <div className="table-responsive">
                        <table className="table-bordered table-head" >
                            <tbody>
                                <tr>
                                    <th className="head">Year</th>
                                    <th className="head">Month</th>
                                    <th className="head">Deployment Frequency(Prod)</th>
                                    <th className="head">Percentage of Successful Deployments (Prod)</th>
                                    <th className="head">*PPD Severity 1</th>
                                    <th className="head">*PPD Severity 2</th>
                                    <th className="head">*PPD Severity 3</th>
                                    <th className="head">*PPD Severity 4</th>
                                    <th className="head">Total Defects (CAT)</th>
                                    <th className="head">Open Defects (CAT)</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {
                                    this.props.devopsData.map((item, index) => (<DevopsRow key={index} item={item} index={index} history={this.props.history} />))
                                }
                            </tbody>
                        </table>
                        <br />
                    </div>
                <div className="row title">
                    <h6>* PPD: Post Production Defects</h6>
                </div><br />
                </div>
        );
    }
}

export default DevOpsTableData;