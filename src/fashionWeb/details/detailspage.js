import React from "react";
import DetailsItem from "./detail-summary-item" ;
import {useSelector} from "react-redux";
import LikedSneakerItemDetails from "../liked-sneakers/liked-detail-summary-item";


const DetailsList = () => {
    const detailsArray = useSelector(state => state.details)
    const {likes} = useSelector(state => state.likes)

    return(
        <>
            <ul className="list-group">
                {!likes &&
                <DetailsItem/>}
                <div className="mb-4"/>
                {likes &&
                 <LikedSneakerItemDetails/>
                }


            </ul>
        </>
    );
};
export default DetailsList;