import React, { Component, Fragment} from 'react';
import Exercises from './Components/Exercises/index'

import {Header, Footer} from './Components/Layouts/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
          <Header/>
          <Exercises/>
          <Footer/>
      </Fragment>
    );
  }
}

export default App;
