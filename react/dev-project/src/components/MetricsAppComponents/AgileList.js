import React from 'react'
import { connect } from 'react-redux';
import AgileDisplayList from './AgileDisplayList'

class AgileList extends React.Component {
    render() {
        const AgileDataLists = this.props.lists.map(list => (
            <AgileDisplayList key={list.agile_id}
                id={list.agile_id}
                podName={list.agile_pod_name}
                month={list.agile_month}
                year={list.agile_year}
                iteration={list.agile_iteration}
                cognizantTeamSize={list.Cognizant_team_size}
                telstraTeamSize={list.telstra_team_size}
                numberOfHolidays={list.no_of_holidays}
                numberOfLeavesInPersonDays={list.no_of_leaves}
                iterationNumber={list.iteration_number}
                velocity={list.agile_velocity}
                plannedVelocity={list.agile_planned_velocity}
                rejectionRate={list.agile_rejection_rate}
                averageCycle={list.agile_average_cycle}
                velocityRate={list.agile_velocity_rate}
                commitmentReliability={list.commitment_reliability}
                velocityPerWeek={list.agile_velocity_per_week}
                comments={list.agile_comments}
            >
            </AgileDisplayList>))
        return (
            <div className="row" >
                <div className="table-responsive">
                    
                    {AgileDataLists}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.lists)
    return {
        lists: state.lists.items
    }
}

export default connect(mapStateToProps)(AgileList)