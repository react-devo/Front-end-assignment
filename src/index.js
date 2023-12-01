import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/userStore';
import {
  RouterProvider,
} from "react-router-dom";
import '../src/styles/global.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AllRoutes } from './components/Routes/routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
  <Provider store={store}>
    <RouterProvider router={AllRoutes} />
  </Provider>
  </GoogleOAuthProvider>
);
