import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Dashboard from './Dashboard';
import Finance from './Finance';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

   render() {
    return (
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/finance' component={Finance} />
      </Switch>
    );
  }
}

export default Main;