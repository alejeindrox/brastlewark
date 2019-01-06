import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LazyLoad from 'react-lazyload';
import { CSSTransition } from 'react-transition-group';
import ReactTable from "react-table";
import "react-table/react-table.css";
import TableGnomeExtends from './tableGnomeExtends';
import { columns } from './columnDefiner';

const styles = theme => ({
  card: {
    margin: theme.spacing.unit * 2
  }
});

const TableGnome = (props) => {
    const { classes, gnomes } = props;
    return (
      <Grid item md={12} lg={12} xl={12}>
        <LazyLoad height={600}>
          <CSSTransition in timeout={1000} classNames="fade">
            <Paper className={classes.card} elevation={1}>
              <ReactTable
                data={gnomes}
                columns={columns}
                defaultPageSize={10}
                SubComponent={(row) => {
                  return (
                    <TableGnomeExtends
                      name={row.original.name}
                      image={row.original.thumbnail}
                      profesions={row.original.professions}
                      friends={row.original.friends}
                      />
                  );
                }}
              />
            </Paper>
          </CSSTransition>
        </LazyLoad>
      </Grid>
    );
}

TableGnome.propTypes = {
  classes: PropTypes.object.isRequired,
  gnomes: PropTypes.array.isRequired
};

export default withStyles(styles)(TableGnome);