import {createSlice} from "@reduxjs/toolkit";
import profileInfo from "./profileInfo.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileInfo,
    reducers: {
        editProfile(state, action) {
            console.log("Inside the profile reducer");
            console.log(action.payload);
        },
    }
});

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;