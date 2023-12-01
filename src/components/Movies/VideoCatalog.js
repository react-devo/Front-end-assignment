import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const allVideos = [
  {
    title: 'Video 1',
    genre: 'Action',
    releaseDate: '2023-01-01',
    imageUrl: 'https://via.placeholder.com/400x200',
  },
  {
    title: 'Video 2',
    genre: 'Drama',
    releaseDate: '2023-02-15',
    imageUrl: 'https://via.placeholder.com/400x200',
  },
  // Add more video objects as needed
];

const VideoCatalog = () => {
  const [filteredVideos, setFilteredVideos] = useState(allVideos);
  const [filterGenre, setFilterGenre] = useState('All');

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setFilterGenre(selectedGenre);

    if (selectedGenre === 'All') {
      setFilteredVideos(allVideos);
    } else {
      const filtered = allVideos.filter((video) => video.genre === selectedGenre);
      setFilteredVideos(filtered);
    }
  };

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
            Video Catalog
          </Typography>
          <FormControl>
            <InputLabel id="genre-filter-label">Genre</InputLabel>
            <Select
              labelId="genre-filter-label"
              id="genre-filter"
              value={filterGenre}
              label="Genre"
              onChange={handleGenreChange}
            >
              <MenuItem value="All">All Genres</MenuItem>
              <MenuItem value="Action">Action</MenuItem>
              <MenuItem value="Drama">Drama</MenuItem>
              {/* Add more genres as needed */}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ flexGrow: 1, mt: 2 }}>
        <Typography variant="h4" gutterBottom>
          Browse Videos
        </Typography>
        <Grid container spacing={2}>
          {filteredVideos.map((video, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia component="img" alt={video.title} height="140" image={video.imageUrl} />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {video.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Genre: {video.genre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Release Date: {video.releaseDate}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer or additional components can go here */}
    </Box>
  );
};

export default VideoCatalog;
