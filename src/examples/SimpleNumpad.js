import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MuiNumpad from '../components/MuiNumpad';
import { Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    contentTitle: {
        marginBottom: theme.spacing(2)
    },
    gridItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        width: '100%',
    }
}));

function SimpleNumpad(props) {
    const classes = useStyles();
    const [value, setValue] = useState();

    const onChange = (_value) => {
        setValue(_value);
    }

    return (
        <>
            <div className={classes.contentTitle}>
                <Typography variant="h5">
                    Simple numpad
                </Typography>
                <Divider />
            </div>
            <Grid container spacing={2}>
                <Grid item className={classes.gridItem} xs={3}>
                    <TextField
                        margin="dense"
                        className={classes.textField}
                        value={value}
                        id="outlined-basic"
                        variant="outlined" />
                </Grid>
                <Grid item xs={3}>
                    <MuiNumpad
                        onChange={onChange}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default SimpleNumpad;