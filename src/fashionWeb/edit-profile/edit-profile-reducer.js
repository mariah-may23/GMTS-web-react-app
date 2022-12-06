import {createSlice} from "@reduxjs/toolkit";
import profileInfo from "../profile/profileInfo.json";

const editProfileSlice = createSlice({
    name: "edit-profile",
    initialState: profileInfo,
    reducers: {
        editName(state, action) {
            const newFullName = action.payload;
            console.log(newFullName);
            state.fullName = newFullName;
            const splitName = newFullName.split(" ");
            state.firstName = splitName[0];
            state.lastName = splitName[1];

        },
    }
});

export const {editName} = editProfileSlice.actions
export default editProfileSlice.reducer;