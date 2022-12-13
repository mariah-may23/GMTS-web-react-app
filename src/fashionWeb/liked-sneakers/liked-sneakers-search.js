import {useDispatch, useSelector} from "react-redux";
import {findSneakersLikedByUserThunk} from "../details/likes/likes-thunk";
import React, {useState, useEffect} from "react";
import LikedSneakerItem from "./liked-sneaker-item";



const LikedSneakersSearch = () => {


    const {currentUser} = useSelector((state) => state.user)
    const {likes, loading} = useSelector((state) => state.likes)
    console.log("LIKED SNEAKER SEARCH")
    console.log(likes)


    //call thunk with dispatch to find by term
    const dispatch = useDispatch()


    // THIS IS NOT PROPER USE EFFECT SO DISREGARD OR UPDATE LATER

    useEffect(() => {
            dispatch(findSneakersLikedByUserThunk(currentUser.uid))

    }, [])

    console.log("LIKED SNEAKERS FOUND FOR USER ARRAY")
    console.log(likes)



    return(

        <>


            <div className="bg-black">
                <div className="row container-fluid bg-black">

                    <div className="container-fluid bg-black">

                        <div className="row">
                            {!loading && likes &&
                                likes.map((like) =>
                                    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3 mt-3 d-flex align-items-stretch bg-black">
                                        <LikedSneakerItem
                                            key={like._id}
                                            search={like}
                                            />
                                    </div>
                                )
                            }
                        </div>


                    </div>
                </div>
            </div>



        </>
    )
}
export default LikedSneakersSearch;
