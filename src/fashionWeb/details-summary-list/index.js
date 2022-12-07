import React from "react";
import detailsArray from './details.json'
import DetailsItem from "./detail-summary-item" ;

const DetailsList = () => {
    return(
        <>
            <ul className="list-group">
                {
                    detailsArray.map(details =>
                                         <DetailsItem
                                             details={details}/> )
                }
            </ul>
        </>
    );
};
export default DetailsList;