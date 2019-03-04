import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getMonthName } from "../CommonFunctions/CommonFunctions"

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class FrequencyCard extends React.Component {
  render() {
    let text1 = "Project(s) Considered: "
    let text = getMonthName(this.props.month);
    if (this.props.value == 3) {
      text = "Last 3 Months"
    }
    else if (this.props.value == 6) {
      text = "Last 6 Months"
    }
    else if (this.props.value == 9) {
      text = "Last 9 Months"
    }
    else if (this.props.value == 12) {
      text = "Last 12 Months"
    }

    return (
      <div>
        <Card style={{ backgroundColor: '#A9A9A9' }}>
          <CardContent>
            <Typography variant="h4" component="h1" style={{ color: 'white' }}>
              Freq. of deployments
       </Typography><br />
            <Typography variant="h5" style={{ fontWeight: 'bold', 'color': 'white' }}>
              {Number(this.props.data).toFixed(2)}
            </Typography><br />
            <Typography variant="h6" title={(this.props.project === "" || null || undefined) ? this.props.project + "NA" : this.props.project} style={{ 'white-space': 'pre-line', 'color': 'white' }}>
              {(this.props.noOfProject === "" || null || undefined) ? this.props.noOfProject + "NA" : text1 + this.props.noOfProject}
            </Typography><br />
            {/*<Typography variant="h6" style={{ fontWeight: 'bold', 'color': 'white' }}>
              {text}
            </Typography>*/}
          </CardContent>
        </Card>
        <br />
      </div>
    );
  }
}


export default withStyles(styles)(FrequencyCard);