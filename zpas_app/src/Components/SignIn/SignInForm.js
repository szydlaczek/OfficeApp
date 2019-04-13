import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default class SignInForm extends React.Component {
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
        this.setState({
            [e.target.name]: e.target.value
        });
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
                            defaultValue=""
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
                            defaultValue=""
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