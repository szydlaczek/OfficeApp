import React from 'react'
import App from '../layout/applayout'
import Login from '../login/LoginForm'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginLayout from './../layout/loginlayout'
export default class Router extends React.Component {
    
    render() {
        
        return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginLayout}/>
                <Route  path="/app" component={App}/>  
            </Switch> 
        </BrowserRouter>
        )}
}
