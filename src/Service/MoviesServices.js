

import axios from 'axios';

const getAllTrendingMovies = async () => {


const options = {
  method: 'GET',
  url: 'https://movies-tv-shows-database.p.rapidapi.com/',
  params: {page: '1'},
  headers: {
    Type: 'get-trending-movies',
    'X-RapidAPI-Key': '2a1ad4e04fmsh6e1ad080bda627bp1a73fcjsn006cb70ea426',
    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

export { getAllTrendingMovies }