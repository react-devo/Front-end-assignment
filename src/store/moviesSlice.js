import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    moviesCollections: []
}

export const moviesSlice = createSlice({
    name: 'moviesCollection',
    initialState,
    reducers: {
        getMoviesbyTitle: (state, { payload }) => {
            state.moviesCollections = payload
        }
    }
    })

// Action creators are generated for each case reducer function
export const { getMoviesbyTitle } = moviesSlice.actions

export default moviesSlice.reducer