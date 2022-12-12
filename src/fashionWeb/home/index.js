import React from "react";
import Homepage from "./homepage";
import "./index.css"
import Slides from "./slideshow";
import PopularSneakersSearch from "../popular-sneakersapi/popular-sneakers-search";
import {useSelector} from "react-redux";



const HomeComponent = () => {
    const {currentUser} = useSelector((state)=> state.user)
    return(
        <>

            <Homepage/>
            <Slides/>
            {!currentUser &&
             <PopularSneakersSearch/>
            }





        </>
    );
};
export default HomeComponent;