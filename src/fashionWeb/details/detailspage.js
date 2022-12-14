import React from "react";
import DetailsItem from "./detail-summary-item" ;
import {useSelector} from "react-redux";
import LikedSneakerItemDetails from "../liked-sneakers/liked-detail-summary-item";
import {Link} from "react-router-dom";


const DetailsList = () => {
    const detailsArray = useSelector(state => state.details)
    const {likes} = useSelector(state => state.likes)
    const {currentUser} = useSelector(state => state.user)
    const {sneakers} = useSelector(state => state.sneakers)



    return(
        <>
            <ul className="list-group">
                <Link to="/" className="fw-bolder text-decoration-none text-white" style={{fontSize:"20px"}} >
                    GMTS
                </Link>
                {!currentUser &&
                <DetailsItem/>
                }
                <div className="mb-4"/>
                {currentUser &&
                 <LikedSneakerItemDetails/>
                }


            </ul>
        </>
    );
};
export default DetailsList;