import React, { useEffect, useState } from 'react';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import Header from '../Header/Header';
import { getMoviesByTitle, getMoviesRecord } from '../../Service/MoviesServices';
import MovieCard from '../Movies/MovieCard';
import PaginationSize from '../CustomPagination/CustomPagination';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesbyTitle } from '../../store/moviesSlice';
import { useLocation } from 'react-router-dom';


const HomePage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [trendingMovie, setTrendingMovies] = useState([]);
    const { moviesCollections } = useSelector(state => state.movies)
    const [page, setPage] = useState(1);
    const [laoder, setLoader] = useState(false);
    const queryParams = new URLSearchParams(location.search);
    const myParam = queryParams.get('myParam');

    useEffect(() => {
        if (!myParam) {
            getTrendingMovies()
        } else {
            getTrendingMoviesByKeyword()
        }

    }, [page])

    const getTrendingMovies = async () => {
        setLoader(true);
        const response = await getMoviesRecord(page);
        if (response.success) {
            dispatch(getMoviesbyTitle(response.data?.results));
            setLoader(false);
        } else {
            dispatch(getMoviesbyTitle([]));
            setLoader(false);
        }

    }

    // get movies by it keyword 
    const getTrendingMoviesByKeyword = async () => {
        setLoader(true);
        const response = await getMoviesByTitle(myParam);
        if (response.success) {
            dispatch(getMoviesbyTitle(response.data?.results));
            setLoader(false);
        } else {
            dispatch(getMoviesbyTitle([]));
            setLoader(false);
        }

    }

    const handleChange = (event, value) => {
        setPage(value);
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
            <Header />
            {moviesCollections?.length > 0 ? <Container component="main" sx={{ flexGrow: 1, mt: 2 }}>
                <Typography variant="h4" gutterBottom style={{ display: 'flex', justifyContent: 'center' }}>
                    Trending Movies or Tv show
                </Typography>
                <Container maxWidth="md" sx={{ mb: 4 ,ml: moviesCollections?.length ===1 ?50 :18}} >
                    {moviesCollections?.length > 0 && <MovieCard movies={moviesCollections} />}
                </Container>
                {moviesCollections?.length>10&&<PaginationSize count={10} page={page} onChange={handleChange} />}
            </Container> : <Typography variant="h6" component="div" style={{ display: 'flex', justifyContent: 'center', marginBottom:laoder? "300px" :'200px' }}>
               {laoder ?  "Loading..." :'No Result found.'}
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
