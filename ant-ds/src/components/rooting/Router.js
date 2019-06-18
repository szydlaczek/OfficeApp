import React from 'react'
import App from '../layout/applayout'
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginLayout from './../layout/loginlayout'
import store from './.././../store/store'
export default class Router extends React.Component {
    
    render() {
        
        return (
        <Provider store={store}> 
            <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={LoginLayout}/>
                        <Route  path="/app" component={App}/>  
                    </Switch> 
            </BrowserRouter>
        </Provider>
        
        )}
}
