import React from "react"
import {Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomePage from "./home";
import ProfilePage from "./profile";
import EditProfilePage from "./edit-profile"
import profileReducer from "./profile/profile-reducer"
import Search from "./search/search-component";
import searchReducer from "./search/search-reducer";
import Details from "./details-summary-list/details-component";
import UserList from "./users";
import usersReducer from "./users/users-reducer";
import Register from "./users/register";
import Login from "./users/login";


const store = configureStore({
    reducer: {
        profile: profileReducer,
        search: searchReducer,
        reducer: {users: usersReducer}
    }
});

function GMTSfashion() {
    return(
        <Provider store={store}>

            <Routes>
                <Route path="" element={<HomePage/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="edit-profile" element={<EditProfilePage/>}/>
                 <Route path="details" element={<Details/>}/>
                 <Route path="/users" element={<UserList/>}/>
                 <Route path="/register" element={<Register/>}/>
                 <Route path="/login" element={<Login/>}/>

            </Routes>
        </Provider>
    );
}
export default GMTSfashion;