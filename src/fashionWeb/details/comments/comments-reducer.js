import { createSlice } from "@reduxjs/toolkit";
import {findCommentsThunk, deleteCommentThunk,
        createCommentThunk} from "./comments-thunks";

const initialState = {
    comments: [],
    loading: false
}


const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    extraReducers:{
        [findCommentsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.comments = payload
            },
        [findCommentsThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteCommentThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.comments = state.comments.filter(c => c._id !== payload)
            },
        [createCommentThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.comments.push(payload)

            },

    }
})

export default commentsSlice.reducer;

