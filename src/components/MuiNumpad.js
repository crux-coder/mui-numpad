import React, { useState, useEffect } from 'react';
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

export default function MuiNumpad({ onChange }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [disabledDot, setDisabledDot] = useState(false);

  const onButtonPress = (_value) => {
    const newValue = inputValue.concat(_value);
    setInputValue(newValue);
    onChange(newValue);
  }

  const handleClear = () => {
    setInputValue('');
    onChange('');
  }

  useEffect(() => {
    if (inputValue.includes('.')) setDisabledDot(true);
    else setDisabledDot(false);
  }, [inputValue]);

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[1, 2, 3].map((value) => (
            <Grid key={value} item>
              <Button onClick={() => onButtonPress(value)} color="primary" variant="outlined" className={classes.button}>{value}</Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[4, 5, 6].map((value) => (
            <Grid key={value} item>
              <Button onClick={() => onButtonPress(value)} color="primary" variant="outlined" className={classes.button}>{value}</Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[7, 8, 9].map((value) => (
            <Grid key={value} item>
              <Button onClick={() => onButtonPress(value)} color="primary" variant="outlined" className={classes.button}>{value}</Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.numberRow} >
        <Grid container justify="center" className={classes.numberRow} spacing={2}>
          <Grid key="dot" item>
              <Button disabled={disabledDot} onClick={() => onButtonPress('.')} color="primary" variant="outlined" className={classes.button}>.</Button>
            </Grid>
          <Grid key={0} item>
              <Button onClick={() => onButtonPress(0)} color="primary" variant="outlined" className={classes.button}>0</Button>
            </Grid>
          <Grid key="clear" item>
            <Button onClick={handleClear} color="primary" variant="outlined" className={classes.button}>C</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}