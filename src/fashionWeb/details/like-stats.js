import React from "react";
import {useDispatch} from "react-redux";

const LikeStats = (
    {
        details = {}
    }
) => {
    const dispatch = useDispatch();

    return (
        <>
            <span>
                <button type="button"
                        className="btn btn-dark bg-black border border-dark text-white fw-bold rounded mt-4">Add To Bag</button>
            </span>
            <span>
                {
                    !details.liked &&
                    <button type="button" className="ms-2 btn btn-white bg-white border border-dark text-black fw-bold rounded mt-4">Like
                        <i className="bi bi-heart ms-2"></i>
                    </button>
                }

                {
                    details.liked &&
                    <button type="button" className="ms-2 btn btn-white bg-white border border-dark text-black fw-bold rounded mt-4">Liked
                        <i className="bi bi-heart-fill ms-2"></i>
                    </button>


                }

            </span>


        </>
    );
};
export default LikeStats;