import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {profileThunk} from "./users-thunk";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector((state) => state.user)
    console.log("Testing on current-user.js file and printing state.user now")
    console.log(currentUser);
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(profileThunk())
    },[])
    return(
        children
    )

}

export default CurrentUser