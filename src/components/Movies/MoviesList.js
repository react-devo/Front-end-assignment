import React from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  const movies = [
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      imageUrl: 'https://picsum.photos/id/237/200/300',
    },
    {
      title: 'The Shawshank Redemption',
      description: 'A tale of hope and redemption.',
      imageUrl: 'https://picsum.photos/200/300?grayscale',
    },
    // Add more movie objects as needed
  ];

  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          description={movie.description}
          imageUrl={movie.imageUrl}
        />
      ))}
    </div>
  );
};

export default MovieList;
