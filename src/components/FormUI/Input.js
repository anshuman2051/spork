import React from 'react';
import classes from './Input.module.css';

const input= (props)=>(
    <input
        className={classes.Input}
        value={props.value}
        onChange = {props.changed}
        {...props.config}
        />
);

export default input;