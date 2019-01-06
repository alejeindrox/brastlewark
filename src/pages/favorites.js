import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favoriteActions';
import { getPendings } from '../actions/pendingActions';
import Grid from '@material-ui/core/Grid';
import CardGnome from '../components/card/cardGnome';
import EmptyGnome from '../components/empty/emptyGnome';

class Favorites extends Component {
  componentDidMount() {
    this.props.getFavorites();
    this.props.getPendings();
  }

  render() {
    const { favorites, pendings } = this.props;
    return (
      <Grid container>
        {favorites.favorites.length > 0 &&
          favorites.favorites.map((gnome, index) => (
            <CardGnome
              key={index}
              gnome={gnome}
              favorites={favorites.favorites}
              pendings={pendings.pendings} />
          ))
        }
        {favorites.favorites.length < 1 && <EmptyGnome title="favorites" />}
      </Grid>
    );
  }
}

Favorites.propTypes = {
  getFavorites: PropTypes.func.isRequired,
  getPendings: PropTypes.func.isRequired,
  favorites: PropTypes.object.isRequired,
  pendings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  favorites: state.favorites,
  pendings: state.pendings
});

export default withRouter(connect(mapStateToProps, {
  getFavorites,
  getPendings
})(Favorites));