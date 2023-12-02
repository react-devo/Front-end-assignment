import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container, Grid } from '@mui/material';
import { img_300, unavailable } from '../../configs/config'
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movies }) => {
  const navigator = useNavigate();

  // navigate single video details page.
  const handleVideo = (title) => {
    navigator(`/movie/${title}`)
  }

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Grid container spacing={2}>
        {movies?.length > 0 && movies.map(({ id, original_title, overview, poster_path }) => (
          <Grid item xs={12} sm={6} md={4} key={id} >
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={poster_path ? `${img_300}/${poster_path}` : unavailable}
                alt={original_title}
                onClick={() => handleVideo(original_title)}
                style={{cursor:'pointer' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {original_title?.slice(0, 15) || "Unkwon"}
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  {overview?.slice(0, 100)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MovieCard;
