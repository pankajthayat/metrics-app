import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { showList } from '../../actions/listAction';
import '../../style/metricsapp.css';
import AgileList from './AgileList'
import DevOpsList from './DevOpsList'
import EngineeringList from './EngineeringList'

class Metricsapp extends React.Component {
  render() {

    const metric = this.props.dashboard.sortingDetails.metricType;
    var rendering;
    if (metric == 'agile') {
      rendering = <AgileList />;
    } else if (metric == 'devops') {
      rendering = <DevOpsList />
    } else if (metric == 'engineering') {
      rendering = <EngineeringList />
    }
    else {
      rendering = null;
    }
    return (
      <div className="container sidebarspace">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="navspace"></li>
              <li className="nav-item">
                <NavLink className="nav-link fontcolor" to='/Agile'><button className="navbutton">Create Sprint</button></NavLink>
              </li>
              <li className="navspace"></li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/DevOps'> <button className="navbutton">Create Release</button></NavLink>
              </li>
              <li className="navspace"></li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/Engineering'> <button className="navbutton">Create Engineering</button></NavLink>
              </li>
              <li className="navspace"></li>
            </ul>
          </div>
        </nav>
        {rendering}
      </div>


    )
  }
}
const mapStateToProps = (state) => {
  return {
    lists: state.lists.items,
    dashboard: state.dashboard
  }
}

export default connect(mapStateToProps, { showList })(Metricsapp)