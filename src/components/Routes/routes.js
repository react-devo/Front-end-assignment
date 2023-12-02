import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { Protected, ProtectedRoute } from "../../Service/Middleware/ProtectedRoute";
import UserProfile from "../UserProfile/UserProfiles";
import Login from "../../UserAuth/Login";
import Signup from "../../UserAuth/SignUp";
import VideoPlayer from "../Movies/VideoPlayer";
import HomePage from "../Home/Home";

export const AllRoutes = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute> <App /></ProtectedRoute>,
    },
    {
      path: "/profile",
      element: <ProtectedRoute> <UserProfile /></ProtectedRoute>,
    },
    {
      path: "/movie/:title",
      element: <ProtectedRoute> <VideoPlayer /></ProtectedRoute>,
    },
    {
      path: "/searching",
      element: <ProtectedRoute> <HomePage /></ProtectedRoute>,
    },
    {
      path: "/login",
      element:<Protected> <Login /> </Protected>,
    },
  {
    path: "/signup",
      element: <Protected> <Signup /> </Protected>,
    },
  ]);