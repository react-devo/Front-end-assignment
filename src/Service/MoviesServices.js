import axios from 'axios';


// get all trending movies list
const getMoviesRecord = async(page)=>{
  const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`
      }
    };
    
   const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`, options);
   if(response?.data?.results){
      return {success:true,data:response?.data}
   }else{
      console.log("some thing went wrong.");
      return {success:false,data:[]}
   }
} 


// get movies by the name
const getMoviesByTitle = async(title,page=1)=>{
  const options = {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`
      }
    };
    
   const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, options);
   if(response?.data?.results){
      return {success:true,data:response?.data}
   }else{
      console.log("some thing went wrong.");
      return {success:false,data:[]}
   }
} 
export { getMoviesByTitle ,getMoviesRecord}