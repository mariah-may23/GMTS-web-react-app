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
import CurrentUser from "./users/current-user";
import SneakerSearch from "./sneakersapi/sneakers-search";
import sneakersReducer from "./sneakersapi/sneakers-reducer"

const store = configureStore({
    reducer: {
        profile: profileReducer,
        search: searchReducer,
        user: usersReducer,
        sneakers: sneakersReducer
    }
});

function GMTSfashion() {
    return(
        <Provider store={store}>
            <CurrentUser>
                <Routes>
                    <Route path="" element={<HomePage/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="profile" element={<ProfilePage/>}/>
                    <Route path="edit-profile" element={<EditProfilePage/>}/>
                     <Route path="details" element={<Details/>}/>
                     <Route path="/users" element={<UserList/>}/>
                     <Route path="/register" element={<Register/>}/>
                     <Route path="/login" element={<Login/>}/>
                     <Route path="/sneakers" element={<SneakerSearch/>}/>
                </Routes>
            </CurrentUser>
        </Provider>
    );
}
export default GMTSfashion;