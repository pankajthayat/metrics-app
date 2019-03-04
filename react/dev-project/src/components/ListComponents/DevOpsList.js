import React from 'react'
import { connect } from 'react-redux';
import { getMonthName } from "../CommonFunctions/CommonFunctions";
import axios from "axios";
import { updateDevops, deleteDevops, showList } from '../../actions/listAction';
import { DELETE_DEVOPS_URL, UPDATE_DEVOPS_URL } from '../Constants/constants';
import { ON_SEARCH_URL } from '../Constants/constants';
import DatePicker from "react-datepicker"; 

import "react-datepicker/dist/react-datepicker.css";

class DevOpsList extends React.Component {
    constructor(props) {
        super(props)

        var s = JSON.stringify(this.props.item.devops_release_date);
           var newDate="";
         if (typeof s !== "undefined")
           {
            var parts = s.split('-');
            newDate = parts[1] + '-' + parts[0] + '-' + parts[2];
            }

        this.state = {
            demoDate : new Date(newDate),
            showUpdate: false,
            podName: this.props.item.devops_pod_name,
            periodMonth: this.props.item.devops_month,
            periodYear: this.props.item.devops_year,
            releaseName: this.props.item.devops_release_name,
            releaseDate: this.props.item.devops_release_date,
            releaseDesc: this.props.item.devops_release_desc,
            releaseType: this.props.item.devops_release_type,
            deployementAttempted: this.props.item.devops_total_deployements_attempted,
            rollback: this.props.item.devops_rollbacks,
            totalDefects: this.props.item.devops_total_defects,
            openDefects: this.props.item.devops_open_defects,
            criticalDefects: this.props.item.devops_post_prod_defects_critical,
            highDefects: this.props.item.devops_post_prod_defects_high,
            mediumDefects: this.props.item.devops_post_prod_defects_medium,
            lowDefects: this.props.item.devops_post_prod_defects_low,
            successfulDeployments: this.props.item.devops_percentage_successful_deployements,
            comments: this.props.item.devops_comments,
        }
       
    }

    readPodName(e) {
        this.setState({ podName: e.target.value })
    }

    readReleaseName(e) {
        this.setState({ releaseName: e.target.value })
    }

    readReleaseDate(date) {
        this.setState({ demoDate: date})
        var DDate =  ("0"+ (date.getDate())).slice(-2);
        var DMonth = ("0"+ (date.getMonth()+1)).slice(-2);
        var DYear = date.getFullYear();
        const D = DDate + '-' + DMonth + '-' + DYear;
        this.setState({ releaseDate: D })
    }

    readReleaseDesc(e) {
        this.setState({ releaseDesc: e.target.value })
    }

    readReleaseType(e) {
        this.setState({ releaseType: e.target.value })
    }

    readPeriodMonth(e) {
        this.setState({ periodMonth: e.target.value })
    }

    readPeriodYear(e) {
        this.setState({ periodYear: e.target.value })
    }

    readComments(e) {
        this.setState({ comments: e.target.value })
    }

    readDeployementAttempted(e) {
        this.setState({ deployementAttempted: e.target.value })
    }

    readRollback(e) {
        this.setState({ rollback: e.target.value })
    }

    readTotalDefects(e) {
        this.setState({ totalDefects: e.target.value })
    }

    readOpenDefects(e) {
        this.setState({ openDefects: e.target.value })
    }

    readCriticalDefects(e) {
        this.setState({ criticalDefects: e.target.value })
    }

    readHighDefects(e) {
        this.setState({ highDefects: e.target.value })
    }

    readMediumDefects(e) {
        this.setState({ mediumDefects: e.target.value })
    }

    readLowDefects(e) {
        this.setState({ lowDefects: e.target.value })
    }

    readSuccessfulDeployments(e) {
        this.setState({ successfulDeployments: e.target.value })
    }

    update(event) {
        const devOps = {
            id: this.props.item.devops_id,
            podName: this.state.podName,
            releaseName: this.state.releaseName,
            releaseDate: this.state.releaseDate,
            releaseDesc: this.state.releaseDesc,
            releaseType: this.state.releaseType,
            periodMonth: this.state.periodMonth,
            periodYear: this.state.periodYear,
            comments: this.state.comments,
            deployementAttempted: this.state.deployementAttempted,
            rollback: this.state.rollback,
            totalDefects: this.state.totalDefects,
            openDefects: this.state.openDefects,
            criticalDefects: this.state.criticalDefects,
            highDefects: this.state.highDefects,
            mediumDefects: this.state.mediumDefects,
            lowDefects: this.state.lowDefects,
            successfulDeployments: this.state.successfulDeployments,
        }
        axios.defaults.headers.post["userName"] = "Madhu";
        axios.post(UPDATE_DEVOPS_URL, devOps).then(res => {
            console.log(devOps)
            this.props.updateDevops(devOps)
           this.updated(devOps)
        })
        this.showUpdateDetails()
    }

