import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import userInfo from "./profileInfo";
import PurchasedList from "./purchased-list";
import {logoutThunk, profileThunk} from "../users/users-thunk";


const ProfileComponent = () =>{
    const {currentUser} = useSelector((state) => state.user);
    const loggedIn = true;
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutThunk())
        window.location = "/"
    }
    console.log(currentUser)


    return(
        <div>

        {currentUser &&
         <div className="row m-2">
             <Link to="/" className="fw-bolder text-decoration-none text-black" style={{fontSize:"20px"}} >
                 GMTS
             </Link>
             <div className="row mb-3">
                 <div className="col-9 mb-3">
                     <label className="fw-bolder">
                         My Account
                     </label>
                 </div>
                 <div className="col-2" style={{fontSize:"13px"}}>
                     <label className="float-end">
                         {currentUser.firstName} {currentUser.lastName}
                     </label>
                 </div>
             </div>



             <div className="row mb-3">
                 <div className="row border-bottom mb-2">
                     <div className="col-8">
                         <label style={{fontSize:"20px"}}>
                             Profile Information
                         </label>
                     </div>
                     <div className="col-2">
                         <Link to="/edit-profile" className="float-end text-decoration-none">
                             <b className="text-muted">Edit profile</b>
                         </Link>

                     </div>
                 </div>
                 <div className="col-5 mb-2 ms-2" style={{fontSize:"13px"}}>
                     <label className="mb-0 fw-bolder">
                         Full Name
                     </label>
                     <br></br>
                     <label className="col-6 border-bottom border-dark">
                         {currentUser.firstName} {currentUser.lastName}
                     </label>
                     <br></br>
                 </div>
                 {
                     loggedIn &&
                     <div className="col-5 mb-2 ms-2" style={{fontSize:"13px"}}>
                         <label className="mb-0 fw-bolder">
                             Date Joined
                         </label>
                         <br></br>
                         <label className="col-6 border-bottom border-dark">
                             {currentUser.dateJoined}
                         </label>
                         <br></br>


                     </div>
                 }

                 <div className="col-5 mb-2 ms-2" style={{fontSize:"13px"}}>
                     <label className="mb-0 fw-bolder">
                         Username
                     </label>
                     <br></br>
                     <label className="col-6 border-bottom border-dark">
                         {currentUser.userName}
                     </label>
                     <br></br>
                 </div>

                 {loggedIn &&
                  <div className="col-5 mb-2 ms-2" style={{fontSize:"13px"}}>
                      <label className="mb-0 fw-bolder">
                          Date of Birth
                      </label>
                      <br></br>
                      <label className="col-6 border-bottom border-dark">
                          {currentUser.dateOfBirth}
                      </label>
                      <br></br>
                  </div>

                 }
             </div>


             { loggedIn &&
               <div className="row mb-3">
                   <label className="border-bottom mb-2" style={{fontSize:"20px"}}>
                       Shipping/Payment Information
                   </label>

                   <div className="col-5 mb-2 ms-2 float-start" style={{fontSize:"13px"}}>
                       <label className="mb-0 fw-bolder">
                           Address 1
                       </label>
                       <br></br>
                       <label className="col-10 border-bottom border-dark">
                           {currentUser.address1}
                       </label>
                       <br></br>
                   </div>

                   <div className="col-5 mb-2 ms-2 float-end" style={{fontSize:"13px"}}>
                       <label className="mb-0 fw-bolder">
                           Address2
                       </label>
                       <br></br>
                       <label className="col-10 border-bottom border-dark">
                           {currentUser.address2}
                       </label>
                       <br></br>
                   </div>

                   <div className=" mb-2 ms-2" style={{fontSize:"13px"}}>
                       <label className="mb-0 fw-bolder">
                           City
                       </label>
                       <br></br>
                       <label className="col-4 border-bottom border-dark">
                           {currentUser.city}
                       </label>
                       <br></br>
                   </div>

                   <div className=" mb-2 ms-2" style={{fontSize:"13px"}}>
                       <label className="mb-0 fw-bolder">
                           State
                       </label>
                       <br></br>
                       <label className="col-4 border-bottom border-dark">
                           {currentUser.state}
                       </label>
                       <br></br>
                   </div>
                   <div className=" mb-2 ms-2" style={{fontSize:"13px"}}>
                       <label className="mb-0 fw-bolder">
                           Zipcode
                       </label>
                       <br></br>
                       <label className="col-4 border-bottom border-dark">
                           {currentUser.zipcode}
                       </label>
                       <br></br>
                   </div>

                   <div className=" mb-2 ms-2" style={{fontSize:"13px"}}>
                       <label className="mb-0 fw-bolder">
                           Email
                       </label>
                       <br></br>
                       <label className="col-4 border-bottom border-dark">
                           {currentUser.email}
                       </label>
                   </div>
               </div>
             }




             <div className="row mb-3">
                 <label className="border-bottom mb-2" style={{fontSize:"20px"}}>
                     Purchased History
                 </label>
                 <PurchasedList/>
                 <div className="col-5 mb-2 ms-2" style={{fontSize:"13px"}}>

                 </div>
             </div>



             <div className="row mb-3">
                 <label className="border-bottom mb-2" style={{fontSize:"20px"}}>
                     Liked Seller
                 </label>
                 <div className="col-5 mb-2 ms-2" style={{fontSize:"13px"}}>
                     List of other users
                 </div>
             </div>
             <button className="btn btn-black" onClick={handleLogout}>LOGOUT</button>

         </div>


        }
            </div>



    );
}
export default ProfileComponent;

