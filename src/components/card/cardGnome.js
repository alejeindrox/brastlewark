import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { addRecent } from '../../actions/recentActions';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LazyLoad from 'react-lazyload';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import CardGnomeInfo from './cardGnomeInfo';
import CardGnomeAction from './cardGnomeActions';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2
  },
  media: {
    height: 150,
    objectFit: 'cover',
  }
});

class CardGnome extends Component {

  handleClickGnome = () => {
    this.props.addRecent(this.props.gnome);
    this.props.history.push(`/profile/${this.props.gnome.id}`);
  }

  render() {
    const { classes, gnome, favorites, pendings } = this.props;
    const load = gnome ? true : false;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <TransitionGroup>
          <LazyLoad height={200} offset={300}>
            <CSSTransition in={load} timeout={500} classNames="fade">
              <Card className={classes.card}>
                <CardActionArea onClick={this.handleClickGnome}>
                  <CardMedia
                    className={classes.media}
                    image={gnome.thumbnail}
                    title={gnome.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      noWrap
                      component="h3"
                      variant="h5"
                      align="center"
                      color={"primary"}>
                      {gnome.name}
                    </Typography>
                    <CardGnomeInfo data={"Hair Color: "} value={gnome.hair_color} />
                    <CardGnomeInfo data={"Age: "} value={gnome.age} />
                    <CardGnomeInfo data={"Height: "} value={Number(gnome.height).toFixed(2)} />
                    <CardGnomeInfo data={"Weight: "} value={Number(gnome.weight).toFixed(2)} />
                    <CardGnomeInfo data={"Gender: "} value={gnome.hair_color === "Pink" ? "Female" : "Male"} />
                  </CardContent>
                </CardActionArea>
                <CardGnomeAction gnome={gnome} favorites={favorites} pendings={pendings} />
              </Card>
            </CSSTransition>
          </LazyLoad>
        </TransitionGroup> 
      </Grid>
    );
  }
}

CardGnome.propTypes = {
  classes: PropTypes.object.isRequired,
  gnome: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  pendings: PropTypes.array.isRequired,
  addRecent: PropTypes.func.isRequired
};

export default withRouter(connect(() => ({}), {
  addRecent
})(withStyles(styles)(CardGnome)));