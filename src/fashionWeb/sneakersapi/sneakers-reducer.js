import {createSlice} from "@reduxjs/toolkit";
import {findSneakerBySearchTermThunk} from "./sneakers-thunks";
import {findSneakersLikedByUserThunk} from "../details/likes/likes-thunk";

const initialState = {
    sneakers: [],
    loading: true,

}
const sneakersReducer = createSlice({
    name: 'sneaker',
    initialState,
    extraReducers: {
        [findSneakerBySearchTermThunk.pending]:
            (state) => {
                console.log("loading the sneakers")
                state.loading = true
                state.sneakers = []
        },

        [findSneakerBySearchTermThunk.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.sneakers = action.payload;
            state.loading = false;
        },

        [findSneakerBySearchTermThunk.rejected]:
            (state) => {
                state.loading = false
        },

    }
})

export default sneakersReducer.reducer