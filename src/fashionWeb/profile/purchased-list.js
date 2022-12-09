import React from "react";
import PurchasedItem from "./purchased-item";
import {useSelector} from "react-redux";

const PurchasedList = () => {
    const purchasedArray = useSelector(state => state.search)

    return (
        <>
            <div className="row">
                    {
                        purchasedArray.map(item =>
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
