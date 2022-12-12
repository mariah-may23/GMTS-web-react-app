import {createSlice} from "@reduxjs/toolkit";
import {findSneakersPopularThunk} from "./popular-sneakers-thunks";

const initialState = {
    sneakers: [],
    loading: true
}

const popularSneakersReducer = createSlice({
    name: 'sneaker',
    initialState,
    extraReducers: {
        [findSneakersPopularThunk.pending]:
            (state) => {
                console.log("loading the sneakers")
                state.loading = true
                state.sneakers = []
        },

        [findSneakersPopularThunk.fulfilled]: (state, action) => {
            console.log("This is printing from sneaker reducer")
            console.log(action.payload)
            state.sneakers = action.payload;
            state.loading = false;
        },

        [findSneakersPopularThunk.rejected]:
            (state) => {
                state.loading = false
        },

    }
})

export default popularSneakersReducer.reducer