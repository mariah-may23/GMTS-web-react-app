import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunk";


const Profile = () => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutThunk())
      window.location = "/home"
    }
    return(
        <>
            <div className="container-fluid bg-black" align="center">
                <div className="col-8 bg-black" align="center">
                    <h1 className="wd-title">PROFILE</h1>
                    {
                        currentUser &&
                        <h2 className="wd-profile-title">welcome {currentUser.username}</h2>



                    }
                    <button className="btn btn-danger" onClick={handleLogout}>LOGOUT</button>
                </div>
            </div>
        </>
    )
}

export default Profile