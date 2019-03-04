import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from './PieChart'
import {
    forLineChartCycle, forBarChart, forLineChartVelocity, forBarChartFrequency,
    forPieChartCommitment, forPieChartUnitTest, forPieChartSucessful
} from "./datasetsForProgram";
class ProgramGraph extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="col-md-12 radio-name">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Commitment Reliabilty </h4>
                            <PieChart chartData={forPieChartCommitment(this.props.programData, this.props.value, this.props.month)} />
                        </div>
                        <div className="col-md-4">
                            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unit Test Coverarge </h4>
                            <PieChart chartData={forPieChartUnitTest(this.props.programData, this.props.value, this.props.month)} />
                        </div>
                   
                    {/*<div class="row">*/}
                        <div className="col-md-4 " >
                            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Successful Deployments </h4>
                            <PieChart chartData={forPieChartSucessful(this.props.programData, this.props.value, this.props.month)} />
                        {/*</div>*/}
                        {/*<div className="col-md-6">
                        </div>*/}
                         </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }


}

export default ProgramGraph;
