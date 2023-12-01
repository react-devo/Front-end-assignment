

import React, { useState, useEffect } from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Header from '../Header/Header';
import { noPicture } from '../../configs/config';
import VideoPlayers from '../Movies/NewVideoPlayer';

const UserProfile = () => {
  const [userData, setUserData] = useState({});

  //get data from local storage
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem('userData'));
    setUserData(userDetails);
  }, []);


  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <Header />
      <Avatar alt={userData?.name} src={userData?.picture || `${process.env.PUBLIC_URL}/dummyUserprofile.png`} sx={{ width: 100, height: 100, margin: 'auto', marginTop: "20px" }} />
      <Typography variant="h5" gutterBottom>
        {userData?.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {userData?.email}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Watch History
      </Typography>
      <List>
        {['Video 1', 'Video 2', 'Video 3'].map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt={item} src={`https://example.com/${item}.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <VideoPlayers />
    </div>
  );
};

export default UserProfile;
