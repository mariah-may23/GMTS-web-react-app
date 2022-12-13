import React, { useState } from "react";
import cn from "classnames";
import { ReactComponent as Hand } from "./hand.svg";

import "./styles.scss";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {userLikesSneakerThunk} from "./likes-thunk";

const particleList = Array.from(Array(10));




const LikeButton = ({details= {}}) => {
    const [liked, setLiked] = useState(null);
    const [clicked, setClicked] = useState(false);
    const dispatch = useDispatch();
    const {sid} = useParams();
    const {currentUser} = useSelector((state) => state.user)




    const likeHandler = () => {
            if( currentUser === null){
                alert(`Please login to like the product!`)
                setTimeout(window.location="/login")
             }else{
                const newLike = {
                    item_id: sid,
                    uid: currentUser.uid,
                    shoeName:details.shoeName,
                    brand:details.brand,
                    silhoutte:details.silhoutte,
                    styleID:details.styleID,
                    make:details.make,
                    colorway:details.colorway,
                    retailPrice:details.retailPrice,
                    thumbnail:details.thumbnail,
                    releaseDate:details.releaseDate,
                    description:details.description,
                    urlKey:details.urlKey
                }
                dispatch(userLikesSneakerThunk(newLike));
                setLiked(!liked);
                setClicked(true);

        }

        }




    return (
        <button
            onClick={likeHandler}
            onAnimationEnd={() => setClicked(false)}
            className={cn("like-button-wrapper", {
                liked,
                clicked,
            })
        }>
            {liked && (
                <div className="particles">
                    {particleList.map((_, index) => (
                        <div
                            className="particle-rotate"
                            style={{
                                transform: `rotate(${
                                    (360 / particleList.length) * index + 1
                                }deg)`,
                            }}
                        >
                            <div className="particle-tick" />
                        </div>
                    ))}
                </div>
            )}
            <div className="like-button">
                <Hand />
                <span>Like</span>
                <span className={cn("suffix", { liked })}>d</span>
            </div>
        </button>
    )};


export default LikeButton;