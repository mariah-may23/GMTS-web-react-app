import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import "./index.css"
const Login = () => {
    const [userName, setUsername] = useState('TedLee')
    const [password, setPassword] = useState('Ted1234')

    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const handleLoginButton = () => {

        setError(null)
        const loginUser = {userName, password }
        console.log(loginUser);
        dispatch(loginThunk(loginUser))
//        setTimeout(window.location = "/",200000)
        setTimeout(200000000000000)


    }
    return (
        <>
            <div className="container-fluid bg-black" align="center">
                <div className="col-8 bg-black" align="center">
                    <h1 className="wd-title">login</h1>

                    {
                        error &&
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    }

                    <input
                        className="form-control mb-2"
                        value={userName}
                        onChange={(e)=> setUsername(e.target.value)}/>
                    <input  className="form-control mb-2"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}/>

                    <button onClick={handleLoginButton} className="btn btn-primary w-100">
                        Login
                    </button>
                    {
                        currentUser &&
                        <h2>welcome {currentUser.userName}</h2>

                    }
                </div>
            </div>
        </>
    )
}
export default Login