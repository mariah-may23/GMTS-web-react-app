import {useParams, Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findUserByIdThunk, loginThunk, profileThunk} from "../users/users-thunk";

const ProfileDetails = () => {

    const {uid} = useParams();
    const {publicUser} = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const user = {uid}
    //console.log(user);
    useEffect(()=> {
        dispatch(findUserByIdThunk(user))
    },[])

    const isBuyer = publicUser.type === 'BUYER';



    return(
        <div>
        {publicUser &&
             <div className="row m-2">
                 <Link to="/" className="fw-bolder text-decoration-none text-black" style={{fontSize:"20px"}} >
                     GMTS
                 </Link>
                 <div className="row mb-3">
                     <div className="col-9 mb-3">
                         <label className="fw-bolder">
                             {publicUser.firstName} {publicUser.lastName}'s Account
                         </label>
                     </div>
                 </div>

                 <div className="row mb-3">
                     <div className="col-5 mb-2 ms-2" style={{fontSize:"15px"}}>
                         <label className="mb-0 fw-bolder">
                            Name
                         </label>
                         <br></br>
                         <label className="col-6">
                             {publicUser.firstName} {publicUser.lastName}
                         </label>
                         <br></br>
                     </div>
                 </div>

                 <div className="row mb-3">
                      <div className="col-5 mb-2 ms-2" style={{fontSize:"15px"}}>
                          <label className="mb-0 fw-bolder">
                             User Name
                          </label>
                          <br></br>
                          <label className="col-6">
                              {publicUser.userName} : {publicUser.type}
                          </label>
                          <br></br>
                      </div>
                 </div>

                 <div className="row mb-3">
                    {isBuyer &&
                    <div className="col-5 mb-2 ms-2" style={{fontSize:"15px"}}>
                        <label className="mb-0 fw-bolder">
                            Liked Products
                        </label>
                    </div>

                    }

                 </div>



             </div>
         }
        </div>
    );

}

export default ProfileDetails;