import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Router from './Router';
import Login from '../components/App';

const Navbar = () => {
    return(
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
              <div className="container">
                <Link className="navbar-brand" to={"/login"} style={{color:'red', fontWeight: 'bold', fontSize: 30, alignContent:'start'}}>NETFLIX</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/login"}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
      
            <div className="outer">
              <div className="inner">
                <Switch>
                  {/* <Route exact path='/' component={Login} /> */}
                  <Route path="/login" component={Login} />
                  {/* <Route path="/sign-up" component={SignUp} /> */}
                </Switch>
              </div>
            </div>
          </div></Router>
    );
}

export default Navbar;
