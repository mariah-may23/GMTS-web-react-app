import React from "react";
import LikeButton from "./like-button";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {useParams, Link} from "react-router-dom"
import Comments from "./comments/comments";

const details = {};

const DetailsItem = () => {
    const {sid} = useParams();
    const dispatch = useDispatch()
    console.log(sid);

    const {sneakers} = useSelector((state) => state.sneakers,);

    const details = sneakers.find(m => m._id === sid)

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-12 p-2">
                    <div>
                        <span className="p-4">
                                <Link to="/search">
                                    <button className="bi bi-arrow-left text-white btn btn-dark"> </button>
                                </Link>
                        </span>
                        <span className="ms-1 border-bottom border-dark ">{details.shoeName}</span>
                    </div>
                </div>
            </div>

            <div className="row m-3">
                <div className="col-12 col-lg-9 col-xl-7 p-2">
                    <img className='rounded float-start border-grey border flex-wrap' width = "100%"
                         src={details.thumbnail}/>
                </div>

                <div className="col-12 col-xl-5 ps-5 pt-4">
                    <h5 className=" fw-bolder ">{details.brand}</h5>
                    <h6 className=" fw-light ">{details.shoeName}</h6>
                    <br></br>

                    <div>
                        <span className=" fw-normal ">
                            Available in :
                        </span>
                        <span className=" fw-light ">
                            {details.colorway}
                        </span>
                    </div>

                    <div>
                        <span className="fw-normal">
                            Retail Price : $
                        </span>
                        <span className="fw-light">
                            {details.retailPrice}
                        </span>
                    </div>

                    <br></br>

                    <div>
                        <span className="fw-normal">
                            Release Date :
                        </span>
                        <span className="fw-light">
                            {details.releaseDate}
                        </span>
                    </div>

                    <div className="position-relative pt-3">
                        {/*   LikeStats goes here */}
                        <>
                            <LikeButton></LikeButton>
                        </>
                    </div>
                    <div className="pt-4"></div>
                </div>
            </div>

            <div className="p-4">
                {/*<ul className="nav nav-pills text-black ms-2">*/}
                {/*    <li className="nav-item">*/}
                {/*        <a className="nav-link">THE DETAILS</a>*/}
                {/*    </li>*/}
                {/*    /!*<li className="nav-item">*!/*/}
                {/*    /!*    <a className="nav-link">DELIVERY & RETURNS</a>*!/*/}
                {/*    /!*</li>*!/*/}
                {/*</ul>*/}
                {/*<div className="m-4">*/}
                {/*    <hr></hr>*/}
                {/*</div>*/}
                THE DETAILS
                <hr></hr>
            </div>

            <div className="row ps-4 pt-2 pb-4">
                <div className="col-12">
                    <h5 className=" fw-bolder ">{details.shoeName}</h5>
                    <h6 className=" fw-light">{details.styleID}</h6>

                    <br></br>
                    <div className="fw-normal">{details.description}</div>
                    <br></br>

                </div>

                {/*<div className="col-1">*/}
                {/*</div>*/}

                <hr></hr>

            </div>
            <Comments></Comments>
            <div>


            </div>
        </li>
    );
};
export default DetailsItem;
