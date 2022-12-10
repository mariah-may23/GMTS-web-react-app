import React from "react";
import DetailsItem from "./detail-summary-item" ;
import {useSelector} from "react-redux";


const DetailsList = () => {
    const detailsArray = useSelector(state => state.details)

    return(
        <>
            <ul className="list-group">
                {
                    detailsArray.map(details =>
                                         <DetailsItem
                                             key={details._id}
                                             details={details}/> )
                }
            </ul>
        </>
    );
};
export default DetailsList;