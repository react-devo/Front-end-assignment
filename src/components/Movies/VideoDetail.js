import React from 'react';
import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { img_300 } from '../../configs/config';

const VideoDetails = ({movies}) => {

  console.log(movies,'data..')

  return (
    <Container>
      <Card >
        <CardMedia
          component="img"
          height="140"
          image={`${img_300}/${movies?.poster_path}`}
          sx={{ width: 1100, height: 450 }}
          alt={movies?.original_title}
          style={{ objectFit: 'cover', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {movies?.original_title}
           
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movies?.overview}  
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {movies?.release_date}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default VideoDetails;
