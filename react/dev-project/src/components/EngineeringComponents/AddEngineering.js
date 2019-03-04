import React, { Component } from "react";
import axios from "axios";
import PodContent from "../PodComponents/PodContent";
import { connect } from "react-redux";
import { saveEngineering } from '../../actions/engineeringAction';
import { NavLink } from 'react-router-dom';
import '../../style/metricsapp.css';
import '../../style/engg.css';
import swal from 'sweetalert';
import { getMonthName } from "../CommonFunctions/CommonFunctions"


class Engineering extends React.Component {
  constructor(props) {
    super(props);
    this.addRowNo = 0;
    this.state = {
      engg: [{
        periodMonth: this.props.month,
        periodYear: this.props.year,
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
    swal("Successfully Saved!", "Successfully Saved", "success")
  }
  saveData(e) {
    e.preventDefault();
    const engineeringData = {
      podId: this.props.podContent.podId,
      podName: this.props.podContent.podName,
      engg: this.state.engg
    };
    this.props.dispatch(saveEngineering(engineeringData));
    this.sweetAlert();
    this.setState(prevState => ({
      engg: [{
        periodMonth: this.props.month,
        periodYear: this.props.year,
        codeQualityCyclometric: "",
        codeQualityTechnical: "",
        codeQualityMaintainability: "",
        securityDefects: "",
        comments: ""
      }]
    }))
    this.addRowNo=0;
  }

  addClick() {
    this.addRowNo++;
    this.setState(prevState => ({
      engg: [...prevState.engg, {
        periodMonth: this.props.month,
        periodYear: this.props.year,
        codeQualityCyclometric: "",
        codeQualityTechnical: "",
        codeQualityMaintainability: "",
        securityDefects: "",
        comments: ""
      }]
    }))
  }

  removeClick() {
    this.addRowNo--;
    let engg = [...this.state.engg];
    engg.splice(1, 1);
    this.setState({ engg });
  }

  handleChange(i, e) {
    const { name, value } = e.target;
    let engg = [...this.state.engg];
    engg[i] = { ...engg[i], [name]: value };
    this.setState({ engg });
  };

  addPeriodMonth(i, e) {
    let periodMonthList = this.state.periodMonthList;
    const { name, value } = e.target;
    let engg = [...this.state.engg]
    let index = periodMonthList.findIndex(x => x.periodMonthName === value);
    engg[i] = { ...engg[i], [name]: periodMonthList[index].periodMonthId };
    this.setState({ engg });
  };


  onInputChange = e => {
    let lastString = e.target.value[e.target.value.length - 1];
    if (lastString.match("[+-]?[0-9]") == null) {
      e.target.value = e.target.value.substring(0, e.target.value.length - 1);
    }
  };


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
      }> {
          data.periodYearName
        } </option>;
    });

    return this.state.engg.map((el, i) => (
      <tr>
        <td className="text-center">{this.addRowNo === i ? <button type="button" className="btn btn-info btn-sm btn-update" onClick={this.addClick.bind(this)}><i class="glyphicon glyphicon-plus"></i></button>: ""}</td>
        <td className="text-center">{this.addRowNo === i ? <button type="button" className="btn btn-info btn-danger" onClick={this.removeClick.bind(this)}><i class="glyphicon glyphicon-minus"></i></button>: ""}</td>
        <td>
          <input className="form-control" autocomplete="off" type="number" pattern="[0-3]" name="codeQualityCyclometric" value={el.codeQualityCyclometric || ''} onChange={this.handleChange.bind(this, i)}
            required />
        </td>
        <td>
          <input className="form-control" autocomplete="off" type="number" name="codeQualityTechnical" value={el.codeQualityTechnical || ''} onChange={this.handleChange.bind(this, i)}
            required />
        </td>
        <td>
          <input className="form-control" autocomplete="off" type="text" pattern="[A-Z]" name="codeQualityMaintainability" value={el.codeQualityMaintainability || ''} onChange={this.handleChange.bind(this, i)}
            maxLength="2" required />
        </td>
        <td>
          <input className="form-control" autocomplete="off" type="number" name="securityDefects" value={el.securityDefects || ''} onChange={this.handleChange.bind(this, i)}
            required />
        </td>

        <td>
          <input className="form-control" autocomplete="off" type="text" id="comments" name="comments" value={el.comments || ''} onChange={this.handleChange.bind(this, i)}
            required />
        </td>
      </tr>
    ))
  }

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
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10" id = "table_align">
          <form onSubmit={this.saveData}>
            <div className="scrollmenu">
              <table className="table table-striped table-bordered table-sm table-head">
                <tbody>
                  <tr>
                    <th className="text-center head" colSpan="2">Action</th>
                    <th className="text-center head">Code Quality Cyclometric</th>
                    <th className="text-center head">Technical Code</th>
                    <th className="text-center head">Maintainability Quality</th>
                    <th className="text-center head">Security Defects</th>
                    <th className="text-center head">Comments</th>
                  </tr>
                </tbody>
                <tbody>
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
                <input id="submit_button" type="submit" className="btn btn-primary" value="Submit" />
              </td>
            </div>
          </form>
        </div>
        <div className='col-md-1'></div>
      </div>
      // </div>
    )
  }
}

const mapPropsToState = (state) => {
  return {
    podContent: state.podContent
  }
}
export default connect(mapPropsToState)(Engineering);
