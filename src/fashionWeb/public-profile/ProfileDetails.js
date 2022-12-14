import {useParams, Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "../users/users-thunk";
import {findCommentsThunk} from "../details/comments/comments-thunks";
import UserComments from "../details/comments/comments-search";

const ProfileDetails = () => {

    const {uid} = useParams();
    //console.log(uid)

    const {users} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(findAllUsersThunk())
    }, [])
    console.log(users)

    const publicUser = users.find(u => u.uid === parseInt(uid))

   // console.log(publicUser)

    //const isBuyer = publicUser.type === 'BUYER';


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
                             {publicUser.userName}'s Account
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
                             Role
                         </label>
                         <br></br>
                         <label className="col-6">
                             {publicUser.type}
                         </label>
                         <br></br>
                     </div>
                 </div>

                 <UserComments/>


             </div>
            }
        </div>
    );

}

export default ProfileDetails;