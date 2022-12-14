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
                <Link to="/" className="wd-title flex-wrap text-decoration-none d-none d-md-block text-white" >
                    GIVE ME THAT STYLE
                </Link>

                <Link to="/" className="wd-title-smaller flex-wrap text-decoration-none d-block d-md-none text-white" >
                    GIVE ME THAT STYLE
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