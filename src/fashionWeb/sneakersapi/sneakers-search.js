import {useDispatch, useSelector} from "react-redux";
import {findSneakerBySearchTermThunk} from "./sneakers-thunks";
import React, {useState, useEffect} from "react";
import SneakerItem from "./sneaker-item";
//import "./sneakers.css";
import {Link} from "react-router-dom";


const SneakersSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const {sneakers, loading} = useSelector((state) => state.sneakers)
    console.log(loading);

    console.log("Printing Sneakers array")
    console.log(sneakers)
    //call thunk with dispatch to find by term
    const dispatch = useDispatch()

    // THIS IS NOT PROPER USEEFFECT SO DISREGARD OR UPDATE LATER
    useEffect(() => {
        if(searchTerm){
            dispatch(findSneakerBySearchTermThunk(searchTerm))
        }
    }, [])


    return(

        <>
            <div className="bg-black">
                <div className="container bg-black">
                    <div className="row">

                        <div className="row pb-3 pt-4 ">
                            <span className="col-1">
                            <Link to="/">
                                <button className="bi bi-arrow-left text-white btn btn-dark"> </button>
                            </Link>
                                {/*<span className="text-white ps-2 fs-3">Search</span>*/}
                            </span>
                            {/*NEW SEARCH, NOT WORKING, FIX LATER*/}

                            <div className="position-relative col-10">
                            <span className="d-flex">
                                <input placeholder="Search Sneakers"
                                       className="form-control me-sm-2"
                                       onChange={(e) => {
                                           setSearchTerm(e.target.value)
                                       }}
                                       value={searchTerm}
                                />
                                <button className="btn btn-dark my-2 my-sm-0"
                                        onClick={() => {
                                            dispatch(findSneakerBySearchTermThunk(searchTerm))
                                        }}>
                                    Search
                                </button>
                            </span>

                            </div>
                        </div>

                        <div>
                            {/* Search results start*/}

                            {/*<SearchList/>*/}

                            <div className="row">
                                {!loading && sneakers &&
                                    sneakers.map((item) =>
                                        <div className="col-12 col-sm-6 col-lg-4 col-xxl-3 mt-3 d-flex align-items-stretch">
                                            <SneakerItem
                                                key={item._id}
                                                search={item}
                                            />
                                        </div>
                                    )
                                }
                            </div>

                            {/* Search results end*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SneakersSearch;
