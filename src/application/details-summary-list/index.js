import React from "react";
import detailsArray from './details.json';
import DetailsItem from "./detail-summary-item" ;

const DetailsList = () => {
    return(
        <ul className="list-group">
            {
                detailsArray.map(post =>
                                     <DetailsItem
                                         key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default DetailsList;