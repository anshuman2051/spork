import React from 'react';
import classes from './View.module.css';

class View extends React.Component {
    state = {
        formData : [
            {"userId":1,"id":1,"title":"delectus aut autem","completed":false},
        ] 
    };

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(
                response => response.json()
            )
            .then(
                data=>{
                    this.setState({formData : data});
                    console.log(data);
                }
            )
            .catch( err=> console.log(err.message));
    }
    render(){
        let tblData = null;
        tblData = this.state.formData.map( (data,index)=>{
            let ele = [];
            for(let key in data){
                ele.push(<td key={key}>{""+data[key]}</td>)
            }
            return (
                <tr key={index}>
                    {ele}
                </tr>
            );
        });
        return(
            <div style={{"margin": "100px 20px"}}>
                <table>
                    <tr>
                        <th>uId</th>
                        <th>id</th>
                        <th>title</th>
                        <th>completed</th>
                    </tr>
                    {tblData}
                </table>
            </div>
        );
    }
}

export default View;