import React from "react";
import "./index.css";
import DetailsList from "./details-summary-list";

const Details = () => {
    return (
        <div className="row">
            <div className="col-8 position-relative p-2">
                <input placeholder="Search"
                       className="form-control rounded-pill ps-5 mb-1"/>
                <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
            </div>
            <div className="col-4">
                {/*<i className="wd-bottom-4 text-primary float-end bi*/}
                {/*       bi-gear-fill fs-2 position-relative"></i>*/}
            </div>
        <DetailsList/>
        </div>
        );

}
export default Details;