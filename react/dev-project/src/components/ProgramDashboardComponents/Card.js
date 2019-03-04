import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {getMonthName} from "../CommonFunctions/CommonFunctions"
import PieChart from "../charts/PieChart"

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class CardForPie extends React.Component {
  render(){
 let { field, chartData }=this.props;
        return (
            <div>
    <Card>
      <CardContent>
        <Typography variant="h5" component="h1">
         {field}
        </Typography>
        <Typography variant="h2">
          <PieChart chartData={ chartData } text={""} display={false}/>
        </Typography>
      </CardContent>
    </Card>
    <br/>
    </div>
  );
}
}
  

export default withStyles(styles)(CardForPie);