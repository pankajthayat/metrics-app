import React from 'react';
import "../../style/tableStyles.css"
import { connect } from "react-redux";
import { dataSortingDetailsForListView } from "../../actions/dashboardActions"
import Table, { Thead, Tbody, Tr, Th, Td } from "react-row-select-table"
import { getMonthId, getMonthName, getYearId, getYearById } from "../CommonFunctions/CommonFunctions"

export default class ProjectRow extends React.Component {
    render() {
        return (
            <tr >
                <td>{this.props.item.year}</td>
                <td>{getMonthName(this.props.item.month)}</td>
                <td >{(this.props.item.TelstraTeamSize)}</td>
                <td>{(this.props.item.CognizantTeamSize)}</td>
                <td >{(this.props.item.commitmentReliability === "" || null || undefined) ?
                    this.props.item.commitmentReliability + "-" : Number(this.props.item.commitmentReliability).toFixed(2) * 100 + "%"}</td>
                <td >{(this.props.item.unitTestCoverage === "" || null || undefined) ?
                    this.props.item.unitTestCoverage + "-" : Number(this.props.item.unitTestCoverage).toFixed(2) * 100 + "%"}</td>
                <td >{(this.props.item.AvgVelocityPerWeek === "" || null || undefined) ?
                    this.props.item.AvgVelocityPerWeek + "-" : Number(this.props.item.AvgVelocityPerWeek).toFixed(2)}</td>
                <td >{(this.props.item.CodeQualityTechnical === "" || null || undefined) ?
                    this.props.item.CodeQualityTechnical + "-" : Number(this.props.item.CodeQualityTechnical).toFixed(2)}</td>
                    

                        <td >{(this.props.item.CodeQualityCyclometric === "" || null || undefined) ?
                    this.props.item.CodeQualityCyclometric + "-" : Number(this.props.item.CodeQualityCyclometric).toFixed(2)}</td>

                <td>{(this.props.item.successfulDeploys === "" || null || undefined) ?
                    this.props.item.successfulDeploys + "-" : Number(this.props.item.successfulDeploys).toFixed(2) * 100 + "%"}</td>
        
                <td>{(this.props.item.PostProdDefectsCritical === "" || null || undefined) ?
                    this.props.item.PostProdDefectsCritical + "-" : Number(this.props.item.PostProdDefectsCritical).toFixed(2)}</td>
            </tr>
        )
    }
}




