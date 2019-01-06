import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getGnomes } from '../actions/gnomeActions';
import { getFavorites } from '../actions/favoriteActions';
import { getPendings } from '../actions/pendingActions';
import Grid from '@material-ui/core/Grid';
import CardGnome from '../components/card/cardGnome';
import EmptyGnomeId from '../components/empty/emptyGnomeId';

class Profile extends Component {
  componentDidMount() {
    this.props.getGnomes();
    this.props.getFavorites();
    this.props.getPendings();
  }

  render() {
    const { id } = this.props.match.params;
    const { gnomes, favorites, pendings } = this.props;
    const gnome = gnomes.gnomes.find(gnome => gnome.id === parseInt(id));
    return (
      <Grid container justify={"center"}>
        {gnome &&
          <CardGnome
            gnome={gnome}
            favorites={favorites.favorites}
            pendings={pendings.pendings} />
        }
        {!gnome && <EmptyGnomeId id={id} />}
      </Grid>
    );
  }
}

Profile.propTypes = {
  getGnomes: PropTypes.func.isRequired,
  getFavorites: PropTypes.func.isRequired,
  getPendings: PropTypes.func.isRequired,
  gnomes: PropTypes.object.isRequired,
  favorites: PropTypes.object.isRequired,
  pendings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  gnomes: state.gnomes,
  favorites: state.favorites,
  pendings: state.pendings
});

export default withRouter(connect(mapStateToProps, {
  getGnomes,
  getFavorites,
  getPendings
})(Profile));