import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const styles = () => ({
  badgeContent: {
    paddingLeft: '0px',
    paddingRigth: '0px'
  },
  badge: {
    margin: 2
  }
});

const CardGnomeExtends = (props) => {
  const { classes, title, badges, color } = props;
  return (
    <CardContent className={classes.badgeContent}>
      <Typography variant="subtitle1">
        {`${title}: `}
      </Typography>
      {badges.length > 1 ? 
        badges.map((badge, index) => (
          <Chip className={classes.badge} color={color} label={badge} key={index} />
        ))
      :
        <Typography variant="caption">
          {`Does not have: ${title}`}
        </Typography>
      }
    </CardContent>
  );
}

CardGnomeExtends.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  badges: PropTypes.array.isRequired
};

export default withStyles(styles)(CardGnomeExtends);