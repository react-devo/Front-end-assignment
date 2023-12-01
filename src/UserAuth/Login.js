import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import GoogleButton from '../components/GoogleAuth/GoogleButton';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
        console.log('Logging in...');
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <form>
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
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                    Login
                </Button>
            </form>
            <div></div>
            <GoogleButton />
        </Container>
    );
};

export default Login;
