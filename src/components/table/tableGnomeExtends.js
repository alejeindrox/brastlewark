import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardGnomeExtends from '../card/cardGnomeExtends';
import LazyLoad from 'react-lazyload';
import { CSSTransition } from 'react-transition-group';

const styles = theme => ({
  badges: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  media: {
    height: 300,
    objectFit: 'cover',
    margin: theme.spacing.unit + 6
  }
});

const TableGnomeExtends = (props) => {
  const { classes, name, image, profesions, friends } = props;
  return (
    <Grid container direction="row" justify="space-around" alignItems="flex-start">
      <Grid item xs={6}>
        <LazyLoad height={300} offset={100}>
          <CSSTransition in timeout={1000} classNames="fade">
            <CardMedia className={classes.media} image={image} title={name} />
          </CSSTransition>
        </LazyLoad>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction="column" justify="space-around" className={classes.badges} >
          <Grid item xs={12}>
            <CardGnomeExtends title={"Professions"} badges={profesions} color={"primary"} />
          </Grid>
          <Grid item xs={12}>
            <CardGnomeExtends title={"Friends"} badges={friends} color={"secondary"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

TableGnomeExtends.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  profesions: PropTypes.array.isRequired,
  friends: PropTypes.array.isRequired
};

export default withStyles(styles)(TableGnomeExtends);