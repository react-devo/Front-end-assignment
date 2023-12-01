

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function GoogleButton() {
  const handleGoogleLoginSuccess = (response) => {
    // Handle successful Google login
    console.log('Google Login Success in App:', response);
  };

  const handleGoogleLoginFailure = (error) => {
    // Handle failed Google login
    console.error('Google Login Failure in App:', error);
  };

  return (
    <div className="App">
      <h5 style={{display:'flex',justifyContent:'center'}}>Or Google Sign-In</h5>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
    </div>
  );
}

export default GoogleButton;
