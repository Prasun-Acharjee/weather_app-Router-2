import React from 'react';
import {Switch,Route,withRouter} from "react-router-dom";
import Child1 from './Child1';
import PakistanHome from "./PakistanHome";
class Pakistan extends React.Component{
  render()
  {
    return(
    <Switch>
      <Route exact path="/Pakistan" component={PakistanHome}/>
      <Route path="/Pakistan/:id" component={Child1}/>
    </Switch>
    );
  }
}

export default withRouter(Pakistan);