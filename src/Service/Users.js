import axios from 'axios';



const userSignUp = async (data) => {
    console.log(data, 'data');
    const {fullName,email,password}= data;
    const name = fullName.split(' ');
    console.log(name[0],name[1], 'data');
    const encodedParams = new URLSearchParams();
    encodedParams.set('l_name', 'User');
    encodedParams.set('api_key', '394e9338b73a9f061b1968ceaa050a');
    encodedParams.set('password', 'Qwerty_12345');
    encodedParams.set('email', 'test@email.com');
    encodedParams.set('f_name', 'Test');

    console.log(encodedParams,'encodedParams')

    const options = {
        method: 'POST',
        url: 'https://login-signup.p.rapidapi.com/public/v1/signup.php',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Origin: 'http://localhost:3000',
            'X-RapidAPI-Key': '2a1ad4e04fmsh6e1ad080bda627bp1a73fcjsn006cb70ea426',
            'X-RapidAPI-Host': 'login-signup.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try {
        const response = await axios.post(options);
        console.log(response.data,'response form service');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getMoviesRecord = async(page)=>{
    const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2MzMmVjZmNkN2Y1MzVkYTUxZDhkZTYwYzM4NjA3OCIsInN1YiI6IjY1Njk2NjJlYjdkMzUyMDEwYjUzZjc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYt8H0z1snoUNwk4ZSM9VtXU9qow2-U2nWjQXKiBXVo'
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

const getMoviesByTitle = async(title,page=1)=>{
    const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2MzMmVjZmNkN2Y1MzVkYTUxZDhkZTYwYzM4NjA3OCIsInN1YiI6IjY1Njk2NjJlYjdkMzUyMDEwYjUzZjc2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TYt8H0z1snoUNwk4ZSM9VtXU9qow2-U2nWjQXKiBXVo'
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

export {userSignUp,getMoviesRecord,getMoviesByTitle}