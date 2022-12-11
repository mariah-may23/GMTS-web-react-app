import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";


const PublicProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.user);

    const clickHandler = (e) => {
        console.log(e.currentTarget.textContent);
    }

    return(
    <>
        <h1>
            This is public profile Page for
        </h1>

        <div onClick={clickHandler}>
            Alice
        </div>
    </>
    );
}

export default PublicProfileComponent;
