import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {editProfile} from "../profile/profile-reducer"
import {updateUserThunk} from "../users/users-thunk";

const EditProfileComponent = () =>{
    const userProfile = useSelector((state) => state.user.currentUser);
//    console.log(userProfile)
    const [profile, setProfile] = useState(userProfile);
    const [fullName, setNewFullName] = useState(userProfile.fullName);
    const [firstName, setNewFirstName] = useState(userProfile.firstName);
    const [lastName, setNewLastName] = useState(userProfile.lastName);
    const [userName, setNewUsername] = useState(userProfile.userName);
    const [address1, setNewAddress1] = useState(userProfile.address1);
    const [address2, setNewAddress2] = useState(userProfile.address2);
    const [city, setNewCity] = useState(userProfile.city);
    const [state, setNewsState] = useState(userProfile.state);
    const [zipcode, setNewZipcode] = useState(userProfile.zipcode);
    const [email, setNewEmail] = useState(userProfile.email);
    const dispatch = useDispatch();

    const SaveProfile = () => {
        console.log("Save button initiation");

        const updateName = firstName + " " + lastName;
        console.log("variable made for full name: " + updateName);
        {setNewFullName(updateName)};
//        const temp = {...userProfile, fullName, firstName, lastName, userName, address1, address2, city, state, zipcode, email}
//        dispatch(editProfile({...userProfile, fullName, firstName, lastName, userName, address1, address2, city, state, zipcode, email}));
        dispatch(updateUserThunk({
            ...userProfile,fullName, firstName, lastName, userName, address1, address2, city, state, zipcode, email
        }))
        console.log("done editing render changed value")
        console.log(userProfile);
    }



    return(
        <div className="bg-black">
        <div className="container bg-white rounded">
        {userProfile &&
        <div className="row m-2">
            <div className="row m-2">
                <Link to="/profile" className="col-1">
                    <i className="bi bi-arrow-left text-white btn btn-dark"></i>
                </Link>
                <span className="col-8">
                     <h5 className="fw-bold mt-2 ms-5" style={{fontSize:"20px"}}>
                        Edit profile
                    </h5>
                </span>
                <span className="col-3 ">
                    <Link to="/profile">
                        <button onClick={SaveProfile}
                         className="btn btn-dark float-end ms-3">
                            <b>Save</b>
                        </button>
                    </Link>
                </span>
            </div>

            <div className="ms-3">
                 <form>
                    <h5 className="ms-2 mt-4 mb-4"> Account Profile </h5>
                    <div className=" mb-2">
                        <div className="border border-muted rounded ps-2 pe-2 mb-2 col-4 me-3 col-5">
                            <span className="mt-1 mb-1 text-muted">First Name</span>
                            <br/>
                            <textarea className="mt-1 gmts-textbox-edit-profile"
                             onChange={(e) => setNewFirstName(e.target.value)}
                             rows="1" value={firstName}/>
                        </div>

                        <div className="border border-muted rounded ps-2 pe-2 mb-3 col-5">
                            <span className="mt-1 mb-1 text-muted">Username</span>
                            <br/>
                            <textarea className="mt-1 gmts-textbox-edit-profile"
                                      onChange={(e) => setNewUsername(e.target.value)}
                                      rows="1" value={userName}/>
                        </div>

                        <div className="border border-muted rounded ps-2 pe-2 mb-2 col-5">
                            <span className="mt-1 mb-1 text-muted">Email</span>
                            <br/>
                            <textarea className="mt-1 gmts-textbox-edit-profile"
                                      onChange={(e) => setNewEmail(e.target.value)}
                                      rows="1" value={email}/>
                        </div>

                        <div className="border border-muted rounded ps-2 pe-2 mb-2 col-5">
                            <span className="mt-1 mb-1 text-muted">Last Name</span>
                            <br/>
                            <textarea className="mt-1 gmts-textbox-edit-profile"
                             onChange={(e) => setNewLastName(e.target.value)}
                             rows="1" value={lastName}/>
                        </div>
                    </div>

                    <h5 className="mt-5 ms-2"> Shipping Address </h5>
                    <div className="mb-2 mt-4">
                    <div className="border border-muted rounded ps-2 pe-2 mb-2 col-5">
                        <span className="mt-1 mb-1 text-muted">Address1</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewAddress1(e.target.value)}
                         rows="1" value={address1}/>
                    </div>

                    <div className="border border-muted rounded ps-2 pe-2 mb-2 col-5">
                        <span className="mt-1 mb-1 text-muted">(Optional) Address2 (Apt, Unit #)</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewAddress2(e.target.value)}
                         rows="1" value={address2}/>
                    </div>
                    </div>

                    <div className="border border-muted rounded ps-2 pe-2 mb-2 col-5">
                        <span className="mt-1 mb-1 text-muted">City</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewCity(e.target.value)}
                         rows="1" value={city}/>
                    </div>
                    <div className="border border-muted rounded ps-2 pe-2 mb-2 col-5">
                        <span className="mt-1 mb-1 text-muted">State</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewsState(e.target.value)}
                         rows="1" value={state}/>
                    </div>
                    <div className="border border-muted rounded ps-2 pe-2 mb-2 col-5">
                        <span className="mt-1 mb-1 text-muted">Zipcode</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewZipcode(e.target.value)}
                         rows="1" value={zipcode}/>
                    </div>

                    <h5 className="mt-5 mb-4 ms-2"> Payment Method </h5>
                        <div className="border border-muted rounded ps-2 pe-2 mb-2 col-5">
                            <span className="mt-1 mb-1 text-muted">Card Number</span>
                            <br/>
                            <textarea className="mt-1 gmts-textbox-edit-profile"
                             onChange={(e) => setNewZipcode(e.target.value)}
                             rows="1" value={zipcode}/>
                    </div>
                     <div className= "mt-5"></div>

                 </form>
             </div>

         </div>
         }
         </div>
        </div>

    );
}
export default EditProfileComponent;
