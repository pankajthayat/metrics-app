import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux";
import thunkMiddleware from "redux-thunk";
import agileReducer from "../reducers/agileReducer";
import podContentReducer from "../reducers/podContentReducer";
import devopsReducer from "../reducers/devopsReducer";
import engineeringReducer from "../reducers/engineeringReducer";
import listReducer from "../reducers/listReducer";
import dashboardReducer from "../reducers/dashboardReducer"
import loginReducer from "../reducers/loginReducer"
import AnalyticsReducer from "../reducers/AnalyticsReducer"

import projectDashboardReducer from "../reducers/projectDashboardReducer"
import ProjectDashboard from "../components/ProjectDashboardComponents/ProjectDashboard";
import programReducer from "../reducers/programReducer"

export default () => {
    const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    const store = createStore(combineReducers({
        agile: agileReducer,
        podContent: podContentReducer,
        devops: devopsReducer,
        engineering: engineeringReducer,
        lists: listReducer,
        dashboard: dashboardReducer,
        login: loginReducer,
        analytics: AnalyticsReducer,
        projectDashboard: projectDashboardReducer,
        programDashboard: programReducer

    }),

        compose(applyMiddleware(thunkMiddleware),reduxDevtools),
    )
    return store;
}
