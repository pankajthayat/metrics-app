import React from 'react'
import { connect } from 'react-redux';
import EngineeringDisplayList from './EngineeringDisplayList'
import { getMonthName } from "../CommonFunctions/CommonFunctions";



class EngineeringList extends React.Component {
    /*render() {
        const EngineeringDataLists = this.props.lists.map(list => (
            <EngineeringDisplayList key={list.eng_id}
                id={list.eng_id}
                podName={list.eng_pod_name}
                cyclometricCode={list.cyclometric_code}
                technicalCode={list.technical_code}
                release={list.eng_release}
                maintainabilityQuality={list.maintainability_quality}
                iteration={list.eng_iteration}
                unitTest={list.eng_unit_test}
                periodMonth={list.eng_month}
                periodYear={list.eng_year}
                comments={list.eng_comments}>
            </EngineeringDisplayList>))
        return (
            <div className="container">
                {EngineeringDataLists}
            </div>

        );
    }*/
    render(){
        return(
            <tr>
                            <td className="text-center">{this.props.podName} </td>
                            <td className="text-center">{getMonthName(this.props.periodMonth)}</td>
                            <td className="text-center">{this.props.periodYear}</td>
                            <td className="text-center">{this.props.release}</td>
                            <td className="text-center">{this.props.iteration}</td>
                            <td className="text-center">{this.props.cyclometricCode}</td>
                            <td className="text-center">{this.props.technicalCode}</td>
                            <td className="text-center">{this.props.unitTest}</td>
                            <td className="text-center">{this.props.maintainabilityQuality}</td>
                            <td className="text-center">{this.props.comments}</td>
                        </tr>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.lists.items)
    return {
        lists: state.lists.items
    }
}

export default connect(mapStateToProps)(EngineeringList)