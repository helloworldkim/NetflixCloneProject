import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Router from '../route/Router';
import Navbar from '../route/Navbar';
import MainNavbar from '../route/MainNavbar';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <MainNavbar />
        <Container className="classname">
          <Router />
        </Container>
      </div>
    );
  }
}

export default App;;
