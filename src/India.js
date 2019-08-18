import React from 'react';
import {Switch,Route,withRouter} from "react-router-dom";
import Child1 from './Child1';
import IndiaHome from "./IndiaHome";
class India extends React.Component{
  render()
  {
    return(
    <Switch>
      <Route exact path="/India" component={IndiaHome}/>
      <Route path="/India/:id" component={Child1}/>
    </Switch>
    );
  }
}

export default withRouter(India);