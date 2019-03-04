import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { addPodContentData } from "../../actions/podContentActions";
import {LOAD_POD_URL } from '../Constants/constants';
import '../../style/metricsapp.css';

class PodContent extends Component {
    constructor(props) {
    super(props);

}

handleOnChange=(e)=>{
        let select = e.target.value;
        let pods = this.props.podContent.pods;
        let index = pods.findIndex(x => x.podName === select);

        this.props.dispatch(addPodContentData({
        podName: select,
        podId:index+1
        
    })
    )
    console.log("After podName>>>",select);
    console.log("After podId>>>",index+1);   
        
}

componentDidMount() { 
    axios.get(LOAD_POD_URL)
      .then(res => {
        const pods = res.data;
        this.setState({
          pods: pods
           });
      });
  }
    render()
    {
        
        let podName = this.props.podContent.pods.map((data) =>(
                <option className="color" key={data.podId}>{data.podName}</option>
            )
            )
        
            
        return (
            <div className="row">
                    <div className="col-md-6">
                            <label className="text-color">Pod Name: </label><br />
                            <select ref="pod" id ="podName" value={this.props.podContent.podName} className="form-control color" onChange={this.handleOnChange} > 
                                {podName}

                        </select>
                        </div>
                        <div className="col-md-6">
                            <label className="text-color">Pod Id: </label><br />

                            <input type="text" id ="podId"  className="form-control color"  value={this.props.podContent.podId} readOnly
                            />

                        </div>
                    </div>
        );
    }
};


const mapPropsToState=(state)=>{
return{
    podContent:state.podContent
}
}
export default connect(mapPropsToState)(PodContent)