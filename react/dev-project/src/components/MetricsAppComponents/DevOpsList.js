import React from 'react'
import { connect } from 'react-redux';
import DevOpsDisplayList from './DevOpsDisplayList'


class DevOpsList extends React.Component {
    render() {
        const DevOpsDataLists = this.props.lists.map(list => (
            <DevOpsDisplayList key={list.devops_id}
                id={list.devops_id}
                podName={list.devops_pod_name}
                prodDevFreq={list.prod_dev_frequency}
                percentageFailed={list.devops_percentage_failed}
                releaseName={list.devops_release_name}
                releaseDate={list.devops_release_date}
                releaseDesc={list.devops_release_desc}
                releaseType={list.devops_release_type}
                periodMonth={list.devops_month}
                periodYear={list.devops_year}
                comments={list.devops_comments}>
            </DevOpsDisplayList>))
        return (
            <div className="container">
                {DevOpsDataLists}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.lists.items)
    return {
        lists: state.lists.items
    }
}

export default connect(mapStateToProps)(DevOpsList)