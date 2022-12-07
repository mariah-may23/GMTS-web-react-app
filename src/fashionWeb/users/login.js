import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "./users-thunk";
import "./index.css"
const Login = () => {
    const [username, setUsername] = useState('bob')
    const [password, setPassword] = useState('bob123')

    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLoginButton = () => {

        setError(null)
        const loginUser = {username, password }

        dispatch(loginThunk(loginUser))

        setTimeout(window.location = "/home",20000)



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
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}/>
                    <input  className="form-control mb-2"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}/>

                    <button onClick={handleLoginButton} className="btn btn-primary w-100">
                        Login
                    </button>
                    {
                        currentUser &&
                        <h2>welcome {currentUser.username}</h2>

                    }
                </div>
            </div>
        </>
    )
}
export default Login