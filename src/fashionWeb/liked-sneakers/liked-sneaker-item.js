import React from "react";
import {Link} from "react-router-dom";


const LikedSneakerItem = (
    {
        search = {

        }
    }
) => {
    console.log("LIKED SNEAKER ITEM")
    console.log(search)

    return (
        <div className="card " style={{width: "18rem"}}>
            <img className="card-img-top h-100" src={search.thumbnail} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{search.shoeName}</h5>
                <p className="card-text">
                    <ul className="list-unstyled">
                        <li>Color: {search.colorway}</li>
                        {/*<li>Size: {search.size}</li>*/}
                        <li>Brand: {search.brand}</li>
                        {/*CHANGE USER!!!!*/}
                        {/*<li>User: Blobb</li>*/}
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

export default LikedSneakerItem;
