import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Avatar } from '@mui/material';
import GoogleButton from '../components/GoogleAuth/GoogleButton';
import { Link, useNavigate } from 'react-router-dom';
import { userSignIn } from '../Service/Users';

const Login = () => {
    const navigate = useNavigate()
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

    console.log(`${process.env.PUBLIC_URL}/dummyUserprofile.png`)

    //submit user signIn form
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);
        setError('');
        try {
            if (isValidEmail(email) && password?.trim()?.length > 5) {
                const response = await userSignIn({ email, password });
                if (response?.success) {
                    console.log(response?.data?.token, 'success')
                    if (Object.keys(response)?.length) {
                        localStorage.setItem('userData', JSON.stringify({ jti: response?.data?.token, name: username ?? "unknown", email, picture: '' }));
                        navigate('/');
                    }
                } else {
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
        <Container maxWidth="xs">
             <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            {error && <Typography component="h6" variant="h6" sx={{ marginTop: '20px', color: 'red', fontSize: "14px" }}>
                {error}
            </Typography>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="username"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Typography component="h6" variant="p" sx={{ marginTop: '5px', fontSize: "14px" }}>
                    *email should be - eve.holt@reqres.in
                </Typography>
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Typography component="h6" variant="p" sx={{ marginTop: '5px', marginBottom: '10px', fontSize: "14px" }}>
                    *password should be - cityslicka
                </Typography>
                <Button variant="contained" type='submit' color="primary" disabled={loader} fullWidth>
                    {loader ? "Login..." : "Login"}
                </Button>
            </form>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Link to="/signup" variant="body2" >
                    Already have an account? SignUp
                </Link>
            </div>
            <GoogleButton />
        </Container>
    );
};

export default Login;
