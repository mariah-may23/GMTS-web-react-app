import {useParams} from "react-router-dom"
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



    return(
        <div>
            {publicUser &&
             <h2> profile details {publicUser.uid} </h2>
            }
        </div>
    );

}

export default ProfileDetails;