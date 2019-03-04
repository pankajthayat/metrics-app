import React from 'react';
import CycleCard from "./CycleCard"
import VelocityCard from "./VelocityCard";
import FrequencyCard from "./FrequencyCard";
import PostProdDefectCard from "./PostProdDefectCard";
import TechDebtsCard from "./TechDebtsCard";
import CodeComplexityCard from "./CodeComplexityCard";


export default class ProgramCard extends React.Component {

    cardDataCycle = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = (programData[length - 1]).agileAverageCycle;
        if (value == 0)
            return data;
        value = value < length ? value : length;
        for (let i = 1; i < value; i++) {
            data = Number(data) + Number((programData[length - 1 - i]).agileAverageCycle)
        }
        return Math.round(data / value);
    }

    cardDataCycleProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardAverageCycle
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }
    cardDataCycleNoProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardAverageCycleNoProject
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }

    cardDataVelocityProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardVelocityPerWeek
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }


    cardDataVeloctiy = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = (programData[length - 1]).averageAceeptedStoryPoint;
        if (value == 0)
            return data;
        value = value < length ? value : length;
        for (let i = 1; i < value; i++) {
            data = Number(data) + Number((programData[length - 1 - i]).averageAceeptedStoryPoint)
            console.log(data)
        }
        return Math.round(data / value);
    }

cardDataVelocityNoProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardVelocityPerWeekNoProject
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }


    cardDataFrequencyProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardFrequencyOfDeployment
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }

    cardDataFrequencyProjectNoProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardFrequencyOfDeploymentNoProject
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }


    cardDataFrequency = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = (programData[length - 1]).frequencyOfDeployment;
        if (value == 0)
            return data;
        value = value < length ? value : length;
        for (let i = 1; i < value; i++) {
            data = Number(data) + Number((programData[length - 1 - i]).frequencyOfDeployment)
        }
        return Math.round(data / value);
    }

    cardDataProdDefectProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardPostProdDefects
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }

    cardDataProdDefectProjectNoProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardPostProdDefectsNoProject
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }

    cardDataPostProdDefect = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = (programData[length - 1]).PostProdDefectsCritical;
        if (value == 0)
            return data;
        value = value < length ? value : length;
        for (let i = 1; i < value; i++) {
            data = Number(data) + Number((programData[length - 1 - i]).PostProdDefectsCritical)
        }
        return Math.round(data / value);
    }

    cardDataTechDebtsProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardCodeQualityTechnical
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }

    cardDataTechDebtsProjectNoProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardCodeQualityTechnicalNoProject
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }

    cardDataTechDebts = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = (programData[length - 1]).CodeQualityTechnical;
        if (value == 0)
            return data;
        value = value < length ? value : length;
        for (let i = 1; i < value; i++) {
            data = Number(data) + Number((programData[length - 1 - i]).CodeQualityTechnical)
        }
        return Math.round(data / value);
    }

    cardDataCodeQualityCyclometricProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardCodeQualityCyclometric
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }

    cardDataCodeQualityCyclometricProjectNoProject = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = "";
        data = (programData[length - 1]).cardCodeQualityCyclometricNoProject
        if (value == 0)
            return data;
        value = value < length ? value : length;
        return data;
    }

    cardDataCodeQualityCyclometric = (programData, value) => {
        let sortedData = programData.sort((a, b) => a.month - b.month);
        if ((programData[programData.length - 1]) == undefined)
            return 0;
        const length = programData.length;
        let data = (programData[length - 1]).CodeQualityCyclometric;
        if (value == 0)
            return data;
        value = value < length ? value : length;
        for (let i = 1; i < value; i++) {
            data = Number(data) + Number((programData[length - 1 - i]).CodeQualityCyclometric)
        }
        return Math.round(data / value);
    }

    render() {
        let data1 = this.props.data.filter((data) => data);
        return (

            <div className="container">
                <div className="col-md-12">
                    <div className="row">
                    <div className="col-md-2">
                        <CycleCard data={this.cardDataCycle(this.props.data, this.props.value)} project={this.cardDataCycleProject(this.props.data, this.props.value)} noOfProject={this.cardDataCycleNoProject(this.props.data, this.props.value)} month={this.props.month} value={this.props.value} />
                    </div>
                    <div className="col-md-2">
                        <VelocityCard data={this.cardDataVeloctiy(this.props.data, this.props.value)} project={this.cardDataVelocityProject(this.props.data, this.props.value)} noOfProject={this.cardDataVelocityNoProject(this.props.data, this.props.value)} month={this.props.month} value={this.props.value} />
                    </div>
                    <div className="col-md-2">
                        <FrequencyCard data={this.cardDataFrequency(this.props.data, this.props.value)} project={this.cardDataFrequencyProject(this.props.data, this.props.value)} noOfProject={this.cardDataFrequencyProjectNoProject(this.props.data, this.props.value)} month={this.props.month} value={this.props.value} />
                    </div>
                     
                    <div className="col-md-2">
                        <PostProdDefectCard data={this.cardDataPostProdDefect(this.props.data, this.props.value)} project={this.cardDataProdDefectProject(this.props.data, this.props.value)} noOfProject={this.cardDataProdDefectProjectNoProject(this.props.data, this.props.value)} month={this.props.month} value={this.props.value} />
                    </div>
                   
                   
                        {/*<div className="col-md-1">
                        
                    </div>*/}
                    <div className="col-md-2">
                        <TechDebtsCard data={this.cardDataTechDebts(this.props.data, this.props.value)} project={this.cardDataTechDebtsProject(this.props.data, this.props.value)} noOfProject={this.cardDataTechDebtsProjectNoProject(this.props.data, this.props.value)} month={this.props.month} value={this.props.value} />
                    </div>
                    {/*<div className="col-md-2">
                        
                    </div>*/}
                    <div className="col-md-2">
                        <CodeComplexityCard data={this.cardDataCodeQualityCyclometric(this.props.data, this.props.value)} project={this.cardDataCodeQualityCyclometricProject(this.props.data, this.props.value)} noOfProject={this.cardDataCodeQualityCyclometricProjectNoProject(this.props.data, this.props.value)}month={this.props.month} value={this.props.value} />
                    </div>
                    </div>
                </div>
            </div>


        )
    }
}