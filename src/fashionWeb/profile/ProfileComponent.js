import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";


const ProfileComponent = () =>{
    const userProfile = useSelector((state) => state.profile);

    return(
        <div className="row mb-2">
            <div className="col-1 mt-3 ps-3">
                <i className="bi bi-arrow-left" style={{fontSize:"20px"}}></i>
            </div>
            <div className="col-11">
                 <label className="fw-bold" style={{fontSize:"20px"}}>
                    {userProfile.firstName} {userProfile.lastName}
                </label>
                <br></br>
                <label style={{color:"gray", fontSize:"14px"}}>6,114 Tweets</label>
            </div>
             <div className="mb-2">
                <img src={`/images/myuniverse.png`} style={{width:"100%", height: "200px"}}></img>
            </div>
            <div className="row mb-0">
                <div className="col-7 float-start" >
                    <img src={`/images/Hi.jpeg`} className="rounded-circle gmts-profile-image-profile-page"/>
                </div>
                <div className="col-5">
                    <Link to="/tuiter/edit-profile">
                        <button className="btn gmts-edit-button rounded-pill float-end border">
                            <b className="text-muted">Edit profile</b>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="ms-2">
                <div className="row mb-3">
                    <label className="mb-0 fw-bolder" style={{fontSize:"20px"}}>
                        {userProfile.firstName} {userProfile.lastName}
                    </label>
                    <br></br>
                    <label style={{color:"gray", fontSize:"14px"}}>{userProfile.handle}</label>
                </div>
                <p>
                    {userProfile.bio}
                </p>

                <div className="row">
                    <div className="col">
                        <i className="bi bi-geo-alt me-1"></i>
                        {userProfile.location}
                    </div>
                    <div className="col">
                        <i className="bi bi-balloon me-1"></i>
                        Born {userProfile.dateOfBirth}
                    </div>
                    <div className="col">
                        <i className="bi bi-calendar3 me-1"></i>
                        Joined {userProfile.dateJoined}
                    </div>
                </div>

                <div className="mt-3">
                    <b>{userProfile.followingCount}</b> Following
                    <b className="ms-3">{userProfile.followersCount}</b> Followers
                </div>

            </div>
        </div>

    );
}
export default ProfileComponent;