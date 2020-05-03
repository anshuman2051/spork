import React from 'react';
import classes from './Add.module.css'
import {Card, CardContent, Grid,CardActions} from "@material-ui/core";
import Input from './FormUI/Input';
import Button from './FormUI/Button';

class Add extends React.Component {
    state = {
        eleConfig :{
          name: {
            type: "text",
            value: "",
            placeholder: "enter value",
            required: true,
            isvalid: false
            } ,
            email :{
                type: "email",
                value: '',
                placeholder: "enter email",
                required: true,
                isvalid: false
            },
            button :{
                isvalid: true
            }
        }
    };

    clickHandler = ()=>{
        //checking for form validity
        let formIsValid = true;
        for( let val in this.state.eleConfig){
            formIsValid = this.state.eleConfig[val].isvalid && formIsValid;
        }
        if(formIsValid){
            alert("submitted form successfully");
        }
        else{
            alert('invalid form value should be greater than 5');
        }
    }
    onChangeHandler =(evt, identifier)=>{
        let prevEle = {...this.state.eleConfig};
        prevEle[identifier].value = evt.target.value;

        //custom validation
        if(prevEle[identifier].value.length > 5){
            prevEle[identifier].isvalid= true;
        }
        else{
            prevEle[identifier].isvalid= true;
        }
        this.setState({eleConfig: prevEle});
    }
    render(){
        //element config

        return(
            <div className={classes.Add}>
                <Card square style={{maxWidth:"50vh"}}>
                <CardContent>
                    <Grid container direction="column">
                        <Input  value={this.state.eleConfig.name.value} changed={(evt)=>this.onChangeHandler(evt,"name")} config={this.state.eleConfig.name}/>
                        <Input  value={this.state.eleConfig.email.value} changed={(evt)=>this.onChangeHandler(evt,"email")} config={this.state.eleConfig.email}/>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button clicked={this.clickHandler}>
                        Log in
                    </Button>
                </CardActions>
                </Card>
            </div>
        );
    }
}

export default Add;