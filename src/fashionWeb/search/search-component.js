import React from "react";
import SearchList from "./search-list";
import './search-component.css';

const Search = () => {

    return (
        <>
            <div className="container">
                <h4>Search</h4>
                <div className="row">
                    <div className="position-relative">
                        <input placeholder="Search Items"
                               className="form-control rounded-pill ps-5"/>
                        <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                    </div>
                    <div>
                        <SearchList/>
                    </div>
                    {/*<div className="col-1">*/}
                    {/*    <i className="wd-bottom-4 text-primary float-end bi*/}
                    {/*       bi-gear-fill fs-4 position-relative"></i>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );

}

export default Search;