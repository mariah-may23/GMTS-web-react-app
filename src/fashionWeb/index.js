import React from "react"
import {Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomePage from "./home";
import ProfilePage from "./profile";
import profileReducer from "./profile/profile-reducer"
import Details from "./details-summary-list/details-component";


const store = configureStore({
    reducer: {
        profile: profileReducer
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