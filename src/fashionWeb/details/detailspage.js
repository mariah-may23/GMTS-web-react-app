import React from "react";
import DetailsItem from "./detail-summary-item" ;
import {useSelector} from "react-redux";
import LikedSneakerItemDetails from "../liked-sneakers/liked-detail-summary-item";


const DetailsList = () => {
    const detailsArray = useSelector(state => state.details)
    const {likes} = useSelector(state => state.likes)
    const {currentUser} = useSelector(state => state.user)
    const {sneakers} = useSelector(state => state.sneakers)



    return(
        <>
            <ul className="list-group">
                {!currentUser || (currentUser && sneakers ) &&
                <DetailsItem/>}
                <div className="mb-4"/>
                {likes && currentUser &&
                 <LikedSneakerItemDetails/>
                }


            </ul>
        </>
    );
};
export default DetailsList;