import React from 'react';
import classes from './Button.module.css';
const button = (props)=>{
    return(
    <button 
        className={classes.Button}
        // onClick={props.clicked}>
        {...props.config}
        >
        {props.config.value}
    </button>
    );
};

export default button;