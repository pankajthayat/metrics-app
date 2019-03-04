import React from 'react';
import Header from '../HeaderComponents/Header';
import Footer from '../FooterComponents/Footer';
import Login from "../LoginComponents/Login"
import axios from 'axios';
import { connect } from "react-redux"
import { addPodContentData } from "../../actions/podContentActions"
import { addAgileDataForAnalytics, addDevOpsDataForAnalytics, addEngineeringDataForAnalytics } from "../../actions/analyticsActions"
import * as dashboardActions from "../../actions/dashboardActions";
import { addProgramDashboard } from "../../actions/programActions"
import { LOAD_PROGRAM_DASHBOARD } from "../Constants/constants";
import { LOAD_ENGG_ANALYTICS, LOAD_AGILE_URL, LOAD_DEVOPS_URL, LOAD_ENGINEERING_URL, LOAD_AGILE_ANALYTICS, LOAD_DEVOPS_ANALYTICS, LOAD_POD_URL } from "../Constants/constants"
class Layout extends React.Component {
    constructor(props) {
        super(props)
       
        this.defaultValue = {
            userName: "",
            password: "",
            isLoggedIn: ""

        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/metrics-app/v1/api/engineering/project-pod").then(res => {
            const pods = res.data;
            this.props.dispatch(addPodContentData({ pods }))
        })
        axios.get("http://localhost:8080/metrics-app/v1/api/dashboard/load_agile").then(res => {
            this.props.dispatch(dashboardActions.addAgileDataInDashboard(res.data))
        })
        axios.get("http://localhost:8080/metrics-app/v1/api/dashboard/load_devops").then(res => {
            this.props.dispatch(dashboardActions.addDevOpsDataInDashboard(res.data))
        })

        axios.get("http://localhost:8080/metrics-app/v1/api/dashboard/load_engg").then(res => {
            this.props.dispatch(dashboardActions.addEngineeringDataInDashboard(res.data))
        })
        axios.get(LOAD_AGILE_ANALYTICS).then(res => {
            this.props.dispatch(addAgileDataForAnalytics(res.data))
        })
        axios.get(LOAD_DEVOPS_ANALYTICS).then(res => {
            this.props.dispatch(addDevOpsDataForAnalytics(res.data))
        })

        axios.get(LOAD_ENGG_ANALYTICS).then(res => {
            this.props.dispatch(addEngineeringDataForAnalytics(res.data))
        })
        axios.get(LOAD_PROGRAM_DASHBOARD).then(res => {
            this.props.dispatch(addProgramDashboard(res.data))
        })
    }

    render() {
       let loginDetails = sessionStorage.getItem("loginDetails") ? JSON.parse(sessionStorage.getItem("loginDetails")) : this.defaultValue;
        return (

            (loginDetails.isLoggedIn) ? (

                <div className="col-md-12">
                    <Header history={this.props.history} />
                    <Footer />
                </div>) : (<div><Login /></div>)
        )
    }
}
const mapStateToProps = (state) => {
    return {
        login: state.login,
        podContent: state.podContent,
        dashboard: state.dashboard,
        analytics: state.analytics,
        programDashboard: state.programDashboard
    }
}
export default connect(mapStateToProps)(Layout);
