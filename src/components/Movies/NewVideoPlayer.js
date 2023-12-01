// VideoPlayer.js

import React from 'react';
import ReactPlayer from 'react-player';
import { IconButton, Slider, Typography, Paper } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const VideoPlayers = () => {
  const [playing, setPlaying] = React.useState(false);
  const [played, setPlayed] = React.useState(0);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (state) => {
    setPlayed(state.played);
  };

  const handleSeekChange = (event, newValue) => {
    setPlayed(newValue / 100);
  };

  const handleSeekMouseUp = (event, newValue) => {
    setPlaying(true);
  };

  return (
    <Paper elevation={3} style={{ maxWidth: '600px', margin: 'auto' }}>
      <ReactPlayer
        url="https://www.example.com/sample.mp4" // Replace with your video URL
        playing={playing}
        onProgress={handleProgress}
        width="100%"
      />
      <div style={{ padding: '10px' }}>
        <Typography variant="h6" gutterBottom>
          Video Player
        </Typography>
        <IconButton onClick={handlePlayPause}>
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        <Slider
          value={played * 100}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
          aria-labelledby="continuous-slider"
        />
      </div>
    </Paper>
  );
};

export default VideoPlayers;
