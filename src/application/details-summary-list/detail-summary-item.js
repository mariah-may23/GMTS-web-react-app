import React from "react";
import {Link} from "react-router-dom";
const DetailsItem = (
    {
        details = {
            "_id": "Eagle Hockey T-shirt",
            "size": "Medium",
            "color": "Green",
            "userName": "Supreme",
            "image": "supremewhite.jpg",
            "Season": "FW2022",
            "ReleaseDate": "11/10/2022",
            "RetailPrice": "$265",
            "handle": "@nicoderi"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-8">
                    <div>Home / Apparel / {details._id}</div>
                    <div className="fw-bolder">{details.topic}</div>
                    <div>{details.title}</div>
                </div>
                <div className="col-4">
                    <h5 className="text-white float-end">
                        <span className="ms-2">
                            <i className="bi bi-patch-plus"></i>
                            <span className="ms-2"></span>
                        </span>

                        <span className="ms-2">
                            <i className="bi bi-heart-fill"></i>
                            <span className="ms-2"></span>
                        </span>

                        <span className="ms-2">
                           <i className="bi bi-box-arrow-right"></i>
                            <span className="ms-2"></span>
                        </span>
                        </h5>
                    </div>
                </div>

            <div className="row m-3">
                <div className="col-4">
                    <img className='rounded' height={300} src="https://cdn-images.farfetch-contents.com/18/73/26/45/18732645_40534267_1000.jpg"/>
                </div>
                <div className="col-4">
                    <img className='rounded' height={300} src="https://cdn-images.farfetch-contents.com/18/73/26/45/18732645_40534249_1000.jpg"/>
                </div>

                <div className="col-4">
                    <h5 className=" fw-bolder ">{details.userName}</h5>
                    <h6 className=" fw-lighter ">{details._id}</h6>

                    <div className="rounded mt-4 p-2 text-white border border-white">
                        <h5>Product details</h5>
                        <div>
                            Season: {details.Season}
                        </div>
                        <div>
                            Color: {details.color}
                        </div>
                        <div>
                            Release Date: {details.ReleaseDate}
                        </div>
                        <div>
                            Retail Price: {details.RetailPrice}
                        </div>
                    </div>


                    <div className="position-relative">
                            {/*<img src={`/images/${profile.profilePicture}`} className=" position-absolute rounded-circle border border-white wd-profile-picture-area"/>*/}
                            <Link>
                                <span>
                                <button type ="button" className="btn btn-white bg-white border border-white text-black fw-bold rounded mt-4">Add To Bag</button>
                                </span>

                                <span>
                                <button type ="button" className="ms-2 btn btn-white bg-white border border-white text-black fw-bold rounded mt-4">Wishlist</button>
                                </span>

                            </Link>

                        </div>
                </div>
            </div>

        </li>
    );
};
export default DetailsItem;
