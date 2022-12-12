import React from "react";
import {useDispatch} from "react-redux";
import {deleteCommentThunk} from "./comments-thunks";

const CommentItem = ({post}) => {
    const dispatch = useDispatch();
    const deleteHandler = (id) => {
        console.log("deleting here")
        console.log(id);
        dispatch(deleteCommentThunk(id));
    }

    return(
        <li className="list-group-item list-unstyled">

            <span className="wd-right-contents">
                <p className="pt-2 ps-2">
                    <b>{post.userName}</b>

                    <span className="float-end align-top">
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteHandler(post._id)}></i>
                    </span>

                    <br>
                    </br>
                    {post.comment}
                </p>
            </span>
        </li>
    );
};
export default CommentItem;




