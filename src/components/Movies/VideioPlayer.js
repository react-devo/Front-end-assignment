import React, { useEffect } from 'react';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useParams } from 'react-router-dom';
import { getMoviesByTitle } from '../../Service/Users';
import VideoDetails from './VideoDetail';

const allVideos = [
  {
    title: 'Video 1',
    genre: 'Action',
    releaseDate: '2023-01-01',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    imageUrl: 'http://commondatastorage.googleapis.com/images/BigBuckBunny.jpg',
  },
  {
    title: 'Video 2',
    genre: 'Drama',
    releaseDate: '2023-02-15',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    imageUrl: 'http://commondatastorage.googleapis.com/images/ElephantsDream.jpg',
  },
  // Add more video objects as needed
];

const VideoPlayer = () => {
  const { title } = useParams()
  const [selectedVideo, setSelectedVideo] = React.useState(allVideos[0]);
  const [allTrendingVideo, setAllTrendingVideo] = React.useState(allVideos[0]);


  useEffect(() => {
    getTrendingMoivies()
  }, [title]);

  const getTrendingMoivies = async () => {
    const response = await getMoviesByTitle(title);
    if (response.success) {
      setAllTrendingVideo(response.data?.results)
    } else {
      setAllTrendingVideo([])
    }
  }

  const handleVideoChange = (event) => {
    const videoIndex = event.target.value;
    setSelectedVideo(allVideos[videoIndex]);
  };

  console.log(allTrendingVideo, allTrendingVideo[0])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{
              color: 'white',  // Change the color as needed
              textDecoration: 'none',  // Add any additional styles
              fontSize: '16px',  // Adjust the font size
              // Add more styles as needed
            }}>  <IconButton  color="white" aria-label="back">
            <ArrowBackIcon />
          </IconButton> Video Details </Link>
          </Typography>

        </Toolbar>
      </AppBar>
      {allTrendingVideo?.length > 0?<Container component="main" sx={{ flexGrow: 1, mt: 2 }}>
        {allTrendingVideo?.length > 0 && <VideoDetails movies={allTrendingVideo[0]} />}
      </Container>: <div style={{display:'flex', justifyContent:'center',marginTop:"30px"}}>Loading...</div>}
    </Box>
  );
};

export default VideoPlayer;
