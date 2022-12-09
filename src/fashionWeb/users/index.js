import * as service from "./users-service.js"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "./users-thunk"; //FETCHES USERS AND PUT THEM IN A REDUCER

const UserList = () => {
   // const [users, setUsers] = useState([])
    //PUT USERS IN A REDUCER AND READ THOSE USERS FROM THE REDUCER
    const {users} = useSelector((state) => state.user)
   // const findAllUsers = async () => {
   //     const users = await service.findAllUsers()
     //   setUsers(users)
   // }
    const dispatch = useDispatch()
    useEffect(() => {
      //  findAllUsers()
        dispatch(findAllUsersThunk())
    }, [])
    return(
        <>
            <h1>Users {users.length}</h1>
            <ul className="list-group">
                {
                    users.map((user) =>
                    <li key={user._id}>
                        {user.userName}
                    </li>
                    )}
            </ul>
        </>

    )
}
export default UserList