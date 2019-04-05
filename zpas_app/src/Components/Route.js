import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './SignIn/SignIn'
import App from './../App'

export default class Router extends React.Component {
    render() {
        return (
          <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path='/SignIn' component = {SignIn}/>
            </Switch>
          </BrowserRouter> 
        ); 
    }
}