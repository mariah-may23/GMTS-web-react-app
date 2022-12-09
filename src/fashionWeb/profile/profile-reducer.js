import {useSelector} from "react-redux";
import {createSlice} from "@reduxjs/toolkit";
import profileInfo from "./profileInfo.json";
import {updateUserThunk} from "../users/users-thunk";


const initialState = {
    user: [],
    loading: false
}



const profileSlice = createSlice({
    name: "profile",
    initialState:profileInfo,
    reducers: {
    }

});

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;


/*
editProfile(state, action) {
            const p = action.payload;
            console.log("*************in the reducer***********")
            console.log(p.firstName);
            state.fullName = p.fullName;
            state.firstName = p.firstName;
            state.lastName = p.lastName;
            state.user = p.user;
            state.address1 = p.address1;
            state.address2 = p.address2;
            state.city = p.city;
            state.state = p.state;
            state.zipcode = p.zipcode;
            state.email = p.email;

            return state
        },
        */