import React from 'react';
import Input from './Input';
import Button from './Button';

const formElements = (props)=>{
    let ele = null;
    switch(props.config.UIType){
        case "input":
            ele = <Input config={props.config}/>;
            break;
        case "button":
            ele = <Button config={props.config} />;
            break;
        default:
            ele = null;
    }
    return(
        ele
    );
}

export default formElements;