import { createSlice } from "@reduxjs/toolkit";
import searches from "./searches.json";

const searchSlice = createSlice({
    name: 'search',
    initialState: searches
});

export default searchSlice.reducer;