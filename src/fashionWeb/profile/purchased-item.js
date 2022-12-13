import React from "react";
import {Link} from "react-router-dom";

const PurchasedItem = (
    {
        search = {
        }
    }


) =>    {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top h-100" src={search.thumbnail} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{search.title}</h5>
                <p className="card-text">
                    <ul className="list-unstyled">
                        <li>Name: {search.shoeName}</li>
                        <li>StyleID: {search.styleID}</li>
                        <li>Brand: {search.brand}</li>

                    </ul>
                </p>
                <Link to={`/details/${search._id}`} className="btn btn-primary">Details</Link>
                <h4 className="float-end fw-bolder"> ${search.retailPrice}</h4>
            </div>
        </div>
    );
}

export default PurchasedItem;
