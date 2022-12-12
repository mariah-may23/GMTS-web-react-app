import {useDispatch, useSelector} from "react-redux";
import {findSneakerBySearchTermThunk} from "./sneakers-thunks";
import React, {useState, useEffect} from "react";
import SneakerItem from "./sneaker-item";


const SneakersSearch = () => {
    const [searchTerm, setSearchTerm] = useState('adidas')
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
            {/*Old version working*/}
            {/*    <h1 className="text-bg-primary"> sneakers search </h1>*/}
                <input
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                    value={searchTerm}

                />
                <button onClick={() => {
                    dispatch(findSneakerBySearchTermThunk(searchTerm))
                }}>Search</button>



                {/*<ul>*/}
                {/*    <li> rendering testing </li>*/}
                {/*    {!loading && sneakers &&*/}
                {/*        sneakers.map((sneaker) =>*/}

                {/*            <li key={sneaker._id} className="text-black">*/}
                {/*                {sneaker.shoeName}*/}
                {/*            </li>*/}
                {/*        )*/}
                {/*    }*/}
                {/*</ul>*/}

            <div className="container">
                <h4>Search</h4>
                <div className="row">
                    {/*NEW SEARCH, NOT WORKING, FIX LATER*/}

                    {/*<div className="position-relative">*/}
                    {/*    <input placeholder="Search Items"*/}
                    {/*           className="form-control rounded-pill ps-5"*/}
                    {/*           onChange={(e) => {*/}
                    {/*               setSearchTerm(e.target.value)*/}
                    {/*           }}*/}
                    {/*           value={searchTerm}*/}
                    {/*    />*/}
                    {/*    <i className="bi bi-search position-absolute*/}
                    {/*   wd-nudge-up"></i>*/}
                    {/*</div>*/}

                    {/*NEW BUTTON*/}
                    {/*<input*/}
                    {/*    onChange={(e) => {*/}
                    {/*        setSearchTerm(e.target.value)*/}
                    {/*    }}*/}
                    {/*    value={searchTerm}*/}

                    {/*/>*/}
                    {/*<button onClick={() => {*/}
                    {/*    dispatch(findSneakerBySearchTermThunk(searchTerm))*/}
                    {/*}}>Search</button>*/}

                    <div>
                        {/* Search results start*/}

                        {/*<SearchList/>*/}

                        <div className="row">
                            {!loading && sneakers &&
                                sneakers.map(item =>
                                    <div className="col-12 col-sm-6 col-lg-4 col-xxl-3 mt-3 d-flex align-items-stretch">
                                        console.log(item._id)
                                        <SneakerItem
                                            key={item._id}
                                            search={item}/>
                                    </div>
                                )
                            }
                        </div>

                        {/* Search results end*/}
                    </div>
                </div>
            </div>



        </>
    )
}
export default SneakersSearch;
