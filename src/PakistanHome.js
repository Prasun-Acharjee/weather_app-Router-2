import React from "react";
import {withRouter,Link} from "react-router-dom";
class PakistanHome extends React.Component{
    render()
    {
        return(<div>
            <Link to="/Pakistan/Karachi">Karachi</Link>
            <br/>
            <Link to="/Pakistan/Lahore">Lahore</Link>
            </div>
        );
    }
}
export default withRouter(PakistanHome);