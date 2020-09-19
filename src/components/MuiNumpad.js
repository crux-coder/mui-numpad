import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    width: '100%'
  },
  numberRow: {
  },
  button: {
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Button color="primary" variant="outlined" className={classes.button}>{value}</Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[4, 5, 6].map((value) => (
            <Grid key={value} item>
              <Button color="primary" variant="outlined" className={classes.button}>{value}</Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[7, 8, 9].map((value) => (
            <Grid key={value} item>
              <Button color="primary" variant="outlined" className={classes.button}>{value}</Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.numberRow} >
        <Grid container justify="center" className={classes.numberRow} spacing={2}>
          {['.', 0, 'C'].map((value) => (
            <Grid key={value} item>
              <Button color="primary" variant="outlined" className={classes.button}>{value}</Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}