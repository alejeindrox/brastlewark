import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  avatar: {
    margin: 20,
    width: 150,
    height: 150
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="row" justify={"center"}>
        <Grid item xs={12} align="center">
          <Avatar
            alt="Alejandro Lopez"
            src="https://firebasestorage.googleapis.com/v0/b/aledev-1519067494359.appspot.com/o/img%2FAlejandro.jpg?alt=media&token=369424e8-1287-4dea-99c6-cc4c68acd90b"
            className={classes.avatar} />
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom component="h2" variant="h5" align="center">
            Developed by Alejandro Lopez
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h6" align="center">
            <a href="https://alejeindrox.github.io/aledev/" className={classes.link}>AleDev</a>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(styles)(About));