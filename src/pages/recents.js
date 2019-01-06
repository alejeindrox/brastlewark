import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getRecents } from '../actions/recentActions';
import { getFavorites } from '../actions/favoriteActions';
import { getPendings } from '../actions/pendingActions';
import Grid from '@material-ui/core/Grid';
import CardGnome from '../components/card/cardGnome';
import EmptyGnome from '../components/empty/emptyGnome';

class Recents extends Component {
  componentDidMount() {
    this.props.getRecents();
    this.props.getFavorites();
    this.props.getPendings();
  }

  render() {
    const { recents, favorites, pendings } = this.props;
    return (
      <Grid container>
        {recents.recents.length > 0 &&
          recents.recents.map((gnome, index) => (
            <CardGnome
              key={index}
              gnome={gnome}
              favorites={favorites.favorites}
              pendings={pendings.pendings} />
          ))
        }
        {recents.recents.length < 1 && <EmptyGnome title="recents" />}
      </Grid>
    );
  }
}

Recents.propTypes = {
  getRecents: PropTypes.func.isRequired,
  getFavorites: PropTypes.func.isRequired,
  getPendings: PropTypes.func.isRequired,
  recents: PropTypes.object.isRequired,
  favorites: PropTypes.object.isRequired,
  pendings: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  recents: state.recents,
  favorites: state.favorites,
  pendings: state.pendings
});

export default withRouter(connect(mapStateToProps, {
  getRecents,
  getFavorites,
  getPendings
})(Recents));