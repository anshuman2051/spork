import React from 'react';

import classes from './Add.module.css'
import {Card, CardContent, Grid,CardActions} from "@material-ui/core";
import FormElements from './FormUI/formElements';

class Add extends React.Component {

    clickHandler = (e)=>{
        //checking for form validity
        // e.preventDefault();
        alert("submitted form successfully");
    }

    render(){
        //element config
        const inputEle= [];
        for ( let keys in this.props){
            inputEle.push(<FormElements key={keys} config={this.props[keys]}/>);
        } 
        return(
            <div className={classes.Add} >
                <Card square style={{maxWidth:"50vh"}}>
                <CardContent>
                    <Grid container direction="column">
                        
                        <form onSubmit={this.clickHandler} action="submit">
                            {inputEle}
                        </form>
                    </Grid>
                </CardContent>
                <CardActions>
                </CardActions>
                </Card>
            </div >
        );
    }
}

export default Add;