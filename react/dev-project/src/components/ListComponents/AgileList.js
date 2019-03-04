import React from 'react'
import { connect } from 'react-redux';
import { updateAgile, deleteAgile } from '../../actions/agileActions';
import { getMonthName } from "../CommonFunctions/CommonFunctions";
import AgileDisplayList from './AgileDisplayList'
import swal from 'sweetalert';
import { ON_SEARCH_URL } from '../Constants/constants';
import axios from "axios";
import { showList } from '../../actions/listAction';
import { UPDATE_AGILE_URL, DELETE_AGILE_URL } from "../Constants/constants" 
import '../../style/metricsapp.css';
import '../../style/devops.css';

class AgileList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showUpdate: false,
            podName: this.props.item.agile_pod_name,
            month: this.props.item.agile_month,
            year: this.props.item.agile_year,
            iteration: this.props.item.agile_iteration,
            cognizantTeamSize: this.props.item.cognizant_team_size,
            telstraTeamSize: this.props.item.telstra_team_size,
            numberOfCognizantHolidays: this.props.item.agile_cognizant_holiday,
            numberOfCognizantleaves: this.props.item.agile_cognizant_leaves,
			numberOfTelstraHolidays: this.props.item.agile_telstra_holiday,
			numberOfTelstraleaves: this.props.item.agile_telstra_leaves,
            iterationNumber: this.props.item.iteration_number,
			userStoriesCommitted: this.props.item.agile_userstory_commited,
			userStoriesAccepted: this.props.item.agile_userstory_accepted,
			committedStoryPoints: this.props.item.agile_committed_story_points,
			acceptedStoryPoints: this.props.item.agile_accepted_story_points,
			acceptedStoryPointsPerWeek: this.props.item.agile_accepted_story_points_per_week,
			unitTestCoverage: this.props.item.agile_unit_test_coverage,
            averageCycle: this.props.item.agile_average_cycle,
            velocityRate: this.props.item.agile_velocity_rate,
            commitmentReliability: this.props.item.commitment_reliability,
            comments: this.props.item.agile_comments
        }
        this.showUpdateDetails = this.showUpdateDetails.bind(this)
        this.update = this.update.bind(this)
        this.delete = this.delete.bind(this)
    }

    readPodName(e) {
        this.setState({ podName: e.target.value })
    }

    readCognizantTeamSize(e) {
        this.setState({ cognizantTeamSize: e.target.value })
    }

    readIteration(e){
        this.setState({ iteration:e.target.value })
    }

    readTelstraTeamSize(e) {
        this.setState({ telstraTeamSize: e.target.value })
    }

    readCognizantHoliday(e) {
        this.setState({ numberOfCognizantHolidays: e.target.value })
    }

    readCognizantLeaves(e) {
        this.setState({ numberOfCognizantleaves: e.target.value })
    }

    readTelstraHoliday(e) {
        this.setState({ numberOfTelstraHolidays: e.target.value })
    }

    readTelstraLeaves(e) {
        this.setState({ numberOfTelstraleaves: e.target.value })
    }

    readIterationNumber(e) {
        this.setState({ iterationNumber: e.target.value })
    }

    readUserStoryCommitted(e) {
        this.setState({ userStoriesCommitted: e.target.value })
    }

    readUserStoryAccepted(e) {
        this.setState({ userStoriesAccepted: e.target.value })
    }

    readCommittedStoryPoints(e) {
        this.setState({ committedStoryPoints: e.target.value })
    }

    readAcceptedStoryPoints(e) {
        this.setState({ acceptedStoryPoints: e.target.value })
    }

    readAcceptedStoryPointsPerWeek(e) {
        this.setState({ acceptedStoryPointsPerWeek: e.target.value })
    }

    readUnitTestCoverage(e) {
        this.setState({ unitTestCoverage: e.target.value })
    }

    readAverageCycle(e) {
        this.setState({ averageCycle: e.target.value })
    }

    readVelocityRate(e) {
        this.setState({ velocityRate: e.target.value })
    }

    readCommitmentReliability(e) {
        this.setState({ commitmentReliability: e.target.value })
    }


    readMonth(e) {
        this.setState({ month: e.target.value })
    }

    readYear(e) {
        this.setState({ year: e.target.value })
    }

    readComments(e) {
        this.setState({ comments: e.target.value })
    }

    sweetAlert() {
        swal("Successfully Deleted!", "Successfully Deleted", "Deleted")
    }

    update(event) {
        const agile = {
            id: this.props.item.agile_id,
            podName: this.state.podName,
            iteration: this.state.iteration,
            cognizantTeamSize: this.state.cognizantTeamSize,
            telstraTeamSize: this.state.telstraTeamSize,
            numberOfCognizantHolidays: this.state.numberOfCognizantHolidays,
            numberOfCognizantleaves: this.state.numberOfCognizantleaves,
			numberOfTelstraHolidays: this.state.numberOfTelstraHolidays,
			numberOfTelstraleaves: this.state.numberOfTelstraleaves,
            iterationNumber: this.state.iterationNumber,
			userStoriesCommitted: this.state.userStoriesCommitted,
			userStoriesAccepted: this.state.userStoriesAccepted,
			committedStoryPoints: this.state.committedStoryPoints,
			acceptedStoryPoints: this.state.acceptedStoryPoints,
			acceptedStoryPointsPerWeek: this.state.acceptedStoryPointsPerWeek,
			unitTestCoverage: this.state.unitTestCoverage,
            averageCycle: this.state.averageCycle,
            velocityRate: this.state.velocityRate,
            commitmentReliability: this.state.commitmentReliability,
            month: this.state.month,
            year: this.state.year,
            comments: this.state.comments,
        }
        axios.defaults.headers.post["userName"] = "pankaj";
        axios.post(UPDATE_AGILE_URL, agile)
        .then(res => {
            this.props.updateAgile(agile)
            this.updated(agile)
        });
        
        this.showUpdateDetails()
        
    }

    delete(event) {
        const agile = {
            id: this.props.item.agile_id,
            podName: this.state.podName,
            iteration: this.state.iteration,
            cognizantTeamSize: this.state.cognizantTeamSize,
            telstraTeamSize: this.state.telstraTeamSize,
            numberOfCognizantHolidays: this.state.numberOfCognizantHolidays,
            numberOfCognizantleaves: this.state.numberOfCognizantleaves,
			numberOfTelstraHolidays: this.state.numberOfTelstraHolidays,
			numberOfTelstraleaves: this.state.numberOfTelstraleaves,
            iterationNumber: this.state.iterationNumber,
			userStoriesCommitted: this.state.userStoriesCommitted,
			userStoriesAccepted: this.state.userStoriesAccepted,
			committedStoryPoints: this.state.committedStoryPoints,
			acceptedStoryPoints: this.state.acceptedStoryPoints,
			acceptedStoryPointsPerWeek: this.state.acceptedStoryPointsPerWeek,
			unitTestCoverage: this.state.unitTestCoverage,
            averageCycle: this.state.averageCycle,
            velocityRate: this.state.velocityRate,
            commitmentReliability: this.state.commitmentReliability,
            month: this.state.month,
            year: this.state.year,
            comments: this.state.comments,
        }
        axios.defaults.headers.post["userName"] = "pankaj";
            axios.post(DELETE_AGILE_URL, agile)
            .then(res => {
                this.props.deleteAgile(agile)
        window.confirm("Are you sure you wish to delete this item?")
        this.sweetAlert()
        this.updated(agile)
            });
        

    }

    updated(agile){
        axios.get(ON_SEARCH_URL + "Sprint" + "&month=" + agile.month + "&year=" + agile.year + "&podname=" + agile.podName).
      then(res => {
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
                {/*<td className="text-center">{this.props.item.agile_pod_name } </td>
                <td className="text-center">{getMonthName(this.props.item.agile_month)}</td>
                <td className="text-center">{this.props.item.agile_year}</td>*/}
                <td className="text-center">{this.state.showUpdate === true ?<button type="submit" className="btn btn-primary " onClick={this.update}>Save</button>:<button type="button" className="btn btn-info btn-sm btn-update" onClick={this.showUpdateDetails}><i class="glyphicon glyphicon-edit"></i></button>}</td>
                <td className="text-center"><button type="button" className="btn btn-info btn-danger" onClick={this.delete}><span class="glyphicon glyphicon-trash"></span></button></td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.iteration} onChange={this.readIteration.bind(this)} />:this.props.item.agile_iteration}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.cognizantTeamSize} onChange={this.readCognizantTeamSize.bind(this)} />:this.props.item.cognizant_team_size}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.telstraTeamSize} onChange={this.readTelstraTeamSize.bind(this)} />:this.props.item.telstra_team_size}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.numberOfCognizantHolidays} onChange={this.readCognizantHoliday.bind(this)} />:this.props.item.agile_cognizant_holiday}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.numberOfCognizantleaves} onChange={this.readCognizantLeaves.bind(this)} />: this.props.item.agile_cognizant_leaves}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.numberOfTelstraHolidays} onChange={this.readTelstraHoliday.bind(this)} />:this.props.item.agile_telstra_holiday}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.numberOfTelstraleaves} onChange={this.readTelstraLeaves.bind(this)} />:this.props.item.agile_telstra_leaves}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.iterationNumber} onChange={this.readIterationNumber.bind(this)} />:this.props.item.iteration_number}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.userStoriesCommitted} onChange={this.readUserStoryCommitted.bind(this)} />:this.props.item.agile_userstory_commited}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.userStoriesAccepted} onChange={this.readUserStoryAccepted.bind(this)} />:this.props.item.agile_userstory_accepted}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.committedStoryPoints} onChange={this.readCommittedStoryPoints.bind(this)} />:this.props.item.agile_committed_story_points}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.acceptedStoryPoints} onChange={this.readAcceptedStoryPoints.bind(this)} />:this.props.item.agile_accepted_story_points}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.acceptedStoryPointsPerWeek= Number((this.state.acceptedStoryPoints/ this.state.iteration).toFixed(2))||"0.00"} onChange={this.readAcceptedStoryPointsPerWeek.bind(this)} readOnly />:this.props.item.agile_accepted_story_points_per_week}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.unitTestCoverage} onChange={this.readUnitTestCoverage.bind(this)} />:Math.round((this.props.item.agile_unit_test_coverage)*100)+" %"}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.averageCycle} onChange={this.readAverageCycle.bind(this)} />:this.props.item.agile_average_cycle}</td>
                <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.velocityRate} onChange={this.readVelocityRate.bind(this)} />:Number(this.props.item.agile_velocity_rate).toFixed(2) || this.props.item.agile_velocity_rate}</td>
                 <td className="text-center">{this.state.showUpdate === true ?<input type="text" value={this.state.commitmentReliability= Number((this.state.acceptedStoryPoints / this.state.committedStoryPoints).toFixed(2) * 100)||"0.00"} onChange={this.readCommitmentReliability.bind(this)} readOnly />:(Math.round(this.props.item.commitment_reliability))+" %"}</td>
                <td className="text-center">{this.state.showUpdate === true ?<textarea type="text" value={this.state.comments} onChange={this.readComments.bind(this)} />:this.props.item.agile_comments}</td>
                
                </tr>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        podContent: state.podContent,
        agile: state.agile.item,
        lists: state.lists
    }
}

export default connect(mapStateToProps, {updateAgile, deleteAgile, showList })(AgileList)