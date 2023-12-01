import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { getMoviesRecord, userSignUp } from '../Service/Users';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSignup = async() => {
    // Handle signup logic here
    console.log({fullName,email,password},'Signing up...');
   const response = await getMoviesRecord({fullName,email,password});
   console.log(response,'got response')
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" gutterBottom>
        Signup
      </Typography>
      <form>
        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
          Signup
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
