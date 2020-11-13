import React from "react";
import { Route,withRouter,Switch } from "react-router-dom";
class Child1 extends React.Component{
    constructor(props){
        super(props);
        this.state={item:""};
    }
    componentDidMount()
    {
        console.log(this.props.match.params)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.match.params.id}&appid=989aeb61637efc432e57044c6c5bd577`).then(
        (response)=>{
            return response.json()}).then((result)=>{this.setState({item:result.weather[0].description},()=>console.log(result))})
            
    }
    render()
    {
        return(<p>{this.state.item}</p>);
    }
}

export default withRouter(Child1);
