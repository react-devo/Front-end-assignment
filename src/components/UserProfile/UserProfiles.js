

import React, { useState, useEffect } from 'react';
import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Header from '../Header/Header';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    photoUrl: 'https://example.com/user.jpg', // Replace with the actual photo URL
    watchHistory: ['Video 1', 'Video 2', 'Video 3'], // Replace with actual watch history
  });

  useEffect(() => {
    // Fetch user data from the backend and update the state
    // This is a placeholder for the actual data fetching logic
    // You would need to implement your authentication and data fetching logic here
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: 20 }}>
        <Header />
      <Avatar alt={userData.name} src={userData.photoUrl} sx={{ width: 100, height: 100, margin: 'auto' }} />
      <Typography variant="h5" gutterBottom>
        {userData.name}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Watch History
      </Typography>
      <List>
        {userData.watchHistory.map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt={item} src={`https://example.com/${item}.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserProfile;
