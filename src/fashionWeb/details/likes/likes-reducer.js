import { createSlice } from "@reduxjs/toolkit";
import {userLikesSneakerThunk} from "./likes-thunk";

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
                                      }
                                  })

export default likesSlice.reducer;

