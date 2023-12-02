import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import  moviesSlice  from './moviesSlice'

export const store = configureStore({
  reducer: {
    useAuth: userSlice,
    movies: moviesSlice
  },
})