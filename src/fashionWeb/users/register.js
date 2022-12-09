import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";

const Register = () => {
    const [username, setUsername] = useState('bob')
    const [password, setPassword] = useState('bob123')
    const [validatePassword, setValidatePassword] = useState('bob123')
    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const handleRegisterButton = () => {
        if(password!== validatePassword){
            setError('Passwords do not match')
            return
        }

        setError(null)
        const newUser = {username, password }

        dispatch(registerThunk(newUser))



    }
    return (
        <>
            <div className="container-fluid bg-black">
                <div className="wd-title">
                    GIVE ME THAT STYLE
                </div>

            </div>

            <div className="container-fluid bg-black " align="center">

                <div className="col-8 bg-white wd-border" align="center">
                    <h1 className="wd-title-black">register</h1>
                    {
                        error &&
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    }

                    <input
                        className="form-control mb-2"
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}/>
                    <input  className="form-control mb-2"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}/>
                    <input  className="form-control mb-2"
                            value={validatePassword}
                            onChange={(e)=> setValidatePassword(e.target.value)}/>
                    <button onClick={handleRegisterButton} className="btn btn-primary w-100">
                        Register
                    </button>
                    {
                        currentUser &&
                        <h2 className="wd-profile-title">welcome {currentUser.username}</h2>

                    }
                </div>
            </div>
        </>
    )
}
export default Register