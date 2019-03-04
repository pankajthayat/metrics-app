import React, {
  Component
} from "react";
import axios from "axios";
import PodContent from "../PodComponents/PodContent";
import {
  connect
} from "react-redux";
import {
  saveEngineering
} from '../../actions/engineeringAction';
import { NavLink } from 'react-router-dom';
import '../../style/metricsapp.css';
import '../../style/engg.css';
import swal from 'sweetalert';
import { ON_EXPORT_URL, LOAD_POD_URL } from '../Constants/constants';
import {getMonthName} from "../CommonFunctions/CommonFunctions"


class Engineering extends React.Component {
  constructor(props) {
    super(props);
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth()+1;
    this.state = {
      engg:[{
        periodMonth: currentMonth,
        periodYear: currentYear,
        codeQualityCyclometric: "",
        codeQualityTechnical: "",
        codeQualityMaintainability: "",
        securityDefects: "",
        comments: ""
      }],
      podDetailList: [],
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
    };
    this.saveData = this.saveData.bind(this);
  }

  sweetAlert() {
        // e.preventDefault();
        swal("Successfully Saved!", "Successfully Saved", "success")
        // window.location.reload()
    }
  saveData(e) {
    e.preventDefault();
    const engineeringData = {
      podId: this.props.podContent.podId,
      podName: this.props.podContent.podName,
      engg: this.state.engg
    };
    console.log(engineeringData)
   
    this.props.dispatch(saveEngineering(engineeringData));
    this.sweetAlert();
    this.props.history.push('/ListItems');
  }
  
  addClick(){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth()+1;
     this.setState(prevState => ({ 
        engg: [...prevState.engg,{ 
          periodMonth: currentMonth,
          periodYear: currentYear,
          codeQualityCyclometric: "",
          codeQualityTechnical: "",
          codeQualityMaintainability: "",
          securityDefects: "",
          comments: ""
        }]
     }))
  }


  removeClick(i){
     let engg = [...this.state.engg];
     if(i>=1){
        engg.splice(i, 1);
        this.setState({ engg });
     }
  }

  handleChange(i,e) {
    const { name, value } = e.target;
     let engg = [...this.state.engg];
     engg[i] = {...engg[i], [name]: value};
     this.setState({ engg });
  };

  addPeriodMonth(i,e) {
        let periodMonthList = this.state.periodMonthList;
        const { name, value } = e.target;
        let engg = [...this.state.engg]
        console.log("<<<selected= ",value)
        let index = periodMonthList.findIndex(x => x.periodMonthName === value);
        engg[i] = {...engg[i], [name]: periodMonthList[index].periodMonthId};
        this.setState({ engg });
    };

onExport() {
    const FileDownload = require('js-file-download');
    axios.get(ON_EXPORT_URL + "Engineering" , {
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
      }> {
          data.periodYearName
        } </option>;
    });


     return this.state.engg.map((el, i) => (
                <tbody>
                <tr>
                    <td>
                        <select ref="periodMonthList" id="periodMonth" value={getMonthName(el.periodMonth)} className="form-control" name="periodMonth" onChange={this.addPeriodMonth.bind(this,i)} >
                                {periodMonthList}
                        </select>

                    </td>

                    <td>
                        <select ref="periodYearList" id="periodYear" value={el.periodYear} className="form-control"  name="periodYear" onChange={this.handleChange.bind(this,i)} >
                                {periodYearList}
                        </select>

                    </td>
                    <td>
                        <input className="form-control" type="number" pattern="[0-3]" name="codeQualityCyclometric" value={el.codeQualityCyclometric ||''} onChange={this.handleChange.bind(this,i)}
                            required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="codeQualityTechnical" value={el.codeQualityTechnical ||''} onChange={this.handleChange.bind(this,i)}
                            required/>
                    </td>
                    <td>
                        <input className="form-control" type="text" pattern="[A-Z]" name="codeQualityMaintainability" value={el.codeQualityMaintainability ||''} onChange={this.handleChange.bind(this,i)}
                            maxLength="2" required/>
                    </td>
                    <td>
                        <input className="form-control" type="number" name="securityDefects" value={el.securityDefects ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    
                    <td>
                        <input className="form-control" type="text" id="comments" name="comments" value={el.comments ||''} onChange={this.handleChange.bind(this,i)}
                        required/>
                    </td>
                    <td>
                        <input id="remove" className="btn btn-info btn-sm" type ="button" value="remove" onClick={this.removeClick.bind(this, i)}
                        required/>
                    </td>
                </tr>
                </tbody>
        
              
     ))
  }


  onInputChange = e => {
    let lastString = e.target.value[e.target.value.length - 1];
    if (lastString.match("[+-]?[0-9]") == null) {
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
  };
  render() {
    const positionAbsolute = {
      position: `absolute`,
      right: `16px`
    };
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
    return (
      <div className="container sidebarspace">
        <NavLink to='/ListItems'><button className="goback ">Go Back</button></NavLink>
        <h1> Engineering </h1>
        <form onSubmit={this.saveData}>
          <div className="form-group">
            <PodContent />
            <br />
            
            <div className="scrollmenu">
                <table className="table-hover">
                            <thead id ="enggtable">                                
                                    <th className="text-center">Month</th>
                                    <th className="text-center">Year</th>
                                    <th className="text-center">Code Quality - Cyclomatic complexity/ function</th>
                                    <th className="text-center">Code Quality - Technical Debt (in Days)</th>
                                    <th className="text-center">Code Quality - Maintainability Index Index (A,B,C, D, E)</th>
                                    <th className="text-center">Number of security defects identified after code checkin (Number)</th>                                    
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
export default connect(mapPropsToState)(Engineering);
