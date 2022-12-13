import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteCommentThunk} from "./comments-thunks";
import {findAllUsersThunk} from "../../users/users-thunk";

const CommentItem = ({post}) => {

    const dispatch = useDispatch();

    const users = useSelector((state) => state.user.users);
    console.log(users)
    useEffect(()=> {
        dispatch(findAllUsersThunk())
    },[])
    const commentedUser = users.find(m => m.uid === post.uid)
    console.log(commentedUser)

    const deleteHandler = (id) => {
        console.log("deleting here")
        console.log(id);
        dispatch(deleteCommentThunk(id));
    }






    return(
        <li className="list-group-item list-unstyled">
        {commentedUser &&
            <span className="wd-right-contents">
                <p className="pt-2 ps-2">
                    <b>{post.userName}</b>

                    <span className="float-end align-top">
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteHandler(post._id)}></i>
                    </span>

                    <br>
                    </br>

                    <Link to={`/profile/${commentedUser.uid}`}>
                        {commentedUser.userName}
                    </Link>

                    <br></br>
                    {post.comment}
                </p>
            </span>
            }
        </li>
    );
};
export default CommentItem;




