import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Join from '../components/Join';
import Favorite from '../components/Favorite';
import Login from '../components/Login';
import Main from '../components/Main';
import NewContent from '../components/NewContent';
import Movies from '../components/Movies';

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/login" component={Login} />
              <Route path="/join" component={Join} />
              <Route path="/movie" component={Movies} />
              <Route path="/myContent" component={Favorite} />
              <Route path="/newContent" component={NewContent} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Router;
