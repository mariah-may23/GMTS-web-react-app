import React from "react";
import {Link} from "react-router-dom";

const SneakerItem = ({item}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top h-100" src={item.thumbnail} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{item.shoeName}</h5>
                <p className="card-text">
                    <ul className="list-unstyled">
                        <li>Color: {item.colorway}</li>
                        <li>Size: {item.size}</li>
                        <li>Brand: {item.brand}</li>
                        <li>User: Blobb</li>
                    </ul>
                </p>
                <Link to={`/detail/${item._id}`}>
                <button className="btn btn-primary">Details</button>
                </Link>
                <h4 className="float-end fw-bolder"> ${item.retailPrice}</h4>
            </div>
        </div>
    );
}

export default SneakerItem;
/*
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
    }*/