import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    movies: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState: initialStateValue,
    reducers:{
        addMovies: (state, action) =>{
            state.movies = action.payload
        },
        getAllMovies: (state, action) => {
            return state.movies
        }
    }
})

export const {addMovies, getAllMovies} = movieSlice.actions;
export default movieSlice.reducer;