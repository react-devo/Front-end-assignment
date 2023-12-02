

import React, { useState, useEffect } from 'react';
import { Avatar, Typography } from '@mui/material';
import Header from '../Header/Header';
import VideoPlayers from '../Movies/NewVideoPlayer';
import { dummyVideoUrl } from '../../configs/config';

const UserProfile = () => {
  const [userData, setUserData] = useState({});

  //get data from local storage
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    setUserData(userDetails);
  }, []);


  return (
    <div style={{ textAlign: 'center', }}>
      <Header />
      <Avatar alt={userData?.name} src={userData?.picture || `${process.env.PUBLIC_URL}/dummyUserprofile.png`} sx={{ width: 100, height: 100, margin: 'auto', marginTop: "20px" }} />
      <Typography variant="h5" gutterBottom>
        {userData?.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {userData?.email}
      </Typography>
      <VideoPlayers videoUrl={dummyVideoUrl}/>
    </div>
  );
};

export default UserProfile;
