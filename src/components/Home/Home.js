import React, { useEffect, useState } from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import Header from '../Header/Header';
import { getMoviesRecord } from '../../Service/MoviesServices';
import MovieCard from '../Movies/MovieCard';
import PaginationSize from '../CustomPagination/CustomPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesbyTitle } from '../../store/moviesSlice';


const HomePage = () => {
    const dispatch = useDispatch();
    const [trendingMovie, setTrendingMovies] = useState([]);
    const {moviesCollections} = useSelector(state =>state.movies)
    const [page, setPage] = useState(1);

    useEffect(() => {
        getTrendingMovies()
    }, [page])

    const getTrendingMovies = async () => {
        const response = await getMoviesRecord(page);
        if (response.success) {
            setTrendingMovies(response.data?.results);
            dispatch(getMoviesbyTitle(response.data?.results));
        } else {
            setTrendingMovies([])
            dispatch(getMoviesbyTitle([]));
        }

    }

    const handleChange = (event, value) => {
        setPage(value);
    };
console.log(moviesCollections,'moviesCollections')
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <CssBaseline />
            <Header />
            {trendingMovie?.length > 0 ? <Container component="main" sx={{ flexGrow: 1, mt: 2 }}>
                <Typography variant="h4" gutterBottom style={{display:'flex', justifyContent:'center'}}>
                    Trending Movies or Tv show
                </Typography>
                <Container maxWidth="md" sx={{ mb: 4 }}>
                    {trendingMovie?.length > 0 && <MovieCard movies={trendingMovie} />}
                </Container>
                <PaginationSize count={10} page={page} onChange={handleChange} />
            </Container> : <Typography variant="h6" component="div" style={{display:'flex', justifyContent:'center', marginBottom:"300px"}}>
                Loading..
            </Typography>}
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) => theme.palette.grey[200],
                }}
            >
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} My Dynamic Homepage. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default HomePage;
