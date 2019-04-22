import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './SignIn/SignIn'
import App from './../App';
import {Provider} from 'react-redux';
import store from '../store/store';
import AppLayout from './Layouts/AppLayout';
import Administrator from './Administrator/Layout/Administrator'
export default class Router extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <BrowserRouter>              
                <Route component={AppLayout} path="/">                  
                </Route>              
            </BrowserRouter> 
          </Provider>
        ); 
    }
}