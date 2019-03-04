import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showList, exportList } from '../../actions/listAction';
import axios from 'axios'
import '../../style/list.css';
import '../../style/metricsapp.css';
import AddAgile from '../AgileComponents/AddAgile';
import AddDevops from '../DevopsComponents/AddDevops';
import AddEngineering from '../EngineeringComponents/AddEngineering';
import AgileDisplayList from './AgileDisplayList';
import DevOpsDisplayList from './DevOpsDisplayList';
import EngineeringDisplayList from './EngineeringDisplayList';
import { ON_SEARCH_URL, ON_EXPORT_URL } from '../Constants/constants';
import PodContent from '../PodComponents/PodContent';
import { getMonthName } from "../CommonFunctions/CommonFunctions"

class ListItems extends Component {
  constructor(props) {
    super(props)
    this.Addflag = 0
    this.search = 0
    this.flag = 0
    this.renders = 0
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    this.metricsMonth = new Date().getMonth() + 1
    this.metricsYear = new Date().getFullYear()
    this.state = {
      month: [{
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
      }],
      metricsType: [{
        metricsTypeId: "1",
        metricsTypeName: "Sprint"
      },
      {
        metricsTypeId: "2",
        metricsTypeName: "Release"
      },
      {
        metricsTypeId: "3",
        metricsTypeName: "Engineering"
      }],
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
        periodYearName: "2026"
      }
      ],
      periodIndex: currentYear,
      monthIndex: currentMonth,
      values: "Sprint"
    }
    this.addMonth = this.addMonth.bind(this)
    this.selected = this.selected.bind(this)
    this.addPeriodYear = this.addPeriodYear.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.onExport = this.onExport.bind(this)
    this.onAdd = this.onAdd.bind(this)


  }

  addPeriodYear(e) {
    let periodYearList = this.state.periodYearList;
    let selected = e.target.value;
    this.metricsYear = selected;
    console.log("selected year>>>", this.metricsYear)
    let index = periodYearList.findIndex(x => x.periodYearName === selected);
    this.setState((preState) => ({ ...preState, periodIndex: periodYearList[index].periodYearName }))
  }

  addMonth(e) {
    let month = this.state.month;
    let selected = e.target.value;
    let index = month.findIndex(x => x.periodMonthName === selected)
    this.setState((preState) => ({ ...preState, monthIndex: month[index].periodMonthId }))
    this.metricsMonth = index + 1;
    console.log("selected month id>>>", this.metricsMonth)
  }

  onSearch() {
    this.search = 1
    this.renders = 1;
    axios.get(ON_SEARCH_URL + this.state.values + "&month=" + this.state.monthIndex + "&year=" + this.state.periodIndex + "&podname=" + this.props.podContent.podName).
      then(res => {
        console.log(res.data)
        this.props.showList(res.data)
      })
  }

  onExport() {
    const FileDownload = require('js-file-download');
    axios.get(ON_EXPORT_URL + this.state.values + "&month=" + this.state.monthIndex + "&year=" + this.state.periodIndex + "&podname=" + this.props.podContent.podName, {
      responseType: 'arraybuffer'
    }).
      then(res => {
        var blob = new Blob([res.data], { 'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=Cp1252' });
        FileDownload(blob, 'report.xls');
      })
  }

  selected(e) {
    return this.setState({ values: e.target.value })
  }

  onAdd() {
    this.Addflag = 1;
    this.renders = 1;
  }


  render() {
  
    var rendering;
    var addRow;
      const metric = this.state.values;
      if (metric === 'Sprint') {
        rendering = <AgileDisplayList />;
        if (this.Addflag === 1) {
          addRow = <AddAgile month={this.metricsMonth} year={this.metricsYear} />;

        }
        else {
          addRow = null;
        }
       
      } else if (metric === 'Release') {
        rendering = <DevOpsDisplayList />
        if (this.Addflag === 1) {
          addRow = <AddDevops month={this.metricsMonth} year={this.metricsYear} />;
        }
        else {
          addRow = null;
        }
  
      } else if (metric === 'Engineering') {
        rendering = <EngineeringDisplayList />
        if (this.Addflag === 1) {
          addRow = <AddEngineering month={this.metricsMonth} year={this.metricsYear} />;
        }
        else {
          addRow = null;
        }

      }
    let months = this.state.month.map(data => {
      return <option className="color" key={data.periodMonthId}>
        {data.periodMonthName}
      </option>;
    });

    let years = this.state.periodYearList.map(data => {
      return <option className="color" key={data.periodYearId}>
        {data.periodYearName}
      </option>;
    });

    return (
      <div className="sidebarspace bck-img">
        <div >
          <br />
          <p className="text-color left-margin">* Select All the Data</p>
          <form>
            <div className="row left-margin">
              <div className="col-md-3">
                <label className="text-color">Metric Type:</label><br />
                <form>
                  <div className="form-group text-color">
                    <input type="radio" name="metrics" value="Sprint" onChange={this.selected} defaultChecked />  Sprint &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="metrics" value="Release" onChange={this.selected} />  Release  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" name="metrics" value="Engineering" onChange={this.selected} />  Engineering &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </form>
                <br />
              </div>
              <div className="col-md-2">
                <label className="text-color">Period:</label>
                <select ref="month" className="form-control color" value={getMonthName(this.state.monthIndex)} onChange={this.addMonth} >
                  {months}
                </select>
              </div>
              <div className="col-md-2">
                <label className="text-color">Year:</label><br />
                <select ref="month" className="form-control color" value={this.state.periodIndex} onChange={this.addPeriodYear} >
                  {years}
                </select>
              </div>

              <div className="col-md-4">
                <PodContent />
              </div>

            </div><br />
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-2">
                <button type="button" className="search" onClick={this.onSearch}>Search / Edit</button>
              </div>

              <div className="col-md-2">
                {this.props.lists.length != 0 ? <button type="button" className="search" onClick={this.onExport}>Export File</button> :
                  <button type="button" className="export" disabled>Export File</button>
                }
              </div>
              <div className="col-md-4">
                <button className="search" onClick={this.onAdd}>Add</button>
              </div>
            </div>
          </form><br />

          {this.Addflag == 1 ? addRow : ""}
          {this.search == 1 ? rendering : ""}

          <br /><br /><br />
        </div >
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    podContent: state.podContent,
    lists: state.lists.items,
    dashboard: state.dashboard
  }
}

export default connect(mapStateToProps, { showList, exportList })(ListItems)
