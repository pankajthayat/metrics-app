import React from 'react';
import { getMonthId, getMonthName } from "../CommonFunctions/CommonFunctions"
import { dataSortingDetailsForListView } from "../../actions/dashboardActions"
import { connect } from "react-redux";
import { showList } from '../../actions/listAction';


class DevOpsRow extends React.Component {

    handleOnClick = () => {
        let year = document.getElementById("year" + this.props.index).innerHTML;
        let month = document.getElementById("month" + this.props.index).innerHTML;
        let sortingDetails = {
            year,
            month,
            metricType: "devops"
        };
        this.props.dataSortingDetailsForListView(sortingDetails);
    }

    render() {
        return (
            <tr id={this.props.index} onClick={this.handleOnClick}>
                <td id={"year" + this.props.index}>{this.props.item.year}</td>
                <td id={"month" + this.props.index}>{getMonthName(this.props.item.month)}</td>
                <td>{(this.props.item.totalDeploysAttempted ==="" || null || undefined)?
                    this.props.item.totalDeploysAttempted + "-":Number(this.props.item.totalDeploysAttempted).toFixed(2)}</td>
                <td>{(this.props.item.successfulDeploys ==="" || null || undefined)?
                    this.props.item.successfulDeploys + "-":Number((this.props.item.successfulDeploys)*100) + " %"}</td>
                <td>{(this.props.item.postProdDefectsCritical ==="" || null || undefined)?
                    this.props.item.postProdDefectsCritical + "-":Number(this.props.item.postProdDefectsCritical)}</td>
                <td>{(this.props.item.postProdDefectsHigh ==="" || null || undefined)?
                    this.props.item.postProdDefectsHigh + "-":Number(this.props.item.postProdDefectsHigh)}</td>
                <td>{(this.props.item.postProdDefectsMedium ==="" || null || undefined)?
                    this.props.item.postProdDefectsMedium + "-":Number(this.props.item.postProdDefectsMedium)}</td>
                <td>{(this.props.item.postProdDefectsLow ==="" || null || undefined)?
                    this.props.item.postProdDefectsLow + "-":Number(this.props.item.postProdDefectsLow)}</td>
                <td>{(this.props.item.totalDefects ==="" || null || undefined)?
                    this.props.item.totalDefects + "-":Number(this.props.item.totalDefects)}</td>
                <td>{(this.props.item.openDefects ==="" || null || undefined)?
                    this.props.item.openDefects + "-":Number(this.props.item.openDefects)}</td>
            </tr>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists.items
    }
}
export default connect(mapStateToProps, { showList, dataSortingDetailsForListView })(DevOpsRow)