    delete(event) {
        const devOps = {
            id: this.props.item.devops_id,
            podName: this.state.podName,
            releaseName: this.state.releaseName,
            releaseDate: this.state.releaseDate,
            releaseDesc: this.state.releaseDesc,
            releaseType: this.state.releaseType,
            periodMonth: this.state.periodMonth,
            periodYear: this.state.periodYear,
            comments: this.state.comments,
            deployementAttempted: this.state.deployementAttempted,
            rollback: this.state.rollback,
            totalDefects: this.state.totalDefects,
            openDefects: this.state.openDefects,
            criticalDefects: this.state.criticalDefects,
            highDefects: this.state.highDefects,
            mediumDefects: this.state.mediumDefects,
            lowDefects: this.state.lowDefects,
            successfulDeployments: this.state.successfulDeployments,
        }

        axios.post(DELETE_DEVOPS_URL, devOps).then(res => {
            this.props.deleteDevops(devOps)
            this.updated(devOps)
        });
    }

    updated(devOps) {
        axios.get(ON_SEARCH_URL + "Release" + "&month=" + devOps.periodMonth + "&year=" + devOps.periodYear+ "&podname=" + devOps.podName).
            then(res => {
                console.log(res.data)
                this.props.showList(res.data)
            })
    }

    showUpdateDetails = () => {
        const temp = this.state.showUpdate
        this.setState({ showUpdate: !temp })
    }

    render() {
        return (
           
            <tr>
                {/*<td className="text-center">{this.props.item.devops_pod_name} </td>
                <td className="text-center">{getMonthName(this.props.item.devops_month)}</td>
                <td className="text-center">{this.props.item.devops_year}</td>*/}
                 <td className="text-center">{this.state.showUpdate === true ? <button type="submit" className="btn btn-primary" onClick={this.update.bind(this)}>Save</button> : <button type="button" className="btn btn-info btn-update" onClick={this.showUpdateDetails.bind(this)}><i class="glyphicon glyphicon-edit"></i></button>}</td>
                <td className="text-center"><button type="button" className="btn btn-info btn-danger" onClick={this.delete.bind(this)}><span class="glyphicon glyphicon-trash"></span></button></td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.releaseName} onChange={this.readReleaseName.bind(this)} /> : this.props.item.devops_release_name}</td>
                <td className="text-center">{this.state.showUpdate === true ? <DatePicker type="text" dateFormat= "dd-MM-yyyy" selected={this.state.demoDate} onChange={this.readReleaseDate.bind(this)} /> : this.props.item.devops_release_date}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.releaseDesc} onChange={this.readReleaseDesc.bind(this)} /> : this.props.item.devops_release_desc}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.releaseType} onChange={this.readReleaseType.bind(this)} /> : this.props.item.devops_release_type}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.deployementAttempted} onChange={this.readDeployementAttempted.bind(this)} /> : this.props.item.devops_total_deployements_attempted}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.rollback} onChange={this.readRollback.bind(this)} /> : this.props.item.devops_rollbacks}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.totalDefects} onChange={this.readTotalDefects.bind(this)} /> : this.props.item.devops_total_defects}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.openDefects} onChange={this.readOpenDefects.bind(this)} /> : this.props.item.devops_open_defects}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.criticalDefects} onChange={this.readCriticalDefects.bind(this)} /> : this.props.item.devops_post_prod_defects_critical}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.highDefects} onChange={this.readHighDefects.bind(this)} /> : this.props.item.devops_post_prod_defects_high}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.mediumDefects} onChange={this.readMediumDefects.bind(this)} /> : this.props.item.devops_post_prod_defects_medium}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.lowDefects} onChange={this.readLowDefects.bind(this)} /> : this.props.item.devops_post_prod_defects_low}</td>
                <td className="text-center">{this.state.showUpdate === true ? <input type="text" value={this.state.successfulDeployments} onChange={this.readSuccessfulDeployments.bind(this)} /> : this.props.item.devops_percentage_successful_deployements+" %"}</td>
                <td className="text-center">{this.state.showUpdate === true ? <textarea type="text" value={this.state.comments} onChange={this.readComments.bind(this)} /> : this.props.item.devops_comments}</td>
               
                
            </tr>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        podContent: state.podContent,
        devops: state.devops.item,
        lists: state.lists
    }
}

export default connect(mapStateToProps, { updateDevops, deleteDevops, showList })(DevOpsList)