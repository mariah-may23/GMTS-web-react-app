import {createSlice} from "@reduxjs/toolkit";
import {findSneakerBySearchTermThunk} from "./sneakers-thunks";

const initialState = {
    sneakers: [],
    loading: true
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
            console.log("This is printing from sneaker reducer")
            console.log(state);
            console.log(action);
            console.log(action.payload)
            state.sneakers = action.payload;
            state.loading = false;
        },

        [findSneakerBySearchTermThunk.rejected]:
            (state) => {
        },

    }
})

export default sneakersReducer.reducer