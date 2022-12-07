import React, {useState} from "react";
import "./index.css";

const Tabs = () => {

    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-black mt-0">
            <div className="container-fluid">
                <div className="collapse navbar-collapse row">
                    <ul className="navbar-nav">
                        <li className="nav-item col-3 wd-left">
                            <a className="nav-link" href="#">Shoes</a>
                        </li>
                        <li className="nav-item col-4">
                            <a className="nav-link" href="#">Apparel</a>
                        </li>
                        <li className="nav-item col-4">
                            <a className="nav-link" href="#">Accessories</a>
                        </li>
                        <li className="nav-item col-2">
                            <a className="nav-link" href="#">Browse</a>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>

    );
}

export default Tabs;

