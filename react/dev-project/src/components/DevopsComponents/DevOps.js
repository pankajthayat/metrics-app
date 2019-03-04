import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PodContent from '../PodComponents/PodContent';
import { saveDevops } from '../../actions/devopsAction';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';
import '../../style/metricsapp.css';
import '../../style/devops.css';
import { ON_EXPORT_URL } from '../Constants/constants';
import axios from 'axios'
import {getMonthName} from "../CommonFunctions/CommonFunctions"

class DevOps extends React.Component {
    constructor(props) {
        super(props)
        this.isValid=false;
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth()+1;
            this.state = {
            dops : [{
              periodMonth: currentMonth,
              periodYear: currentYear,
              releaseName: "",
              releaseDate: "",
              releaseDesc: "",
              releaseType: "",
              totalDeploymentsAttempted: "",
              rollbacks : "",
              totalDefects : "",
              openDefects : "",
              postProdDefectsHigh : "",
              postProdDefectsCritical : "",
              successfulDeployments : "",
              prodDevFreq: "",
              totalFailedDeployments: "",
              totalDeploymentsDone: "",
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
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
    }

    handleDayChange(day) {
    this.setState({ selectedDay: day });
  }

    handleDateChange = (dateName, dateValue) =>  {
    this.setState({ 
        dops: {
            ...this.fields,
            [dateName]: dateValue
        } });
  }

   handleChange(i, e) {
  	 const { name, value } = e.target;
     let dops = [...this.state.dops];
     dops[i] = {...dops[i], [name]: value};
     this.setState({ dops });
  };


    sweetAlert() {
        swal("Successfully Saved!", "Successfully Saved", "success")
    }

    addClick(){
        let currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth()+1;
        this.setState(prevState => ({ 
            dops: [...prevState.dops,{ prodDevFreq: "",
              periodMonth: currentMonth,
              periodYear: currentYear,
              releaseName: "",
              releaseDate: "",
              releaseDesc: "",
              releaseType: "",
              totalDeploymentsAttempted: "",
              rollbacks : "",
              totalDefects : "",
              openDefects : "",
              postProdDefectsHigh : "",
              postProdDefectsCritical : "",
              successfulDeployments : "",
              totalFailedDeployments: "",
              totalDeploymentsDone: "",
              postProdDefectsMedium: "",
              postProdDefectsLow: "",
              comments: "",
    }]
    }))
  }

  onExport() {
    const FileDownload = require('js-file-download');
    axios.get(ON_EXPORT_URL + "Release" , {
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
      const { selectedDay } = this.state;


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
                <tbody>
                <tr>
                    <td>
                        <select ref="periodMonthList" className="form-control" id="periodMonth" value={getMonthName(el.periodMonth)} name="periodMonth" onChange={this.addPeriodMonth.bind(this,i)} >
                                {periodMonthList}
                        </select>

                    </td>

                    <td>
                        <select ref="periodYearList" className="form-control"id="periodYear" value={el.periodYear} name="periodYear" onChange={this.handleChange.bind(this,i)} >
                                {periodYearList}
                        </select>

                    </td>
                    <td>
                        <input className="form-control" type="text" id="release_Name"name="releaseName" value={el.releaseName ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                       <input className="form-control" type="text" id="release_Date" name="releaseDate" value={el.releaseDate ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" id="release_Desc" name="releaseDesc" value={el.releaseDesc ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" id="release_Type" name="releaseType" value={el.releaseType ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="totalDeploymentsAttempted" value={el.totalDeploymentsAttempted ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="rollbacks" value={el.rollbacks ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="totalDefects" value={el.totalDefects ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="openDefects" value={el.openDefects ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="postProdDefectsCritical" value={el.postProdDefectsCritical ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="postProdDefectsHigh" value={el.postProdDefectsHigh ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="postProdDefectsMedium" value={el.postProdDefectsMedium ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="postProdDefectsLow" value={el.postProdDefectsLow ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="successfulDeployments" value={el.successfulDeployments = Number(((el.totalDeploymentsAttempted-el.rollbacks) /el.totalDeploymentsAttempted).toFixed(2) * 100) || "0.00"}
                                readOnly/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="prodDevFreq" value={el.prodDevFreq ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    
                    <td>
                        <input className="form-control" type="text" name="totalFailedDeployments" value={el.totalFailedDeployments ||''} onChange={this.handleChange.bind(this,i)} required
                        required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" name="totalDeploymentsDone"  value={el.totalDeploymentsDone ||''} onChange={this.handleChange.bind(this,i)} required
                        required/>
                    </td>
                    
          
                    <td>
                        <input className="form-control" type="text" id="comments" name="comments" value={el.comments ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input id="remove" className="btn btn-info btn-sm" type ="button" value="remove" onClick={this.removeClick.bind(this, i)}/>
                    </td>
                </tr>
                </tbody>
        
              
     ))
  }

 

  addPeriodMonth(i,e) {
        let periodMonthList = this.state.periodMonthList;
        const { name, value } = e.target;
        let dops = [...this.state.dops]
        console.log("<<<selected= ",value)
        let index = periodMonthList.findIndex(x => x.periodMonthName === value);
        dops[i] = {...dops[i], [name]: periodMonthList[index].periodMonthId};
        this.setState({ dops });
    };

  removeClick(i){
     let dops = [...this.state.dops];
     if(i>=1){
        dops.splice(i, 1);
        this.setState({ dops });
     }
     
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
        this.props.history.push('/ListItems');
        
    }

    

    render() {

        const validForm = this.state.prodDevFreq && this.state.totalFailedDeployments
        && this.state.totalDeploymentsDone
        return (

            <div class="container sidebarspace">
                <NavLink to='/ListItems'><button className="goback">Go Back</button></NavLink>
                <h1>Release</h1>

                <form onSubmit={this.onDevOpsFormSubmit}>
                    <PodContent />
                    <br />
                    
                    <div className="scrollmenu">    
                        <table className="table-hover">
                            <thead id = "devopstable">
                              
                                    <th className="text-center">Month</th>
                                    <th className="text-center">Year</th>
                                    <th className="text-center">Release Name</th>
                                    <th className="text-center">Release Date</th>
                                    <th className="text-center">Release Description</th>
                                    <th className="text-center">Release Type</th>
                                    <th className="text-center">Total Deployments Attempted in Prod</th>
                                    <th className="text-center">Roll backs</th>
                                    <th className="text-center">Total Defects (CAT) </th>
                                    <th className="text-center">No. of Open Defects (CAT)</th>                                    
                                    <th className="text-center">Post Production Defects (Critical)</th>
                                    <th className="text-center">Post Production Defects (High)</th>
                                    <th className="text-center">Post Production Defects (Medium)</th>
                                    <th className="text-center">Post Production Defects (Low)</th>
                                    <th className="text-center">Successful Deployments(%)</th>
                                    <th className="text-center">Deployment Frequency (Prod)</th>                                    
                                    <th className="text-center">Total Failed Deployments</th>
                                    <th className="text-center">Total Deployments Done</th>                                    
                                    <th className="text-center">Comments</th>
                                    <th id="action_heading" className="text-center">Action</th>
                                
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


const mapStateToProps = (state) => {
    return {
        podContent: state.podContent
    }
}
export default connect(mapStateToProps)(DevOps);
