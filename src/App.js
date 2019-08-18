import React from 'react';
import {Switch,Route} from "react-router-dom";
import Home from "./Home";
import India from "./India";
import Pakistan from "./Pakistan";
class App extends React.Component{
  render()
  {
    return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/India" component={India}/>
      <Route path="/Pakistan" component={Pakistan}/>
    </Switch>
    );
  }
}

export default App;
