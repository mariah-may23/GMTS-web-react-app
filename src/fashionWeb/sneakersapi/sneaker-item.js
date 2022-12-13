import React from "react";
import {useParams, Link} from "react-router-dom";
import Details from "../details/details-component";
import {useSelector} from "react-redux";

const SneakerItem = (
    {
        search = {

        }
    }
) => {


    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top h-100" src={search.thumbnail} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{search.shoeName}</h5>
                <p className="card-text">
                    <ul className="list-unstyled">
                        <li>Color: {search.colorway}</li>
                        <li>Brand: {search.brand}</li>
                        {/*CHANGE USER!!!!*/}
                        {/*<li>Seller: {currentUser}</li>*/}
                    </ul>
                </p>
                <Link
                    to={`/details/${search._id}`}
                    className="btn btn-dark">
                    Details
                </Link>
                <h4 className="float-end fw-bolder"> ${search.retailPrice}</h4>
            </div>
        </div>
    );
}

export default SneakerItem;
