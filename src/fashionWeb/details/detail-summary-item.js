import React from "react";

const DetailsItem = (
    {
        details = {}
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-8 p-2">
                    <div>
                        <span className="ms-4">Home</span>
                        <span><i className="bi bi-caret-right ms-1"></i></span>
                        <span className="ms-1">Apparel</span>
                        <span><i className="bi bi-caret-right ms-2"></i></span>
                        <span className="ms-1 border-bottom border-dark ">{details._id}</span>
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
                    <img className='rounded float-start border-grey border' height={400} width={300} src={details.imagefront}/>
                </div>
                <div className="col-4 p-2">
                    <img className='rounded float-start border-grey border' height={400} width={300} src={details.imageback}/>
                </div>

                <div className="col-4 ps-5 pt-4">
                    <h5 className=" fw-bolder ">{details.userName}</h5>
                    <h6 className=" fw-light ">{details._id}</h6>
                    <br></br>

                    <h5>{details.price}</h5>
                    <div className="position-relative">
                                <span>
                                <button type ="button" className="btn btn-dark bg-black border border-dark text-white fw-bold rounded mt-4">Add To Bag</button>
                                </span>
                                <span>
                                <button type ="button" className="ms-2 btn btn-white bg-white border border-dark text-black fw-bold rounded mt-4">Wishlist
                                    <i className="bi bi-heart ms-2"></i>
                                </button>
                                </span>
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
                        <h5 className=" fw-bolder ">{details.userName}</h5>
                        <h6 className=" fw-light">{details._id}</h6>

                        <br></br>
                        <div className="fw-normal">{details.information}</div>

                        <br></br>
                        <div className="fw-normal">{details.origin}</div>

                    </div>

                    <div className="col-1">
                    </div>

                    <div className="col-6">
                        <h6 className="fw-semibold">Composition</h6>
                        <h6 className="fw-light">{details.composition}</h6>
                        <br></br>

                        <h6 className="fw-semibold">Washing Instructions</h6>
                        <h6 className="fw-light">{details.washinginstructions}</h6>
                        <br></br>

                    </div>


            </div>


        </li>
    );
};
export default DetailsItem;
