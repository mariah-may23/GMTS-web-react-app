import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {editProfile} from "../profile/profile-reducer"

const EditProfileComponent = () =>{
    const userProfile = useSelector((state) => state.profile);
    const [profile, setProfile] = useState(userProfile);
    const [fullName, setNewFullName] = useState(userProfile.fullName);
    const [firstName, setNewFirstName] = useState(userProfile.firstName);
    const [lastName, setNewLastName] = useState(userProfile.lastName);
    const [user, setNewUsername] = useState(userProfile.userName);
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
        /*
        useEffect(() => {setNewFullName(updateName)}, []);
        */
        {setNewFullName(updateName)};
        console.log(fullName);
        const temp = {...userProfile, fullName, firstName, lastName, user, address1, address2, city, state, zipcode, email}
        dispatch(editProfile(temp));
        console.log({temp});
    }



    return(
        <div className="row mb-2">
            <div className="row m-2">
                <Link to="/profile" className="col-1">
                    <i className="bi bi-x-lg"></i>
                </Link>
                <div className="col-7 float-start">
                     <label className="fw-bold float-start" style={{fontSize:"20px"}}>
                        Edit profile
                    </label>
                </div>
                <div className="col-3">
                        <button onClick={SaveProfile}
                         className="btn btn-dark rounded-pill float-end">
                            <b>Save</b>
                        </button>
                </div>
            </div>

            <div className="ms-3">
                 <form>
                    <h3> Account Profile </h3>
                    <div className="row ms-3 mb-2">
                        <div className="border border-muted rounded ps-2 pe-2 mb-2 col-4 me-3">
                            <span className="mt-1 mb-1 text-muted">First Name</span>
                            <br/>
                            <textarea className="mt-1 gmts-textbox-edit-profile"
                             onChange={(e) => setNewFirstName(e.target.value)}
                             rows="1" value={firstName}/>
                        </div>
                        <div className="border border-muted rounded ps-2 pe-2 mb-2 col-4">
                            <span className="mt-1 mb-1 text-muted">Last Name</span>
                            <br/>
                            <textarea className="mt-1 gmts-textbox-edit-profile"
                             onChange={(e) => setNewLastName(e.target.value)}
                             rows="1" value={lastName}/>
                        </div>
                    </div>

                    <div className="border border-muted rounded ps-2 pe-2 mb-3 ms-3 col-5">
                        <span className="mt-1 mb-1 text-muted">Username</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewUsername(e.target.value)}
                         rows="1" value={user}/>
                    </div>

                    <div className="border border-muted rounded ps-2 pe-2 mb-2 ms-3 col-5">
                        <span className="mt-1 mb-1 text-muted">Username</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewEmail(e.target.value)}
                         rows="1" value={email}/>
                    </div>

                    <h3> Shipping Address </h3>
                    <div className="row mb-2 ms-3">
                    <div className="border border-muted rounded ps-2 pe-2 mb-2 col-4">
                        <span className="mt-1 mb-1 text-muted">Address1</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewUsername(e.target.value)}
                         rows="1" value={address1}/>
                    </div>

                    <div className="border border-muted rounded ps-2 pe-2 mb-2 ms-3 col-4">
                        <span className="mt-1 mb-1 text-muted">(Optional) Address2 (Apt, Unit #)</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewUsername(e.target.value)}
                         rows="1" value={address2}/>
                    </div>
                    </div>

                    <div className="border border-muted rounded ps-2 pe-2 mb-2 ms-3 col-5">
                        <span className="mt-1 mb-1 text-muted">City</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewCity(e.target.value)}
                         rows="1" value={city}/>
                    </div>
                    <div className="border border-muted rounded ps-2 pe-2 mb-2 ms-3 col-5">
                        <span className="mt-1 mb-1 text-muted">State</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewsState(e.target.value)}
                         rows="1" value={state}/>
                    </div>
                    <div className="border border-muted rounded ps-2 pe-2 mb-2 ms-3 col-5">
                        <span className="mt-1 mb-1 text-muted">Zipcode</span>
                        <br/>
                        <textarea className="mt-1 gmts-textbox-edit-profile"
                         onChange={(e) => setNewZipcode(e.target.value)}
                         rows="1" value={zipcode}/>
                    </div>

                    <h3> Payment Method </h3>
                    <div className="row mb-2 ms-3">
                        <div className="border border-muted rounded ps-2 pe-2 mb-2 col-5">
                            <span className="mt-1 mb-1 text-muted">Card Number</span>
                            <br/>
                            <textarea className="mt-1 gmts-textbox-edit-profile"
                             onChange={(e) => setNewZipcode(e.target.value)}
                             rows="1" value={zipcode}/>
                        </div>
                    </div>

                 </form>
             </div>

         </div>

    );
}
export default EditProfileComponent;
