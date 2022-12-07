import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";



const ProfileComponent = () =>{
    const userProfile = useSelector((state) => state.user);

    return(
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
                        {userProfile.firstName} {userProfile.lastName}
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
                        {userProfile.firstName} {userProfile.lastName}
                    </label>
                    <br></br>
                </div>
                <div className="col-5 mb-2 ms-2" style={{fontSize:"13px"}}>
                    <label className="mb-0 fw-bolder">
                        Date Joined
                    </label>
                    <br></br>
                    <label className="col-6 border-bottom border-dark">
                        {userProfile.dateJoined}
                    </label>
                    <br></br>
                </div>

                <div className="col-5 mb-2 ms-2" style={{fontSize:"13px"}}>
                    <label className="mb-0 fw-bolder">
                        Username
                    </label>
                    <br></br>
                    <label className="col-6 border-bottom border-dark">
                        {userProfile.userName}
                    </label>
                    <br></br>
                </div>
                <div className="col-5 mb-2 ms-2" style={{fontSize:"13px"}}>
                    <label className="mb-0 fw-bolder">
                        Date of Birth
                    </label>
                    <br></br>
                    <label className="col-6 border-bottom border-dark">
                        {userProfile.dateOfBirth}
                    </label>
                    <br></br>
                </div>
            </div>



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
                        {userProfile.address1}
                    </label>
                    <br></br>
                </div>

                <div className="col-5 mb-2 ms-2 float-end" style={{fontSize:"13px"}}>
                    <label className="mb-0 fw-bolder">
                        Address2
                    </label>
                    <br></br>
                    <label className="col-10 border-bottom border-dark">
                        {userProfile.address2}
                    </label>
                    <br></br>
                </div>

                <div className=" mb-2 ms-2" style={{fontSize:"13px"}}>
                    <label className="mb-0 fw-bolder">
                        City
                    </label>
                    <br></br>
                    <label className="col-4 border-bottom border-dark">
                        {userProfile.city}
                    </label>
                    <br></br>
                </div>

                <div className=" mb-2 ms-2" style={{fontSize:"13px"}}>
                    <label className="mb-0 fw-bolder">
                        State
                    </label>
                    <br></br>
                    <label className="col-4 border-bottom border-dark">
                        {userProfile.state}
                    </label>
                    <br></br>
                </div>
                <div className=" mb-2 ms-2" style={{fontSize:"13px"}}>
                    <label className="mb-0 fw-bolder">
                        Zipcode
                    </label>
                    <br></br>
                    <label className="col-4 border-bottom border-dark">
                        {userProfile.zipcode}
                    </label>
                    <br></br>
                </div>

                <div className=" mb-2 ms-2" style={{fontSize:"13px"}}>
                    <label className="mb-0 fw-bolder">
                        Email
                    </label>
                    <br></br>
                    <label className="col-4 border-bottom border-dark">
                        {userProfile.email}
                    </label>
                </div>
            </div>




            <div className="row mb-3">
                <label className="border-bottom mb-2" style={{fontSize:"20px"}}>
                    Purchased History
                </label>
                <div className="col-5 mb-2 ms-2" style={{fontSize:"13px"}}>
                   List of purchased product
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

        </div>

    );
}
export default ProfileComponent;

/*
<Link to="/gmts/edit-profile">
    <button className="btn gmts-edit-button rounded-pill float-end border">
        <b className="text-muted">Edit profile</b>
    </button>
</Link>

<div className="row mb-0">
    <div className="col-4">

    </div>

</div>


<aside data-qa="profile_side_nav" class="ProfileSideNav__Aside-sc-1xq9lfq-0 dOfSbJ">
<div class="ProfileSideNav__Block-sc-1xq9lfq-2 cjzCsR">
    <div class="ProfileSideNav__Header-sc-1xq9lfq-1 eeYyIN">Account</div>
    <a data-qa="profile_nav_wants" href="/wants" class="ProfileSideNav__AsideLink-sc-1xq9lfq-3 fayUyJ">Wants</a>
    <a data-qa="profile_nav_orders" href="/account/orders" class="ProfileSideNav__AsideLink-sc-1xq9lfq-3 fayUyJ">Orders</a>
</div>
<div class="ProfileSideNav__Block-sc-1xq9lfq-2 cjzCsR">
    <a data-qa="profile_nav_profile" href="/account/profile" class="ProfileSideNav__AsideLink-sc-1xq9lfq-3 kpRwQD">Profile</a>
    <a data-qa="profile_nav_preferences" href="/account/preferences" class="ProfileSideNav__AsideLink-sc-1xq9lfq-3 fayUyJ">Preferences</a>
    <a data-qa="profile_nav_addresses" href="/account/addresses" class="ProfileSideNav__AsideLink-sc-1xq9lfq-3 fayUyJ">Shipping Addresses</a>
    <a data-qa="profile_nav_payments" href="/account/payments" class="ProfileSideNav__AsideLink-sc-1xq9lfq-3 fayUyJ">Payment Methods</a>
    <a data-qa="profile_nav_support" href="https://support.goat.com/" class="ProfileSideNav__AsideLink-sc-1xq9lfq-3 fayUyJ">Support</a>
</div>
<button data-qa="profile_nav_log_out" class="ProfileSideNav__LogOutButton-sc-1xq9lfq-4 cBuywE">Log Out</button>
</aside>

*/