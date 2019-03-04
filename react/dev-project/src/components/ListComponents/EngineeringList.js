import React from 'react'
import { connect } from 'react-redux';
import { getMonthName } from "../CommonFunctions/CommonFunctions";
import axios from "axios";
import { updateEngineering, deleteEngineering } from '../../actions/listAction';
import { showList } from '../../actions/listAction';
import { DELETE_ENGINEERING_URL, UPDATE_ENGINEERING_URL  } from '../Constants/constants';
import { ON_SEARCH_URL } from '../Constants/constants';

class EngineeringList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showUpdate: false,
            podName: this.props.item.eng_pod_name,
            codeQualityCyclometric: this.props.item.cyclometric_complexity,
            technicalCode: this.props.item.technical_code,
            maintainabilityQuality: this.props.item.maintainability_quality,
            periodMonth: this.props.item.eng_month,
            periodYear: this.props.item.eng_year,
            securityDefects: this.props.item.eng_security_defect,
            comments: this.props.item.eng_comments
        }
        this.showUpdateDetails = this.showUpdateDetails.bind(this)
        this.readPeriodMonth = this.readPeriodMonth.bind(this)
        this.readPeriodYear = this.readPeriodYear.bind(this)
        this.readCyclometricCode = this.readCyclometricCode.bind(this)
        this.readTechnicalCode = this.readTechnicalCode.bind(this)
        this.readMaintainabilityQuality = this.readMaintainabilityQuality.bind(this)
        this.readSecurityDefect = this.readSecurityDefect.bind(this)
        this.readComments = this.readComments.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    readPeriodMonth(e) {
        this.setState({ periodMonth: e.target.value })
    }

    readPeriodYear(e) {
        this.setState({ periodYear: e.target.value })
    }

    readCyclometricCode(e) {
        this.setState({ codeQualityCyclometric: e.target.value })
    }

    readTechnicalCode(e) {
        this.setState({ technicalCode: e.target.value })
    }

    readMaintainabilityQuality(e) {
        this.setState({ maintainabilityQuality: e.target.value })
    }

    readSecurityDefect(e) {
        this.setState({ securityDefects: e.target.value })
    }

    readComments(e) {
        this.setState({ comments: e.target.value })
    }

    update(event) {
        const engineering = {
            id: this.props.item.eng_id,
            podName: this.state.podName,
            codeQualityCyclometric: this.state.codeQualityCyclometric,
            technicalCode: this.state.technicalCode,
            maintainabilityQuality: this.state.maintainabilityQuality,
            securityDefects: this.state.securityDefects,
            periodMonth: this.state.periodMonth,
            periodYear: this.state.periodYear,
            comments: this.state.comments,
        }
        axios.defaults.headers.post["userName"] = "SWATHI";
        axios.post(
            UPDATE_ENGINEERING_URL, engineering)
            .then(res => {
                this.props.updateEngineering(engineering)
                this.updated(engineering)
            });
        this.showUpdateDetails()
    }

     updated(engineering){
        console.log(engineering.periodMonth)
        axios.get(ON_SEARCH_URL + "Engineering" + "&month=" + engineering.periodMonth + "&year=" + engineering.periodYear+ "&podname=" + engineering.podName).
      then(res => {
        this.props.showList(res.data)
      })
    }

    delete(event) {
        const engineering = {
            id: this.props.item.eng_id,
            podName: this.state.podName,
            codeQualityCyclometric: this.state.codeQualityCyclometric,
            technicalCode: this.state.technicalCode,
            maintainabilityQuality: this.state.maintainabilityQuality,
            securityDefects: this.state.securityDefect,
            periodMonth: this.state.periodMonth,
            periodYear: this.state.periodYear,
            comments: this.state.comments
        }

        axios.post(
            DELETE_ENGINEERING_URL, engineering)
            .then(res => {
                this.props.deleteEngineering(engineering)
                this.updated(engineering)
            });
    }

    showUpdateDetails = () => {
        const temp = this.state.showUpdate
        this.setState({ showUpdate: !temp })
    }

    render() {
        return (

            <tr id={"table" + this.props.index}>
                {/*<td className="text-center">{this.props.item.eng_pod_name}</td>
                <td className="text-center">{getMonthName(this.props.item.eng_month)}</td>
                <td className="text-center">{this.props.item.eng_year}</td>*/}
                <td className="text-center">{this.state.showUpdate === true ?<button type="submit" className="btn btn-primary" onClick={this.update}>Save</button>:<button type="button" className="btn btn-info btn-update" onClick={(this.showUpdateDetails)}><i class="glyphicon glyphicon-edit"></i></button>}</td>
                <td className="text-center"><button type="button" className="btn btn-info btn-danger" onClick={this.delete}><span class="glyphicon glyphicon-trash"></span></button></td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.codeQualityCyclometric} onChange={this.readCyclometricCode} />:this.props.item.cyclometric_complexity}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.technicalCode} onChange={this.readTechnicalCode} />:this.props.item.technical_code}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.maintainabilityQuality} onChange={this.readMaintainabilityQuality} />:this.props.item.maintainability_quality}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.securityDefects} onChange={this.readSecurityDefect} />:this.props.item.eng_security_defect}</td>
                <td className="text-center">{this.state.showUpdate === true ?<textarea type="text" value={this.state.comments} onChange={this.readComments} />:this.props.item.eng_comments}</td>
          </tr>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        podContent: state.podContent,
        engineering: state.engineering.item,
        lists: state.lists
    }
}

export default connect(mapStateToProps, { updateEngineering, deleteEngineering, showList })(EngineeringList)