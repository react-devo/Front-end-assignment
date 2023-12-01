// SignUpPage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { userSignUp } from '../Service/Users';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0', // Set your desired background color
  },
  paper: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: '20px',
  },
  submit: {
    marginTop: '20px',
  },
};

const Signup = () => {
  const navigate =useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loader, setLoader] = useState(false)


  // check email validation
  function isValidEmail(email) {
    // Regular expression for a simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }


  //submit user signup form
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);
    setError('');
    try {
      if (isValidEmail(email)&&password?.trim()?.length >5) {
        const response = await userSignUp({ email, password });
        if (response?.success) {
          if (Object.keys(response)?.length) {
            localStorage.setItem('userData', JSON.stringify({jti:response?.data?.token,name:username  ?? "unknown",email,picture:''}));
            navigate('/');
          }
        }else{
          setError('Please enter correct email and passord.');
        }
        setLoader(false);
      } else {
        setError('Email is not valid or password please check.');
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setError('Something went wrong');
    }
   
  };

  return (
    <Container component="main" maxWidth="xs" style={styles.root}>
      <Paper elevation={3} style={styles.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {error && <Typography component="h6" variant="h6" sx={{ marginTop: '20px', color: 'red' ,fontSize:"14px" }}>
          {error}
        </Typography>}
        <form style={styles.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="user name"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="email"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
          />
          <Typography component="h6" variant="p" sx={{ marginTop: '5px',fontSize:"14px" }}>
            *email should be - eve.holt@reqres.in
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <Typography component="h6" variant="p" sx={{ marginTop: '5px',fontSize:"14px" }}>
            *password should be - pistol
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loader}
            style={styles.submit}
          >
            {loader ? "Loading..." : "Sign Up"}
          </Button>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Link to="/login" variant="body2" >
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </Paper>

    </Container>
  );
};

export default Signup;
