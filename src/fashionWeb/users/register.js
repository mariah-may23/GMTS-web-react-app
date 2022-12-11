import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {registerThunk} from "./users-thunk";

const Register = () => {
    const [userName, setUsername] = useState('bob')
    const [password, setPassword] = useState('bob123')
    const [firstName, setFirstName] = useState('BOB')
    const [lastName, setLastName] = useState('LAST')

    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    const dateJoined = year + "/" + month + "/" + day;

    const [validatePassword, setValidatePassword] = useState('bob123')
    const [dateOfBirth, setDateOfBirth] = useState('12/12/1212')

    const [address1, setAddress1] = useState('addy1')
    const [address2, setAddress2] = useState('addy2')

    const [city, setCity] = useState('city')
    const [state, setState] = useState('state')
    const [zipcode, setZipcode] = useState('zippy')
    const [email, setEmail] = useState('email@com')

    const [type, setType] = useState('BUYER')



    const [error, setError] = useState(null)
    const {currentUser} = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const handleRegisterButton = () => {
        if(password!== validatePassword){
            setError('Passwords do not match')
            return
        }

        setError(null)
        const newUser = {userName, password, firstName, lastName, dateJoined, dateOfBirth, zipcode,
            address1, address2, city, state, email, type }

        dispatch(registerThunk(newUser))
        setTimeout(window.location = "/",3000000000000)



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
                    <label>
                        Username
                    <input
                        className="form-control mb-2"
                        value={userName}
                        onChange={(e)=> setUsername(e.target.value)}/>
                    </label>
                    <label>
                        Password
                    <input  className="form-control mb-2"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}/>
                    </label>
                    <label>
                         Re-type Password
                    <input  className="form-control mb-2"
                            value={validatePassword}
                            onChange={(e)=> setValidatePassword(e.target.value)}/>
                    </label>
                    <label>
                        First Name
                    <input  className="form-control mb-2"
                            value={firstName}
                            onChange={(e)=> setFirstName(e.target.value)}/>
                    </label>
                    <label>
                        Last Name
                    <input  className="form-control mb-2"
                            value={lastName}
                            onChange={(e)=> setLastName(e.target.value)}/>
                    </label>
                     <label>
                         Date of Birth
                    <input  className="form-control mb-2"
                            value={dateOfBirth}
                            onChange={(e)=> setDateOfBirth(e.target.value)}/>
                     </label>
                    <label>
                          Address Line 1
                    <input  className="form-control mb-2"
                            value={address1}
                            onChange={(e)=> setAddress1(e.target.value)}/>
                    </label>
                    <label>
                        Address Line 2
                    <input  className="form-control mb-2"
                            value={address2}
                            onChange={(e)=> setAddress2(e.target.value)}/>
                    </label>
                    <label>
                        City
                    <input  className="form-control mb-2"
                            value={city}
                            onChange={(e)=> setCity(e.target.value)}/>
                    </label>
                    <label>
                         State
                    <input  className="form-control mb-2"
                            value={state}
                            onChange={(e)=> setState(e.target.value)}/>
                    </label>
                    <label>
                         Zipcode
                    <input  className="form-control mb-2"
                            value={zipcode}
                            onChange={(e)=> setZipcode(e.target.value)}/>
                    </label>
                    <label>
                        Email
                    <input  className="form-control mb-2"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}/>
                    </label>

                        <div>
                        <label>I am a:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                        <label className="btn ">
                            <input type="radio" name="options" id="option1"
                                   value="BUYER"
                                   onChange={(e)=> setType(e.target.value)}/>
                            Buyer
                        </label>
                        <label className="btn ">
                            <input type="radio" name="options" id="option2"
                                   value="SELLER"
                                   onChange={(e)=> setType(e.target.value)}/>
                           Seller
                        </label>
                        </div>
                    <button onClick={handleRegisterButton} className="btn btn-primary w-100">
                        Register
                    </button>
                    {
                        currentUser &&
                        <h2 className="wd-profile-title text-black">welcome {currentUser.userName}</h2>

                    }
                </div>
            </div>
        </>
    )
}
export default Register