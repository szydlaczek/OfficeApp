import React from 'react'
import App from '../layout/applayout'
import {Provider} from 'react-redux';
import {Router as CustomRouter, Route, Switch} from 'react-router-dom'
import LoginLayout from './../layout/loginlayout'
import store from './.././../store/store'
import {history} from './../../helpers/_history'
export default class Router extends React.Component {
    
    render() {
        
        return (
        <Provider store={store}> 
            <CustomRouter history={history}>
                    <Switch>
                        <Route exact path="/" component={LoginLayout}/>
                        <Route  path="/app" component={App}/>  
                    </Switch> 
            </CustomRouter>
        </Provider>
        
        )}
}
