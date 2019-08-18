import React from "react";
import {withRouter,Switch,Route,Link} from "react-router-dom";
class Home extends React.Component{
    render()
    {
        return(<div>
            <Link to="/India">India</Link>
            <br/>
            <Link to="/Pakistan">Pakistan</Link>
            </div>
        );
    }
}
export default withRouter(Home);