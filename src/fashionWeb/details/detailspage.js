import React from "react";
import DetailsItem from "./detail-summary-item" ;
import {useSelector} from "react-redux";
import Comments from "./comments/comments";


const DetailsList = () => {
    const detailsArray = useSelector(state => state.details)

    return(
        <>
            <ul className="list-group">
                <DetailsItem/>
                <div className="mb-4"/>

            </ul>
        </>
    );
};
export default DetailsList;