import {createSlice} from "@reduxjs/toolkit";
import profileInfo from "./profileInfo.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileInfo
});

export default profileSlice.reducer;