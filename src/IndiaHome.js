import React from "react";
import {withRouter,Link} from "react-router-dom";
class IndiaHome extends React.Component{
    render()
    {
        return(<div>
            <Link to="/India/Kolkata">Kolkata</Link>
            <br/>
            <Link to="/India/Delhi">Delhi</Link>
            </div>
        );
    }
}
export default withRouter(IndiaHome);