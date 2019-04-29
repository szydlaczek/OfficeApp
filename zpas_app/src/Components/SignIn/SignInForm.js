import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import * as ACTION_TYPES from './../../_constants/action-types';
import * as ACTIONS from './../../_actions/actions';

class SignInFormC extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state= {
            user: {
                userName: '',
                password: '',
            },
            
            submitted: false
        };
      }
      handleSubmit(event) {
         event.preventDefault();
         fetch('http://localhost:54013/api/account/signin', {
                   method: 'POST',
                   body: JSON.stringify(this.state.user),
                   headers: {
                     'Content-Type': 'application/json'
                 }
                 }).then(response=> 
                     {    console.log(response);
                         localStorage.setItem('user', response.data.token)});
         }
    //    return fetch('http://localhost:54013/api/account/signin', {
    //       method: 'POST',
    //       body: JSON.stringify(this.state.user),
    //       headers: {
    //         'Content-Type': 'application/json'
    //     }
    //     }).then(response=> {
    //         console.log(response.json())
    //             return response.json()
    //     })
    //     .then(res=>console.log(res))
    //     .catch((er) => {
    //         console.log("error");
    //         console.log(er);
    //     })
      
      onChange =(e)=> {
          const user = {
              ...this.state.user,
              [e.target.name]: e.target.value
          }
        this.setState({
            user: user
        })   
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
                            defaultValue={this.state.user.userName}
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
                            defaultValue={this.state.user.password}
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