import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    createCommentThunk,
    findCommentsThunk,
    findSneakersCommentedByUserThunk
} from "./comments-thunks";
import CommentItem from "./comment-item"
import {findSneakersLikedByUserThunk} from "../likes/likes-thunk";
import {useParams} from "react-router-dom";

const UserComments = () => {
    const {uid} = useParams();
    console.log(uid)

    //const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const {comments, loading} = useSelector(state => state.comment)
        useEffect(() => {
            dispatch(findSneakersCommentedByUserThunk(parseInt(uid)))
        }, [])

    console.log("HERE")
    console.log(comments)


    return (

        <div className="row">

            <div className="col-12"><hr/>
                <h3>Recent Comments:</h3>

                {

                    comments.map(post =>
                        <CommentItem key={post._id} post={post}/>
                    )

                }
            </div>
        </div>
    );
}
export default UserComments;