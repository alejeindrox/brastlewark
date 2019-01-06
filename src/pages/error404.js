import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LazyLoad from 'react-lazyload';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2
  },
  media: {
    height: 300,
    objectFit: 'cover'
  },
  buttom: {
    justifyContent: "center"
  }
});

class Error404 extends Component {

  handleClickHome = () => {
    this.props.history.push("/");
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container justify={"center"}>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
          <TransitionGroup>
            <LazyLoad height={200} offset={200}>
              <CSSTransition in timeout={500} classNames="fade">
                <Card className={classes.card}>
                  <CardActionArea onClick={this.handleClickHome}>
                    <CardMedia
                      className={classes.media}
                      image="/images/404-error.jpg"
                      title="Error 404"
                    />
                    <CardContent>
                      <Typography gutterBottom component="h3" variant="h5" align="center" color={"primary"}>
                        Error 404: Page Not Found
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.buttom}>
                    <CardContent>
                      <Button variant="contained" color="primary" onClick={this.handleClickHome}>
                        Go Home
                      </Button>
                    </CardContent>
                  </CardActions>
                </Card>
              </CSSTransition>
            </LazyLoad>
          </TransitionGroup> 
        </Grid>
      </Grid>
    );
  }
}


export default withRouter(withStyles(styles)(Error404));