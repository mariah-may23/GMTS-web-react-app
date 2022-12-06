import React from "react";
import SearchItem from "./search-item";
import {useSelector} from "react-redux";


// const SearchList = () => {
//     return (
//         <div className="row">
//             <div className="col-4 mt-3"> <SearchItem/> </div>
//             <div className="col-4 mt-3"> <SearchItem/> </div>
//             <div className="col-4 mt-3"> <SearchItem/> </div>
//             <div className="col-4 mt-3"> <SearchItem/> </div>
//             <div className="col-4 mt-3"> <SearchItem/> </div>
//             <div className="col-4 mt-3"> <SearchItem/> </div>
//         </div>
//
//     );
// }

const SearchList = () => {
    const searchArray = useSelector(state => state.search)
    // searchArray.map(x => console.log(x))
    return (
        <>
            <div className="row">
                    {
                        searchArray.map(item =>
                            <div className="col-12 col-sm-6 col-lg-4 col-xxl-3 mt-3 d-flex align-items-stretch">
                                <SearchItem
                                    key={item._id}
                                    search={item}/>
                            </div>
                        )
                    }
                {/*<div className="col-4 mt-3"> <SearchItem/> </div>*/}
            </div>
        </>
    );
};

export default SearchList;
