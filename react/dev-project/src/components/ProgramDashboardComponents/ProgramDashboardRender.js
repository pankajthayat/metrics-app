import React from "react";
import { connect } from 'react-redux'
import ProgramTable from './ProgramTable';
import ProgramGraph from './ProgramGraph';
import ProgramCard from './ProgramCard';
import '../../style/programDashboard.css';

class ProgramDashboardRender extends React.Component {
    state = {
        value: '1'
    }
    selected = (event) => {
        return this.setState({
            value: event.target.value
        });
    }

    render() {

        let month = new Date().getMonth();
        let year = new Date().getFullYear() - 1;
        month = month == 0 ? 12 : month;
        let data1 = this.props.programDashboard.filter((data) => data.year == year);
        return (
            // <div className="container">
                <div className="col-md-12 img4">
                    <div className="row">
                        {/*<div className="col-md-3">
                            <h1>&nbsp;&nbsp;&nbsp;Dashboard</h1>
                        </div>*/}
                        <div className="col-md-8 form-group">
                            <label>&nbsp;</label>

                            <form>
                                <div className="form-group radio-name radio-style">
                                    <label><input type="radio" name="optradio" value="1" onChange={this.selected} defaultChecked />  Last Month</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <label> <input type="radio" name="optradio" value="3" onChange={this.selected} />  Last 3 Months </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                           <label> <input type="radio" name="optradio" value="6" onChange={this.selected} />  Last 6 Months </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <label><input type="radio" name="optradio" value="9" onChange={this.selected} />  Last 9 Months </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <label>  <input type="radio" name="optradio" value="12" onChange={this.selected} />  Last 12 Months </label>
                                </div>

                            </form>
                        </div>

                        <div className="col-md-1"></div>
                    </div>
                    <br />
                    <div className="row">
                        <ProgramCard data={data1} value={this.state.value} onSelected={this.selected} month={month} />
                    </div >
                    <div className="row">
                        <ProgramGraph programData={data1} value={this.state.value} month={month} />
                    </div><br />
                    <div className="row radio-name">
                        <h6>* Datas are shown in average</h6>
                    </div>
                    <div className="row">
                        <ProgramTable programData={this.props.programDashboard} />
                    </div><br /><br />
                </div>
            // </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        programDashboard: state.programDashboard,
        dashBoard: state.dashboard
    }
}
export default connect(mapStateToProps)(ProgramDashboardRender);