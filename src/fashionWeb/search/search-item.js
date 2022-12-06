import React from "react";

const SearchItem = (
    {
        search = {
            // "_id": "001",
            // "title": "Dirty Vintage Shirt",
            // "price": 99,
            // "image": "https://i.ebayimg.com/images/g/PTkAAOSwz89hggPf/s-l1600.jpg",
            // "color": "White",
            // "size": "L",
            // "brand": "Adidas"
        }
    }
) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top h-100" src={search.image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{search.title}</h5>
                <p className="card-text">
                    <ul className="list-unstyled">
                        <li>Color: {search.color}</li>
                        <li>Size: {search.size}</li>
                        <li>Brand: {search.brand}</li>
                        <li>User: Blobb</li>
                    </ul>
                </p>
                <a href="#" className="btn btn-primary">Details</a>
                <h4 className="float-end fw-bolder"> ${search.price}</h4>
            </div>
        </div>
    );
}

export default SearchItem;
