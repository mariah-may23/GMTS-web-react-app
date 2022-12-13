import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createLikeThunk, findLikesThunk} from "./likes-thunks";
import LikeItem from "./like-item"

const Likes = () => {
    let [likeContents, setLikeContents] = useState('');
    const {currentUser} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const {likes, loading} = useSelector(state => state.likes)
        useEffect(() => {
            dispatch(findLikesThunk())
        }, [])

    const ClickHandler = () => {
        const newLike = {
            item_id: post._id,
            uid: currentUser.uid
        }
        dispatch(createLikeThunk(newLike));
    }

    return (

        <div className="row">

                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={ClickHandler}>
                        Comment
                    </button>



            {

                likes.map(post =>
                    <LikeItem key={post._id} post={post}/>
                )

            }
        </div>
    );
}
export default Likes;