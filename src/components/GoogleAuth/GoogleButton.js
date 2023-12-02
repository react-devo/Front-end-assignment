

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

function GoogleButton() {
  const navigate = useNavigate();

// decode the user data for display the details
  const decodeCredential = (encodedData) => {
    const response = jwtDecode(`${encodedData?.credential}`);
    if (Object.keys(response)?.length) {
      localStorage.setItem('userData', JSON.stringify(response));
      navigate('/');
    }
  }

  return (
    <div className="">
      <h5 style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }} >--or--</h5>

      <div style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }} >
      <GoogleLogin
        onSuccess={credentialResponse => {
          decodeCredential(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        
      />
      </div>
    </div>
  );
}

export default GoogleButton;
