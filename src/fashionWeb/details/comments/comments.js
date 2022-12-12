import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createCommentThunk, findCommentsThunk} from "./comments-thunks";
import CommentItem from "./comment-item"

const Comments = () => {
    let [commentContents, setCommentContents] = useState('');
    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const {comments, loading} = useSelector(state => state.comment)
        useEffect(() => {
            dispatch(findCommentsThunk())
        }, [])

    const ClickHandler = () => {
        const newComment = {
            comment: commentContents,
            uid: currentUser.uid
        }
        dispatch(createCommentThunk(newComment));
    }

    return (

        <div className="row">
            <div className="col-10">
                <textarea value={commentContents} placeholder="What are your thoughts?"
                    className="form-control border-1"
                    onChange={(event) => setCommentContents(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={ClickHandler}>
                        Comment
                    </button>
                </div>
            </div>
            <div className="col-12"><hr/></div>

            {

                comments.map(post =>
                    <CommentItem key={post._id} post={post}/>
                )

            }
        </div>
    );
}
export default Comments;