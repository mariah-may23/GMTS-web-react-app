import React from "react"
import {Routes, Route} from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomePage from "./home";
import ProfilePage from "./profile";
import profileReducer from "./profile/profile-reducer"
<<<<<<< Updated upstream
import Details from "./details-summary-list/details-component";
=======
import Search from "./search/search-component";
import searchReducer from "./search/search-reducer";
import Details from "./details/details-component";
import UserList from "./users";
import usersReducer from "./users/users-reducer";
import Register from "./users/register";
import Login from "./users/login";
import detailsReducer from "./details/details-reducer";
>>>>>>> Stashed changes


const store = configureStore({
    reducer: {
<<<<<<< Updated upstream
        profile: profileReducer
=======
        profile: profileReducer,
        search: searchReducer,
        details: detailsReducer,
        reducer: {users: usersReducer}
>>>>>>> Stashed changes
    }
});

function GMTSfashion() {
    return(
        <Provider store={store}>
            <h1> inside of fashionWeb directory GMTS Fashion </h1>
            <Routes>
                <Route path="" element={<HomePage/>}/>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="/details" element={<Details/>}/>

            </Routes>
        </Provider>
    );
}
export default GMTSfashion;