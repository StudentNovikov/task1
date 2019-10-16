import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';

export class Test extends Component {

    state = {
        login:'',
        password:''
    }

    // Fake encrypt method,should be switched to a real one in production like "bcrypt" e.t.c
    encrypt = (password) => {
        return password; 
    }

    sendLoginRequest = (e) => {
        e.preventDefault();
        const log = this.state.login;
        const pass = this.encrypt(this.state.password);
        axios.post('https://jsonplaceholder.typicode.com/users',{
            log,
            pass
        }).then(res => console.log(res.data)).catch(error => console.log(error));
    }

    onChange = (e) => this.setState({[e.target.name]:e.target.value});

    render() {
        return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
            
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <form noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="login"
                label="Login"
                name="login"
                autoComplete="login"
                value={this.state.login}
                onChange={this.onChange}
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.onChange}
                autoComplete="current-password"
            />
            <TextField
                type="hidden"
                id="hidden"
            />            
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"                
                onClick={this.sendLoginRequest}
            >
                Sign In
            </Button>            
            </form>
        </div>
        </Container>
        )
    }
}

export default Test

