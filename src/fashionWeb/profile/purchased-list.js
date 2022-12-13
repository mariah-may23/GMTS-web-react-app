import React, {useEffect} from "react";
import PurchasedItem from "./purchased-item";
import {useDispatch, useSelector} from "react-redux";

import {findSneakersLikedByUserThunk} from "../details/likes/likes-thunk";

const PurchasedList = () => {
    const {likes} = useSelector(state => state.likes)
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()


    // THIS IS NOT PROPER USE EFFECT SO DISREGARD OR UPDATE LATER

    useEffect(() => {
        dispatch(findSneakersLikedByUserThunk(currentUser.uid))

    }, [])

    return (
        <>
            <div className="row">
                    {
                        likes.map(item =>
                            <div className="col-12 col-sm-6 col-lg-4 col-xxl-3 mt-3 align-items-stretch">
                                <PurchasedItem
                                    key={item._id}
                                    search={item}/>
                            </div>
                        )
                    }
            </div>
        </>
    );
};

export default PurchasedList;
