import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../actions/favoriteActions';
import { addPending, deletePending } from '../../actions/pendingActions';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import MarkIcon from '@material-ui/icons/Bookmark';
import CardGnomeExtends from './cardGnomeExtends';

const styles = theme => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
});

class CardGnomeActions extends Component {

  state = { expanded: false, favorite: false, pending: false };

  componentDidMount() {
    const { gnome, favorites, pendings } = this.props;
    const favorite = favorites.find(favorite => favorite.id === gnome.id ? true : false);
    const pending = pendings.find(pending => pending.id === gnome.id ? true : false);
    this.setState({ favorite, pending });
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleFavoriteClick = () => {
    this.state.favorite ?
    this.props.deleteFavorite(this.props.gnome.id) :
    this.props.addFavorite(this.props.gnome);

    this.setState(state => ({ favorite: !state.favorite }));
  };

  handlePendingClick = () => {
    this.state.pending ?
    this.props.deletePending(this.props.gnome.id) :
    this.props.addPending(this.props.gnome);
    
    this.setState(state => ({ pending: !state.pending }));
  };
  
  render() {
    const { classes, gnome } = this.props;
    return (
      <Grid item>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            { this.state.favorite ?
              <StarIcon color="primary" onClick={this.handleFavoriteClick} /> :
              <StarIcon onClick={this.handleFavoriteClick} />
            }
          </IconButton>
          <IconButton aria-label="Add to pending">
            { this.state.pending ?
              <MarkIcon color="secondary" onClick={this.handlePendingClick} /> :
              <MarkIcon onClick={this.handlePendingClick} />
            }
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <CardGnomeExtends title={"Professions"} badges={gnome.professions} color={"primary"} />
            <CardGnomeExtends title={"Friends"} badges={gnome.friends} color={"secondary"} />
          </CardContent>
        </Collapse>
      </Grid>
    );
  }
}


CardGnomeActions.propTypes = {
  classes: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  pendings: PropTypes.array.isRequired,
  addFavorite: PropTypes.func.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
  addPending: PropTypes.func.isRequired,
  deletePending: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  addFavorite,
  deleteFavorite,
  addPending,
  deletePending
})(withStyles(styles)(CardGnomeActions));