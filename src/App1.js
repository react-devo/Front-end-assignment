
import { Container } from '@mui/material';
import Login from './UserAuth/Login';
import Signup from './UserAuth/SignUp';
import Header from './components/Header/Header';
import SignIn from './components/Login/NewLogin';
import Paginations from './components/Pagination/CustomPagination';
import ProgressBar from './components/ProgressBar/ProgressBar';
import Quiz from './components/Quiz/Quiz';
import TableShowing from './components/table/tables';
import MovieList from './components/Movies/MoviesList';

function App() {

  const movie = {
    title: 'Inception',
    overview: 'A thief who enters the dreams of others to steal their secrets.',
    posterPath: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
  };

  return (
    <div className=''>
      <Container>
        <Header />
        <Login />
        <Signup />
        <MovieList />
        {/*<ProgressBar />*/}
        {/* <Quiz />
       <Paginations />*/}
      </Container>
    </div>
  );
}

export default App;
