import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import indigo from '@material-ui/core/colors/indigo';
import store from './stores/store';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Pendings from './pages/pendings';
import Recents from './pages/recents';
import About from './pages/about';
import Profile from './pages/profile';
import Error404 from './pages/error404';
import MenuBar from './components/menu/menuBar';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: indigo
  },
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
  }
});

const styles = () => ({
  root: {
    flexGrow: 1,
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
              <MenuBar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/pendings" component={Pendings} />
                <Route path="/recents" component={Recents} />
                <Route path="/about" component={About} />
                <Route path="/profile/:id" component={Profile} />
                <Route component={Error404} />
              </Switch>
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
