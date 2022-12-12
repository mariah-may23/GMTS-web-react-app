import React from "react";
import LikeButton from "./like-button";
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {useParams, Link} from "react-router-dom"

const details = {};

const DetailsItem = () => {
    const {sid} = useParams();
    const dispatch = useDispatch()
    console.log(sid);

    const {sneakers} = useSelector((state) => state.sneakers,);

    const details = sneakers.find(m => m._id === sid)

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-8 p-2">
                    <div>
                        <span className="ms-1 border-bottom border-dark ">{details.shoeName}</span>
                    </div>
                </div>
                <div className="col-4 mt-2">
                    <h5 className="text-black float-end">
                        <span className="ms-2" >
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
                <div className="col-4 p-2">
                    <img className='rounded float-start border-grey border' height={400} width={300} src={details.thumbnail}/>
                </div>
                <div className="col-4 p-2">
                    <img className='rounded float-start border-grey border' height={400} width={300} src={details.imageback}/>
                </div>

                <div className="col-4 ps-5 pt-4">
                    <h5 className=" fw-bolder ">{details.brand}</h5>
                    <h6 className=" fw-light ">{details.shoeName}</h6>
                    <br></br>

                    <h5>{details.colorway}</h5>
                    <h5>{details.retailPrice}</h5>
                <br></br>
                    <h5>{details.releaseDate}</h5>
                    <div className="position-relative">
                    {/*   LikeStats goes here */}
                        <>
                        <LikeButton></LikeButton>
                        </>
                    </div>
                    <div className="pt-4"></div>
                </div>
            </div>

            <div>
                <ul className="nav nav-pills text-black ms-2">
                    <li className="nav-item">
                        <a className="nav-link">THE DETAILS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">DELIVERY & RETURNS</a>
                    </li>
                </ul>
                <div className="m-4">
                    <hr></hr>
                </div>

            </div>



            <div className="row ps-4 pt-2 pb-4">
                <div className="col-5">
                    <h5 className=" fw-bolder ">{details.shoeName}</h5>
                    <h6 className=" fw-light">{details.styleID}</h6>

                    <br></br>
                    <div className="fw-normal">{details.description}</div>

                    <br></br>

                </div>

                <div className="col-1">
                </div>



            </div>


        </li>
    );
};
export default DetailsItem;
