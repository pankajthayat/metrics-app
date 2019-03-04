import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PodContent from '../PodComponents/PodContent';
import { saveDevops } from '../../actions/devopsAction';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';
import '../../style/metricsapp.css';
import '../../style/devops.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import { getMonthName } from "../CommonFunctions/CommonFunctions"

class DevOps extends React.Component {
    constructor(props) {
        super(props)
        this.isValid = false;
        this.addRowNo = 0;
        this.state = {
            dops: [{
                demoDate: new Date(),
                periodMonth: this.props.month,
                periodYear: this.props.year,
                releaseName: "",
                releaseDate: "",
                releaseDesc: "",
                releaseType: "",
                totalDeploymentsAttempted: "",
                rollbacks: "",
                totalDefects: "",
                openDefects: "",
                postProdDefectsHigh: "",
                postProdDefectsCritical: "",
                successfulDeployments: "",
                postProdDefectsMedium: "",
                postProdDefectsLow: "",
                comments: "",

            }],
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
            },
            {
                periodYearId: "6",
                periodYearName: "2020"
            },
            {
                periodYearId: "7",
                periodYearName: "2021"
            },
            {
                periodYearId: "8",
                periodYearName: "2022"
            },
            {
                periodYearId: "9",
                periodYearName: "2023"
            },
            {
                periodYearId: "10",
                periodYearName: "2024"
            },
            {
                periodYearId: "11",
                periodYearName: "2025"
            },
            {
                periodYearId: "12",
                periodYearName: "2025"
            }
            ]

        }
        this.onDevOpsFormSubmit = this.onDevOpsFormSubmit.bind(this);
    }


    handleChange(i, e) {
        const { name, value } = e.target;
        let dops = [...this.state.dops];
        dops[i] = { ...dops[i], [name]: value };
        this.setState({ dops });
    };

    handleChangeDate(i, date) {
        let dops = [...this.state.dops];
        var DDate = date.getDate();
        var DMonth = ("0" + (date.getMonth() + 1)).slice(-2);
        var DYear = date.getFullYear();
        const D = DDate + '-' + DMonth + '-' + DYear;
        dops[i] = { ...dops[i], demoDate: date };
        dops[i] = { ...dops[i], releaseDate: D };
        this.setState({ dops });
        console.log("releaseDate>>>", D)
    };

    sweetAlert() {
        swal("Successfully Saved!", "Successfully Saved", "success")
    }

    addClick() {
        this.addRowNo++;
        this.setState(prevState => ({
            dops: [...prevState.dops, {
                demoDate: new Date(),
                periodMonth: this.props.month,
                periodYear: this.props.year,
                releaseName: "",
                releaseDate: "",
                releaseDesc: "",
                releaseType: "",
                totalDeploymentsAttempted: "",
                rollbacks: "",
                totalDefects: "",
                openDefects: "",
                postProdDefectsHigh: "",
                postProdDefectsCritical: "",
                successfulDeployments: "",
                postProdDefectsMedium: "",
                postProdDefectsLow: "",
                comments: "",
            }]
        }))
    }

    addPeriodMonth(i, e) {
        let periodMonthList = this.state.periodMonthList;
        const { name, value } = e.target;
        let dops = [...this.state.dops]
        console.log("<<<selected= ", value)
        let index = periodMonthList.findIndex(x => x.periodMonthName === value);
        dops[i] = { ...dops[i], [name]: periodMonthList[index].periodMonthId };
        this.setState({ dops });

    }
    removeClick() {
        this.addRowNo--;
        let dops = [...this.state.dops];
        dops.splice(1, 1);
        this.setState({ dops });

    }

    onDevOpsFormSubmit(e) {
        e.preventDefault();

        const devOps = {
            podId: this.props.podContent.podId,
            podName: this.props.podContent.podName,
            dops: this.state.dops
        }
        this.props.dispatch(saveDevops(devOps))
        this.sweetAlert();
         this.setState(prevState => ({
            dops: [{
                prodDevFreq: "",
                demoDate: new Date(),
                periodMonth: this.props.month,
                periodYear: this.props.year,
                releaseName: "",
                releaseDate: "",
                releaseDesc: "",
                releaseType: "",
                totalDeploymentsAttempted: "",
                rollbacks: "",
                totalDefects: "",
                openDefects: "",
                postProdDefectsHigh: "",
                postProdDefectsCritical: "",
                successfulDeployments: "",
                totalFailedDeployments: "",
                totalDeploymentsDone: "",
                postProdDefectsMedium: "",
                postProdDefectsLow: "",
                comments: "",
            }]
        }))


    }

    createUI() {
        let periodMonthList = this.state.periodMonthList.map(data => {
            return <option key={
                data.periodMonthId
            } > {
                    data.periodMonthName
                } </option>;
        });

        let periodYearList = this.state.periodYearList.map(data => {
            return <option key={
                data.periodYearId
            } > {
                    data.periodYearName
                } </option>;
        });

        return this.state.dops.map((el, i) => (
            <tr>
                <td className="text-center">{this.addRowNo === i ? <button type="button" className="btn btn-info btn-sm btn-update" onClick={this.addClick.bind(this)}><i class="glyphicon glyphicon-plus"></i></button>: ""}</td>
                <td className="text-center">{this.addRowNo === i ? <button type="button" className="btn btn-info btn-danger" onClick={this.removeClick.bind(this)}><i class="glyphicon glyphicon-minus"></i></button>: ""}</td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" id="release_Name" name="releaseName" value={el.releaseName || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <DatePicker className="form-control" autocomplete="off" id="release_Name" dateFormat="dd-MM-yyyy" selected={el.demoDate} name="releaseDate" onChange={this.handleChangeDate.bind(this, i)} />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" name="releaseDesc" value={el.releaseDesc || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" id="release_Name" name="releaseType" value={el.releaseType || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" name="totalDeploymentsAttempted" value={el.totalDeploymentsAttempted || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" name="rollbacks" value={el.rollbacks || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" name="totalDefects" value={el.totalDefects || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" name="openDefects" value={el.openDefects || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" name="postProdDefectsCritical" value={el.postProdDefectsCritical || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" name="postProdDefectsHigh" value={el.postProdDefectsHigh || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" name="postProdDefectsMedium" value={el.postProdDefectsMedium || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" name="postProdDefectsLow" value={el.postProdDefectsLow || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
                <td>
                    <input className="form-control" type="text" name="successfulDeployments" value={el.successfulDeployments = Number(((el.totalDeploymentsAttempted - el.rollbacks) / el.totalDeploymentsAttempted).toFixed(2) * 100) || "0.00"}
                        readOnly />
                </td>
                <td>
                    <input className="form-control" autocomplete="off" type="text" id="comments" name="comments" value={el.comments || ''} onChange={this.handleChange.bind(this, i)}
                        required />
                </td>
            </tr>


        ))
    }

    render() {

        const validForm = this.state.prodDevFreq && this.state.totalFailedDeployments
            && this.state.totalDeploymentsDone
        return (
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10" id = "table_align">
                    <form onSubmit={this.onDevOpsFormSubmit}>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-sm table-head border">
                                <thead>
                                    <tr>
                                        <th className="text-center head" colSpan="2">Action</th>
                                        <th className="text-center head">Release Name</th>
                                        <th className="text-center head">Release Date</th>
                                        <th className="text-center head">Release Description</th>
                                        <th className="text-center head">Release Type</th>
                                        <th className="text-center head">Total Deployments Attempted</th>
                                        <th className="text-center head">Roll backs</th>
                                        <th className="text-center head">Total Defects</th>
                                        <th className="text-center head">No of Open Defects</th>
                                        <th className="text-center head">Post Production Critical Defects</th>
                                        <th className="text-center head">Post Production High Defects</th>
                                        <th className="text-center head">Post Production Medium Defects</th>
                                        <th className="text-center head">Post Production Low Defects</th>
                                        <th className="text-center head">% Successful Deployements</th>
                                        <th className="text-center head">Comments</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.createUI()}
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div className="wrapper">
                            {/*<td>
                                <input className="btn btn-info btn-sm" type='button' value='Add row' onClick={this.addClick.bind(this)} />
                            </td>
                            <td>
                                <input id="remove" className="btn btn-info btn-sm" type="button" value='Remove' onClick={this.removeClick.bind(this)} />
                            </td>*/}
                            <td>
                                <input id="submit_button" type="submit" className="btn btn-info btn-sm" value='Submit' />
                            </td>
                        </div>
                    </form>
                </div>
                <div className="col-md-1"></div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        podContent: state.podContent
    }
}
export default connect(mapStateToProps)(DevOps);
{
}
