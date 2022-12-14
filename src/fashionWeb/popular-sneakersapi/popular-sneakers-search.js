import {useDispatch, useSelector} from "react-redux";
import {findSneakersPopularThunk} from "./popular-sneakers-thunks";
import React, {useState, useEffect} from "react";
import PopularSneakerItem from "./popular-sneaker-item";
import "../home/index.css";


const PopularSneakersSearch = () => {

    const {sneakers, loading} = useSelector((state) => state.sneakers)

    //call thunk with dispatch to find by term
    const dispatch = useDispatch()
    console.log(sneakers)

    // THIS IS NOT PROPER USEEFFECT SO DISREGARD OR UPDATE LATER
    useEffect(() => {
            dispatch(findSneakersPopularThunk())

    }, [])


    return(

        <>

            <div className="bg-black">
                <div className="container">
                    <h2 className="wd-title float-start ps-4 pt-4">
                        Trending:
                    </h2>

                    <div className="row container-fluid bg-black">
                            <div className="row">
                                {!loading && sneakers &&
                                    sneakers.map((item) =>
                                        <div className="col-12 col-sm-6 col-lg-4 col-xxl-3 mt-3 d-flex align-items-stretch bg-black">
                                            <PopularSneakerItem
                                                key={item._id}
                                                search={item}
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
export default PopularSneakersSearch;
