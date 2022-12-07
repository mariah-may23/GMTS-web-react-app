import React, {useEffect, useState} from "react";
import Tabs from "./tabs"
import "./index.css"
import Content from "./personal-content";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../users/users-thunk";

const HomePage = () => {
    const {currentUser} = false;
    //console.log(currentUser)
    const dispatch = useDispatch()


    return (
        <div >
            <div className="row bg-black mb-0">
                <div className="col-3 mt-2">
                    <form className="d-flex">
                        <input className="form-control me-sm-2" type="text"
                               placeholder="Search"/>
                        <button className="btn btn-dark my-2 my-sm-0"
                                type="submit">Search
                        </button>
                    </form>

                </div>

                
                <div className="col-5 wd-title">

                    GIVE ME THAT STYLE

                </div>

                {
                    currentUser &&
                    <div className="col-4 mt-2  wd-profile-title">
                        <form action="/profile">
                            <button className="btn btn-dark move-right"
                                    type="submit">Profile
                            </button>
                        </form>
                    <h2>WELCOME {currentUser.username}</h2>

                    </div>
                }

                { !currentUser
                  &&
                    <div className="col-4 mt-2 move-right ">
                        <form action="/login">
                            <button className="btn btn-dark move-right"
                                    type="submit">Login
                            </button>
                        </form>
                      <form action="/register">
                        <button className="btn btn-dark move-right"
                                type="submit">Sign Up
                        </button>
                      </form>


                    </div>
                }
            </div >
            <Tabs/>


    





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