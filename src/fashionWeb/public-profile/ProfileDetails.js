import {useParams} from "react-router-dom"

const ProfileDetails = () => {

    const {uid} = useParams();
    const {user} = useSelector((state) => state.user);
    console.log(user.);

    return(
        <div>
            <h2> profile details {uid} </h2>
        </div>
    );

}

export default ProfileDetails;