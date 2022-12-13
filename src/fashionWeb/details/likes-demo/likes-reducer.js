import { createSlice } from "@reduxjs/toolkit";
import {findLikesThunk, deleteLikeThunk,
        createLikeThunk} from "./likes-thunks";

const initialState = {
    likes: [],
    loading: false
}


const likesSlice = createSlice({
    name: 'likes',
    initialState,
    extraReducers:{
        [createLikeThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.likes.push(payload)

            },

    }
})

export default likesSlice.reducer;

