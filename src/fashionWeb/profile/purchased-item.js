import React from "react";

const PurchasedItem = (
    {
        search = {
        }
    }
) => {
    return (
        <div className="card" style={{width: "10rem"}}>
            <img className="card-img-top" src={search.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{search.title}</h5>
                <p className="card-text">

                </p>
                <a href="#" className="btn btn-primary">Details</a>

            </div>
        </div>
    );
}

export default PurchasedItem;
