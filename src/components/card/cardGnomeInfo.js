import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const CardGnomeInfo = (props) => {
  const { data, value } = props;
  return (
    <Typography variant="subtitle1">
      <Grid
        container
        direction = "row"
        alignItems = "flex-start" >
        <Grid item xs={6}>{data}</Grid>
        <Grid item xs={6}>{value}</Grid>
      </Grid>
    </Typography>
  );
}

CardGnomeInfo.propTypes = {
  data: PropTypes.string.isRequired
};

export default CardGnomeInfo;