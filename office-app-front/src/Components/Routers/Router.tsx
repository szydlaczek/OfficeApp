import {history} from './../../_helpers/_history'
import React from 'react'
import LoginLayout from './../Login/LoginLayout';
import {Router as CustomRouter, Route, Switch} from 'react-router-dom'

const Router = () => {
    return (
        <CustomRouter history={history}>
            <Switch>
                <Route  exact path="/" component={LoginLayout}/>                            
            </Switch> 
        </CustomRouter>
    );
}

export default Router