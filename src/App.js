import React from 'react';
import { Box, CssBaseline, Container, Typography } from '@mui/material';
import Header from './components/Header/Header';
import Login from './UserAuth/Login';
import Signup from './UserAuth/SignUp';
import MovieList from './components/Movies/MoviesList';
import HomePage from './components/Home/Home';

const App = () => {
    return (
        <HomePage />
    );
};

export default App;
