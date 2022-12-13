import { createSlice } from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {findSneakersLikedByUserThunk, userLikesSneakerThunk} from "./likes-thunk";
import {findSneakerBySearchTermThunk} from "../../sneakersapi/sneakers-thunks";

const initialState = {
    likes: [],
    loading: false
}

const likesSlice = createSlice({
      name: 'likes',
      initialState,
      extraReducers:{
          [userLikesSneakerThunk.fulfilled]:
              (state, {payload}) => {
                  state.loading = false
                  state.likes.push(payload)
              },

          [findSneakersLikedByUserThunk.fulfilled]: (state, action) => {
              state.likes = action.payload;
              state.loading = false;
          }
      }
})

export default likesSlice.reducer;

