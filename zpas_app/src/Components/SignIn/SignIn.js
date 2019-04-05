import React from 'react';
import SignInForm from './SignInForm';
import Grid from '@material-ui/core/Grid';

export default class SignIn extends React.Component {

    render() {
        return (
            
            <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            className="signIn"
            >
                    <SignInForm></SignInForm>
            </Grid>
           
        );
    }
}