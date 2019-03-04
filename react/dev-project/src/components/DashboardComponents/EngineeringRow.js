import React from 'react';
import { getMonthId, getMonthName } from "../CommonFunctions/CommonFunctions"
import { dataSortingDetailsForListView } from "../../actions/dashboardActions"
import { connect } from "react-redux";
import { showList } from '../../actions/listAction';


class EngineeringRow extends React.Component {

    handleOnClick = () => {
        let year = document.getElementById("year" + this.props.index).innerHTML;
        let month = document.getElementById("month" + this.props.index).innerHTML;
        let sortingDetails = {
            year,
            month,
            metricType: "engineering"
        };
        this.props.dataSortingDetailsForListView(sortingDetails);
    }

    render() {
        return (
            <tr id={this.props.index} onClick={this.handleOnClick}>
                <td id={"year" + this.props.index}>{this.props.item.year}</td>
                <td id={"month" + this.props.index}>{getMonthName(this.props.item.month)}</td>
                <td>{(this.props.item.CyclometricCode ==="" || null || undefined)?
                    this.props.item.CyclometricCode + "-":Number(this.props.item.CyclometricCode).toFixed(2)}</td>
                <td>{(this.props.item.TechnicalCode ==="" || null || undefined)?
                    this.props.item.TechnicalCode + "-":Number(this.props.item.TechnicalCode).toFixed(2)}</td>
                <td>{this.props.item.MaintainabilityIndex}</td>
                <td>{(this.props.item.SecurityDefects ==="" || null || undefined)?
                    this.props.item.SecurityDefects + "-":Number(this.props.item.SecurityDefects).toFixed(2)}</td>
            </tr>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        lists: state.lists.items
    }
}

export default connect(mapStateToProps, { showList, dataSortingDetailsForListView })(EngineeringRow)