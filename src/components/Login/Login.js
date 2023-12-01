import React, { useState } from 'react';
import { userLogin, logout } from '../../store/userSlice';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const { user, authenticated_user, message } = useSelector((state) => state.useAuth)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim()?.length>0 && password.trim().length>0) {
      dispatch(userLogin({ username, password }));
      setPassword('')
      setUsername('');
    }
  };

  const userLogout = () => {
    dispatch(logout());
  }

  return (
    <div className="login-container">
      {authenticated_user && user ?
        <div className='welcomeDiv'>
          <p>Welcome {user}</p>
          <button type="button" onClick={userLogout}>Logout</button>
        </div>
        : <>
          <h2>Login</h2>
          {message && <p style={{ color: 'red' }}>{message}</p>}
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </>}
    </div>
  );
};

export default Login;
