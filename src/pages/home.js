import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { getGnomes } from '../actions/gnomeActions';
import { getFavorites } from '../actions/favoriteActions';
import { getPendings } from '../actions/pendingActions';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import TableGnome from '../components/table/tableGnome';
import CardGnome from '../components/card/cardGnome';
import EmptyGnome from '../components/empty/emptyGnome';

class Home extends Component {
  componentDidMount() {
    this.props.getGnomes();
    this.props.getFavorites();
    this.props.getPendings();
  }

  render() {
    const { gnomes, favorites, pendings } = this.props;
    return (
      <Grid container>
        {gnomes.gnomes.length > 0 &&
          <Hidden smDown>
            <TableGnome gnomes={gnomes.gnomes} />
          </Hidden>
        }
        {gnomes.gnomes.length > 0 &&
          gnomes.gnomes.map((gnome, index) => (
            <CardGnome
              key={index}
              gnome={gnome}
              favorites={favorites.favorites}
              pendings={pendings.pendings} />
          ))
        }
        {gnomes.gnomes.length < 1 && <EmptyGnome title="gnomes" />}
      </Grid>
    );
  }
}

Home.propTypes = {
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
})(Home));