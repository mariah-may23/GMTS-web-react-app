import { createSlice } from "@reduxjs/toolkit";
import {
    findCommentsThunk, deleteCommentThunk,
    createCommentThunk, findSneakersCommentedByUserThunk
} from "./comments-thunks";
import {findSneakersLikedByUserThunk} from "../likes/likes-thunk";

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
        [findSneakersCommentedByUserThunk.fulfilled]: (state, action) => {
            state.comments = action.payload;
            state.loading = false;
        },

        [createCommentThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.comments.push(payload)

            },

    }
})

export default commentsSlice.reducer;

