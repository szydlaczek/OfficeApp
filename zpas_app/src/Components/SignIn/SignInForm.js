import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';


class SignInFormC extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {
            userName:'dd',
            password:'dd'
        };
      }
      handleSubmit(event) {
        event.preventDefault();
        
        
        fetch('http://localhost:62522/api/account/signin', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
        }
        });
      }
      onChange =(e)=> {
        let user;
        user = {
            ...this.props.user,
            [e.target.name]: e.target.value
        };
        this.props.signInUser(user);    
    }

    render() {
        
        return(
            <form className="loginForm" onSubmit={this.handleSubmit}> 
                <Grid container  direction="column"
                    justify="center"
                    alignItems="center">                    
                    <Grid item xs>
                        <TextField
                            required
                            id="standard-required"
                            label="Required"
                            defaultValue={this.props.user.userName}
                            style = {{width: 200}}
                            margin="normal"
                            name="userName"
                            onChange={this.onChange}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            style = {{width: 200}}
                            type="password"
                            defaultValue={this.props.user.password}
                            autoComplete="current-password"
                            margin="normal"
                            name="password"
                            required
                            onChange={this.onChange}
                        /> 
                    </Grid>    
                    <Grid item xs>
                        <Button variant="contained" size="medium" color="primary" type="submit">SignIn</Button>
                    </Grid>                  
                    
                </Grid>

            </form>
        );
    } 

}
const mapDispatchToProps = dispatch => {
    return {
        signInUser : user => dispatch({type : 'SignInUser', payload: user})
    }
}


const mapStateToProps = state => {
    return {
        user : state.user
    }
}

const SignInForm = connect(mapStateToProps, mapDispatchToProps)(SignInFormC)
export default SignInForm;