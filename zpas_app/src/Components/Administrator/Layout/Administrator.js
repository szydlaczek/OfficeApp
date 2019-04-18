import React, { Component, Fragment} from 'react';

import './App.css';
import AppLayout  from './Components/Layouts/AppLayout'

class Administrator extends Component { 
  

  render() {
    const {main} = this.props;
    return (
      <Fragment >
                 <AppLayout></AppLayout>
      </Fragment>
    );
  }
    
}

export default Administrator;