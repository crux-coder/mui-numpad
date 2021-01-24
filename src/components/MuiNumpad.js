import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Button, Grid } from '@material-ui/core';

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

const MuiNumpad = (props) => {
  const {
    onChange,
    onKeyPress,
  } = props;

  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');

  const handleOnChange = (_value) => {
    const newValue = inputValue.concat(_value);
    setInputValue(newValue);
    onChange(newValue);
  }

  const onButtonPress = (_value) => {
    if (onChange) handleOnChange(_value);
    if (onKeyPress) onKeyPress(_value);
  }

  const handleClear = () => {
    setInputValue('');
    onChange('');
  }

  const handleDelete = () => {
    const newString = inputValue.substring(0, inputValue.length - 1);
    setInputValue(newString);
    onChange(newString);
  }

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
            <Button disabled={!inputValue.length} onClick={handleDelete} color="primary" variant="outlined" className={classes.button}>&larr;</Button>
          </Grid>
          <Grid key={0} item>
            <Button onClick={() => onButtonPress(0)} color="primary" variant="outlined" className={classes.button}>0</Button>
          </Grid>
          <Grid key="clear" item>
            <Button disabled={!inputValue.length} onClick={handleClear} color="primary" variant="outlined" className={classes.button}>C</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

MuiNumpad.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
};

MuiNumpad.defaultProps = {
  onChange: undefined,
  onKeyPress: undefined,
};

export default MuiNumpad;