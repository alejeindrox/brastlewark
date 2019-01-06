import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/StoreMallDirectory';
import FavoriteIcon from '@material-ui/icons/FolderSpecial';
import PendingIcon from '@material-ui/icons/More';
import RecentIcon from '@material-ui/icons/Whatshot';
import AboutIcon from '@material-ui/icons/AlternateEmail';

const styles = () => ({
  list: {
    width: 250,
  }
});

const MenuList = (props) => {
  const { classes } = props;
  return (
    <div className={classes.list}>
      <List component="nav">
        <ListItem component={Link} to="/" button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItem>
        <ListItem component={Link} to="/favorites" button>
          <ListItemIcon><FavoriteIcon /></ListItemIcon>
          <ListItemText primary={'Favorites'} />
        </ListItem>
        <ListItem component={Link} to="/pendings" button>
          <ListItemIcon><PendingIcon /></ListItemIcon>
          <ListItemText primary={'Pendings'} />
        </ListItem>
        <ListItem component={Link} to="/recents" button>
          <ListItemIcon><RecentIcon /></ListItemIcon>
          <ListItemText primary={'Recents'} />
        </ListItem>
        <ListItem component={Link} to="/about" button>
          <ListItemIcon><AboutIcon /></ListItemIcon>
          <ListItemText primary={'About'} />
        </ListItem>
      </List>
    </div>
  );
};

MenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuList);