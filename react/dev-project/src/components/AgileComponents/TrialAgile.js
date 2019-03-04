import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import PodContent from "../PodComponents/PodContent"
import { saveAgile} from "../../actions/agileActions"
import { NavLink } from 'react-router-dom';
import '../../style/agile.css';
import swal from 'sweetalert';
import {getMonthName} from "../CommonFunctions/CommonFunctions"

class AddAgile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            agiledata:[{
                month: this.props.month,
                year: this.props.year,
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
  }

  addClick(){

     this.setState(prevState => ({ 
        agiledata: [...prevState.agiledata,{ 
               month: this.props.month,
                year: this.props.year,
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


//   removeClick(i){
//      let agiledata = [...this.state.agiledata];
//      if(i>=1){
//         agiledata.splice(i, 1);
//         this.setState({ agiledata });
//      }
//   }
  removeClick(){
     let agiledata = [...this.state.agiledata];
        agiledata.splice(1,1);
        this.setState({ agiledata });
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
createUI(){
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
                <tr>
                    {/*<td>
                        <input id="remove" className="btn btn-info btn-sm" type ="button" value="remove" onClick={this.removeClick.bind(this, i)}/>
                    </td>*/}
                    <td>
                        <input className="form-control" type="number" name="iteration" value={el.iteration ||''} onChange={this.handleChange.bind(this,i)}
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
                </tr>
                
        
              
     ))
  }

    render() {
    const positionAbsolute = {
      position: `absolute`,
      right: `16px`
    };
    return (
      <div className="container sidebarspace table-padding">
                            <tbody>
                            {this.createUI()}
                            </tbody>
      </div>
    )
  }
}
const mapPropsToState = (state) => {
    return {
        podContent: state.podContent
    }
}
export default connect(mapPropsToState)(AddAgile);