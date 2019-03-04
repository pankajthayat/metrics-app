import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import PodContent from "../PodComponents/PodContent"
import { saveAgile} from "../../actions/agileActions"
import { NavLink } from 'react-router-dom';
import '../../style/agile.css';
import swal from 'sweetalert';
import { ON_EXPORT_URL } from '../Constants/constants';
import {getMonthName} from "../CommonFunctions/CommonFunctions"

class Agile extends React.Component {
    constructor(props) {
        super(props)
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth()+1;
        this.state = {
            agiledata:[{
                month: currentMonth,
                year: currentYear,
                iteration: "",
                cognizantTeamSize: "",
                telstraTeamSize: "",
                numberOfCognizantHolidays:"",
                numberOfCognizantleaves:"",
                numberOfTelstraHolidays:"",
                numberOfTelstraleaves: "",
                iterationNumber: "",
                averageCycle: "",
                velocityRate: "",
                userStoriesCommitted: "",
                userStoriesAccepted: "",
                committedStoryPoints: "",
                acceptedStoryPoints: "",
                acceptedStoryPointsPerWeek: "",
                unitTestCoverage: "",
                commitmentReliability: "",               
                comments: ""
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
        this.saveData = this.saveData.bind(this);
    }

    sweetAlert() {
        // e.preventDefault();
        swal("Successfully Saved!", "Successfully Saved", "success")
        // window.location.reload()
    }

    saveData(e) {
    e.preventDefault();
    const AgileData = {
      podId: this.props.podContent.podId,
      podName: this.props.podContent.podName,
      agiledata: this.state.agiledata
    };
    console.log(AgileData)
   
    this.props.dispatch(saveAgile(AgileData));
    this.sweetAlert();
    this.props.history.push('/ListItems');
  }

  addClick(){

      let currentDate = new Date();
      let currentYear = currentDate.getFullYear();
      let currentMonth = currentDate.getMonth()+1;

     this.setState(prevState => ({ 
        agiledata: [...prevState.agiledata,{ 
                month: currentMonth,
                year: currentYear,
                iteration: "",
                cognizantTeamSize: "",
                telstraTeamSize: "",
                numberOfCognizantHolidays:"",
                numberOfCognizantleaves:"",
                numberOfTelstraHolidays:"",
                numberOfTelstraleaves: "",
                iterationNumber: "",
                averageCycle: "",
                velocityRate: "",
                userStoriesCommitted: "",
                userStoriesAccepted: "",
                committedStoryPoints: "",
                acceptedStoryPoints: "",
                acceptedStoryPointsPerWeek: "",
                unitTestCoverage: "",
                commitmentReliability: "",               
                comments: ""
        }]
     }))
  }


  removeClick(i){
     let agiledata = [...this.state.agiledata];
     if(i>=1){
        agiledata.splice(i, 1);
        this.setState({ agiledata });
     }
  }

  handleChange(i,e) {
    const { name, value } = e.target;
     let agiledata = [...this.state.agiledata];
     agiledata[i] = {...agiledata[i], [name]: value};
     this.setState({ agiledata });
  };

  addPeriodMonth(i,e) {
        let periodMonthList = this.state.periodMonthList;
        const { name, value } = e.target;
        let agiledata = [...this.state.agiledata]
        console.log("selected>>>",value)
        let index = periodMonthList.findIndex(x => x.periodMonthName === value);
        agiledata[i] = {...agiledata[i], [name]: periodMonthList[index].periodMonthId};
        this.setState({ agiledata });
    };


onExport() {
    const FileDownload = require('js-file-download');
    axios.get(ON_EXPORT_URL + "Sprint" , {
      responseType: 'arraybuffer'
    }).
      then(res => {
        var blob = new Blob([res.data], { 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=Cp1252' });
        FileDownload(blob, 'report.xls');
      })
  }

  createUI(){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth()+1;
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

     return this.state.agiledata.map((el, i) => (
                <tbody>
                <tr>
                     <td>
                        <select ref="periodMonthList" className="form-control" value={getMonthName(el.month)} id="periodMonth" name="month" onChange={this.addPeriodMonth.bind(this,i)} >
                                {periodMonthList}
                        </select>
                    </td>
                    <td>
                        <select ref="periodYearList" className="form-control" value={el.year} id="periodYear" name="year" onChange={this.handleChange.bind(this,i)} >
                                {periodYearList}
                        </select>
                    </td>
                    <td>
                        <input className="form-control" type="number" id="iteration" name="iteration" value={el.iteration ||''} onChange={this.handleChange.bind(this,i)}
                            required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="cognizantTeamSize" value={el.cognizantTeamSize ||''} onChange={this.handleChange.bind(this,i)}
                             required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="telstraTeamSize" value={el.telstraTeamSize ||''} onChange={this.handleChange.bind(this,i)}
                             required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="numberOfCognizantHolidays" value={el.numberOfCognizantHolidays ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="numberOfCognizantleaves" value={el.numberOfCognizantleaves ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="numberOfTelstraHolidays" value={el.numberOfTelstraHolidays ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="numberOfTelstraleaves" value={el.numberOfTelstraleaves ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="iterationNumber" value={el.iterationNumber ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="userStoriesCommitted" value={el.userStoriesCommitted ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="userStoriesAccepted" value={el.userStoriesAccepted ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="committedStoryPoints" value={el.committedStoryPoints ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="acceptedStoryPoints" value={el.acceptedStoryPoints ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="acceptedStoryPointsPerWeek" value={el.acceptedStoryPointsPerWeek= Number((el.acceptedStoryPoints/ el.iteration).toFixed(2))||"0.00"}                                readOnly
                             readOnly onChange={this.handleChange.bind(this,i)}/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="unitTestCoverage" value={el.unitTestCoverage ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="averageCycle" value={el.averageCycle ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="velocityRate" value={el.velocityRate ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="commitmentReliability" value={el.commitmentReliability= Number((el.acceptedStoryPoints / el.committedStoryPoints).toFixed(2) * 100)||"0.00"}
                                readOnly
                                onChange={this.handleChange.bind(this,i)}/>
                    </td>
                    <td>
                        <input className="form-control" type="text"  id="comments" name="comments" value={el.comments ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input id="remove" className="btn btn-info btn-sm" type ="button" value="remove" onClick={this.removeClick.bind(this, i)}/>
                    </td>
                </tr>
                </tbody>
        
              
     ))
  }
  render() {
    const positionAbsolute = {
      position: `absolute`,
      right: `16px`
    };
    return (
      <div className="container sidebarspace">
        <NavLink to='/ListItems'><button className="goback ">Go Back</button></NavLink>
        <h1> Sprint </h1>
        <form onSubmit={this.saveData}>
          
            <PodContent />
            <br />
            <div className="scrollmenu">           

                <table className="table-hover">
                            <thead id = "agiletable">                                
                                    <th id="periodMonth" className="text-center">Month</th>
                                    <th id="periodYear" className="text-center">Year</th>
                                    <th id="iteration" className="text-center">Iteration</th>
                                    <th id="cognizantTeamSize" className="text-center">Cognizant Team Size</th>
                                    <th id="telstraTeamSize" className="text-center">Telstra Team Size</th>
                                    <th id="numberOfCognizantHolidays" className="text-center">Number of Cognizant Holidays</th>                                    
                                    <th id="numberOfCognizantleaves" className="text-center">Number of  days leave of Cognizant Employees</th>
                                    <th id="numberOfTelstraHolidays" className="text-center">Number of Telstra Holidays</th>                                    
                                    <th id="numberOfTelstraleaves" className="text-center">Number of  days leave of Telstra Employees</th>
                                    <th id="iterationNumber" className="text-center">Iteration Number</th>
                                    <th id="userStoriesCommitted" className="text-center">No. of user Stories committed</th>
                                    <th id="userStoriesAccepted" className="text-center">No. of User stories accepted</th>
                                    <th id="committedStoryPoints" className="text-center">Committed Story points</th>
                                    <th id="acceptedStoryPoints" className="text-center">Accepted Story points</th>
                                    <th id="acceptedStoryPointsPerWeek" className="text-center">Accepted Story Points/week</th>
                                    <th id="unitTestCoverage" className="text-center">Unit Test coverage (%)</th>
                                    <th id="averageCycle" className="text-center">Average Cycle Time</th>
                                    <th id="velocityRate" className="text-center">Velocity Rate</th>
                                    <th id="commitmentReliability" className="text-center">Commitment Reliability</th>
                                    <th className="text-center">Comments</th>
                                    <th className="text-center">Action</th>
                                
                            </thead>
                            {this.createUI()}
              </table>
               </div>
               <br />
               <div className = "wrapper">
                    <td>
                    <input id ="add_button" className ="btn btn-primary" type='button' value='Add' onClick={this.addClick.bind(this)}/>
                    </td>            
                    <td>
                    <input id ="submit_button" type="submit" className ="btn btn-primary" value="Submit" />
                    </td>
                    <td>
                    <input type="button" className ="btn btn-primary" value="Export" onClick={this.onExport.bind(this)}/>
                    </td>
                </div>
         
        </form>
      </div>
    )
  }
}




const mapPropsToState = (state) => {
    return {
        podContent: state.podContent
    }
}
export default connect(mapPropsToState)(Agile);