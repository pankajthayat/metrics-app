import React from "react";
import { connect } from "react-redux";
import { getMonthName } from "../CommonFunctions/CommonFunctions";
class DashboardFilters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            periodMonthList: [{
                periodMonthId: "1",
                periodMonthName: "January"
            },
            {
                periodMonthId: "2",
                periodMonthName: "February"
            },
            {
                periodMonthId: "3",
                periodMonthName: "March"
            },
            {
                periodMonthId: "4",
                periodMonthName: "April"
            },
            {
                periodMonthId: "5",
                periodMonthName: "May"
            },
            {
                periodMonthId: "6",
                periodMonthName: "June"
            },
            {
                periodMonthId: "7",
                periodMonthName: "July"
            },
            {
                periodMonthId: "8",
                periodMonthName: "August"
            },
            {
                periodMonthId: "9",
                periodMonthName: "September"
            },
            {
                periodMonthId: "10",
                periodMonthName: "October"
            },
            {
                periodMonthId: "11",
                periodMonthName: "November"
            },
            {
                periodMonthId: "12",
                periodMonthName: "December"
            }
            ],


            periodYearList: [{
                periodYearId: "1",
                periodYearName: "2015"
            },
            {
                periodYearId: "2",
                periodYearName: "2016"
            },
            {
                periodYearId: "3",
                periodYearName: "2017"
            },
            {
                periodYearId: "4",
                periodYearName: "2018"
            },
            {
                periodYearId: "5",
                periodYearName: "2019"
            }
            ]
        }
    }

    render() {
        let periodMonthList = this.state.periodMonthList.map((data, i) => {
            return <option key={i} > {
                data.periodMonthName
            } </option>;
        });
        let periodYearList = this.state.periodYearList.map((data, i) => {
            return <option key={i
            } > {
                    data.periodYearName
                } </option>;
        });


        return (
            <div className="row" >
                <div className="col-md-3">
                    <select ref="periodMonthList" className="form-control" value={this.props.year} name="month" onChange={(e) => {
                        this.props.handleOnChange(e, "filterByYear", this.props.metricType)
                    }} >
                        {periodYearList}
                    </select>
                </div>
                {/*<div className="col-md-3">
                    <select ref="periodMonthList" className="form-control" name="month" onChange={(e) => {
                        this.props.handleOnChange(e, "filterByMonth", this.props.metricType)
                    }} >
                        <option key="select" >All Month</option>
                        {periodMonthList}
                    </select>
                </div>*/}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        dashboard: state.dashboard
    }
}
export default connect(mapStateToProps)(DashboardFilters)