// VideoPlayer.js

import React from 'react';
import ReactPlayer from 'react-player';
import { Paper } from '@mui/material';

const VideoPlayers = ({videoUrl}) => {
  const [playing] = React.useState(false);

  return (
    <Paper elevation={3} style={{ maxWidth: '600px', margin: 'auto' }}>
      <hr />
      <div>
        <h2>Demo of video player</h2>
      </div>
      <ReactPlayer
        url={videoUrl}
        playing={playing}
        width="100%"
        controls={true}
      />
    </Paper>
  );
};

export default VideoPlayers;
