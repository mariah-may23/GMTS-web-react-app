import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../users/users-thunk";

const HomePage = () => {
    const {currentUser} = useSelector((state)=> state.user)
    const dispatch = useDispatch()
        useEffect(()=> {
            dispatch(profileThunk())
        },[])
    console.log(currentUser)

    return (
        <div >
            <div className="row bg-black mb-0">
                <div className="col-4 col-lg-3 mt-2 mb-2">
                    <form className="d-flex">

                        <Link to="/search"> <button className="btn btn-dark my-2 my-sm-0"
                                type="submit">

                            Search
                        </button>
                        </Link>
                    </form>

                </div>



                <div className="col-6 col-xxl-6 wd-title flex-wrap d-none d-xl-block">

                    GIVE ME THAT STYLE

                </div>

                <div className="col-6 col-xl-6 wd-title-smaller flex-wrap d-none d-lg-block d-xl-none">

                    GIVE ME THAT STYLE

                </div>

                <div className="col-4 col-lg-6 wd-title-smallest flex-wrap d-block d-lg-none">

                    GIVE ME THAT STYLE

                </div>

                {
                    currentUser &&
                    <div className="col-4 col-lg-3 mt-2 mb-2">
                        <form action="/profile">
                            <button className="btn btn-dark float-end me-3"
                                    type="submit">Profile
                            </button>
                        </form>
                    <h1 className="wd-title-smaller d-none d-xxl-block">WELCOME {currentUser.userName}</h1>

                    </div>
                }

                { !currentUser
                  &&
                    <div className="col-4 col-lg-3 mt-2 mb-2 float-end">
                        <form action="/login">
                            <button className="btn btn-dark float-end ms-3 me-3"
                                    type="submit">Login
                            </button>
                        </form>
                      <form action="/register">
                        <button className="btn btn-dark float-end"
                                type="submit">Sign Up
                        </button>
                      </form>


                    </div>
                }
            </div >



    





        </div>




    );
}

export default HomePage;



/*
This is implementing current user and getting data from the local server
import {profileThunk} from "../users/users-thunk";

const HomePage = () => {
    const {currentUser} = useSelector((state)=> state.users)
    //console.log(currentUser)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(profileThunk())
    },[])

*/