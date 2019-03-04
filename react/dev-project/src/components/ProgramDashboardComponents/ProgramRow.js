import React from 'react';
import '../../style/programDashboard.css';
import { getMonthName } from "../CommonFunctions/CommonFunctions"

export default class ProgramRow extends React.Component {
    render() {
        console.log("item : ", this.props.item);
        return (
            <tr >
                <td >{this.props.item.year}</td>
                <td >{getMonthName(this.props.item.month)}</td>
                <td >{(this.props.item.AvgVelocityPerWeek || "-")}</td>
                <td >{(this.props.item.commitmentReliability === "" || null || undefined) ?
                    this.props.item.commitmentReliability + "-" : Number(this.props.item.commitmentReliability).toFixed(2) * 100 + "%"}</td>
                <td >{(this.props.item.unitTestCoverage === "" || null || undefined) ?
                    this.props.item.unitTestCoverage + "-" : Number(this.props.item.unitTestCoverage).toFixed(2) * 100 + "%"}</td>
                <td>{(this.props.item.agileAverageCycle === "" || null || undefined) ?
                    this.props.item.agileAverageCycle + "-" : Math.round(this.props.item.agileAverageCycle)}</td>
                <td>{(this.props.item.successfulDeploys === "" || null || undefined) ?
                    this.props.item.successfulDeploys + "-" : Math.round((this.props.item.successfulDeploys) * 100 )+ "%"}</td>
                <td >{(this.props.item.frequencyOfDeployment === "" || null || undefined) ?
                    this.props.item.frequencyOfDeployment + "-" : Number(this.props.item.frequencyOfDeployment).toFixed(2)}</td>
                <td >{(this.props.item.CodeQualityCyclometric === "" || null || undefined) ?
                    this.props.item.CodeQualityCyclometric + "-" : Number(this.props.item.CodeQualityCyclometric).toFixed(2)}</td>
                <td >{(this.props.item.CodeQualityTechnical === "" || null || undefined) ?
                    this.props.item.CodeQualityTechnical + "-" : Number(this.props.item.CodeQualityTechnical).toFixed(2)}</td>
                <td>{this.props.item.PostProdDefectsCritical || "0"}</td>
            </tr>
        )
    }
}




