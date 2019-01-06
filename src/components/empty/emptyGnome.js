import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  message: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2
  }
});

const EmptyGnome = props => {
  const { classes, title } = props;
  return (
    <Grid item xs={12}>
      <Typography
        gutterBottom
        className={classes.message}
        component="h4"
        variant="h4"
        align="center">
        {`There are not ${title}`}
      </Typography>
    </Grid>
  );
}

EmptyGnome.propTypes = {
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(EmptyGnome);