/*import React from "react"
import 'react-dates/lib/css/_datepicker.css';
import { connect } from "react-redux";
import { addAgileData } from "../../actions/agileActions"
import 'react-dates/initialize';
import { getMonthId,getMonthName,getYearId,getYearById,getYearMap,getMonthMap } from "../CommonFunctions/CommonFunctions"

class AgileForm extends React.Component {
    handleOnChange = (e) => {
        e.persist();
        let value = e.target.value;
        if(e.target.name==="month")
        {
          var updates = getMonthId(value)
        }
        else
        {
          updates = { [e.target.name]: value }
        }
       this.props.dispatch(addAgileData(updates))
    
    }

    render() {
        let periodMonthList = this.props.periodMonthList.map(data => {
      return <option key={
        data.periodMonthId
      } > {
          data.periodMonthName
        } </option>;
    });
    let periodYearList = this.props.periodYearList.map(data => {
      return <option key={
        data.periodYearId
      } > {
          data.periodYearName
        } </option>;
    });
    
        return (
                <form onSubmit={this.props.onAgileFormSubmit}>
                        <div className="row" >
              <div className="col-md-3"> 
                  <label>Month:</label>
                <select ref="periodMonthList" className="form-control" name="month" onChange={this.handleOnChange} >
                  <option key="select" > Select Month </option>
                  {periodMonthList}
                </select>
              </div>
              <div className="col-md-3"> 
                   <label>Year:</label>
                <select ref="periodYearList" className="form-control" name="year" onChange={this.handleOnChange} >
                  <option key="select" > Select Year </option>
                  {periodYearList}
                </select>
              </div>
      
                        <div className="col-md-6">
                            <label>Iteration:</label>
                            <input type="Number" className="form-control" name="iteration" required onChange={this.handleOnChange} />
                        </div>
                    </div><br />
                    <div className="row">
                        <div
                            className="col-md-6">
                            <label>Cognizant Team Size:</label>
                            <input
                                type="Number"
                                className="form-control"
                                name="cognizantTeamSize" required onChange={this.handleOnChange}
                            />
                        </div>
                        <div
                            className="col-md-6">
                            <label>Telstra Team Size:</label>
                            <input
                                type="Number"
                                className="form-control"
                                name="telstraTeamSize" required onChange={this.handleOnChange}
                            />
                        </div>
                    </div><br/>

                     <div className="row">
                        <div
                            className="col-md-6">
                            <label>Number Of Holidays:</label>
                            <input
                                type="Number"
                                className="form-control"
                                name="numberOfHolidays"  onChange={this.handleOnChange}
                            />
                        </div>
                        <div
                            className="col-md-6">
                            <label>number of days leave in person days:</label>
                            <input
                                type="Number"
                                className="form-control"
                                name="numberOfLeavesInPersonDays"  onChange={this.handleOnChange}
                            />
                        </div>
                    </div><br/>



                    <div
                        className="row">
                        <div
                            className="col-md-6">
                            <label>Iteration Number:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="iterationNumber" required
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <div
                            className="col-md-6">
                            <label>Velocity:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="velocity" required onChange={this.handleOnChange}
                            />
                        </div>
                    </div><br />
                    <div
                        className="row">
                        <div
                            className="col-md-6">

                            <label>Planned Velocity:</label>

                            <input
                                type="text"
                                className="form-control"

                                name="plannedVelocity"
                                required onChange={this.handleOnChange}
                            />
                        </div>
                        <div
                            className="col-md-6">
                            <label>Rejection Rate:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rejectionRate"
                                required
                                onChange={this.handleOnChange} />
                        </div>
                    </div><br
                    />
                    <div
                        className="row">
                        <div
                            className="col-md-6">
                            <label>Average Cycle Time:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="averageCycle"
                                required
                                onChange={this.handleOnChange}
                            />
                        </div>
                        <div
                            className="col-md-6">
                            <label>Velocity Rate:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="velocityRate"
                                value={this.props.agile.velocityRate=Number((this.props.agile.velocity / (this.props.agile.iteration * (Number(this.props.agile.cognizantTeamSize) + Number(this.props.agile.telstraTeamSize)) * 7 * 5)).toFixed(2)) ||"0.00"}
                                readOnly
                                 />
                        </div>
                    </div><br
                    />
                    <div
                        className="row">

                        <div
                            className="col-md-6">
                            <label>Commitment Reliability:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="commitmentReliability"
                               value={this.props.agile.commitmentReliability=Number((this.props.agile.velocity / this.props.agile.plannedVelocity).toFixed(2) * 100)||"0.00"}
                                readOnly
                                onChange={this.handleOnChange} />
                        </div>


                        <div
                            className="col-md-6">
                            <label>Velocity/Week:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="velocityPerWeek"
                                value={this.props.agile.velocityPerWeek=Math.round(Number((this.props.agile.velocity / this.props.agile.iteration)))||"0.00"}
            
                                readOnly
                            />
                        </div>
                    </div><br
                    />
                    <div
                        className="row">
                        <div
                            className="col-md-6">
                            <label>Comments:
</label>
                            <textarea
                                className="form-control rounded-0"
                                rows="3"
                                name="comments"
                                onChange={this.handleOnChange}
                            ></textarea>
                        </div>
                    </div><br
                    />
                    <div
                        className="row">
                        <div
                            className="col-md-6">
                            <div>
                                <input
                                    type="submit"
                                    className="btn btn-success"
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </form>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        agile: state.agile
    }
}
export default connect(mapStateToProps)(AgileForm);*/