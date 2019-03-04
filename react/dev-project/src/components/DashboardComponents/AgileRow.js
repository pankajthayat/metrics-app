import React from 'react';
import "../../style/tableStyles.css"
import { connect } from "react-redux";
import { dataSortingDetailsForListView } from "../../actions/dashboardActions"
import { getMonthId, getMonthName } from "../CommonFunctions/CommonFunctions";
import { showList } from '../../actions/listAction';


class AgileRow extends React.Component {
    
    handleOnClick = (e) => {
        e.persist();
        let year = document.getElementById("year" + this.props.index).innerHTML;
        let month = document.getElementById("month" + this.props.index).innerHTML;
        let sortingDetails = {
            year,
            month,
            metricType: "agile"
        };
        this.props.dataSortingDetailsForListView(sortingDetails);
 }
    render() {
        return (
            <tr id={"table" + this.props.index} onClick={this.handleOnClick} >
                <td id={"year" + this.props.index}>{this.props.item.year}</td>
                <td id={"month" + this.props.index}>{getMonthName(this.props.item.month)}</td>
                <td>{(this.props.item.cognizantTeamSize ==="" || null || undefined)?
                    this.props.item.cognizantTeamSize + "-":Number(this.props.item.cognizantTeamSize).toFixed(2)}</td>
                <td>{(this.props.item.telstraTeamSize ==="" || null || undefined)?
                    this.props.item.telstraTeamSize + "-":Number(this.props.item.telstraTeamSize).toFixed(2)}</td>
                <td>{(this.props.item.velocityRate ==="" || null || undefined)?
                    this.props.item.velocityRate + "-":Number(this.props.item.velocityRate).toFixed(2)}</td>
                <td>{(this.props.item.commitmentReliability ==="" || null || undefined)?
                    this.props.item.commitmentReliability + "-":Math.round((this.props.item.commitmentReliability)*100) + " %"}</td>
                <td>{(this.props.item.unitTestCoverage ==="" || null || undefined)?
                    this.props.item.unitTestCoverage + "-":Math.round((this.props.item.unitTestCoverage)*100) + " %"}</td>
                 <td>{(this.props.item.velocityPerWeek ==="" || null || undefined)?
                    this.props.item.velocityPerWeek + "-":Number(this.props.item.velocityPerWeek).toFixed(2)}</td>
                <td>{(this.props.item.averageCycleTime ==="" || null || undefined)?
                    this.props.item.averageCycleTime + "-":Number(this.props.item.averageCycleTime).toFixed(2)}</td>
            </tr>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        lists: state.lists.items
    }
}
export default connect(mapStateToProps, { showList, dataSortingDetailsForListView })(AgileRow)
