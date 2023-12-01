// Import necessary dependencies
import React from 'react';
import { Typography, Button, Container,  } from '@mui/material';
import {makeStyles } from '@mui/styles'

// Define styles using makeStyles
const useStyles = makeStyles ((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

// Welcome component
const Welcome = () => {
  // Apply the styles
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h2" className={classes.heading}>
        Welcome to My App!
      </Typography>
      <Typography variant="body1">
        We're excited to have you here. Get started by exploring our amazing features.
      </Typography>
      <Button variant="contained" color="primary" className={classes.button}>
        Get Started
      </Button>
    </Container>
  );
};

export default Welcome;
