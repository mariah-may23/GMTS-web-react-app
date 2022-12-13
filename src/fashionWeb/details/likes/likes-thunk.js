import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./likes-service";

export const userLikesSneakerThunk = createAsyncThunk(
    'createLike',
    async (like) => {
        const actualLiked = await service.createLike(like)
        return actualLiked;
    }
)

export const findSneakersLikedByUserThunk = createAsyncThunk(
    'findSneakersLikedByUser',
    async(uid) => {
        const sneaks = await service.findLikes(uid)
        console.log("THESE ARE THE SNEAKERS OBJECTS THAT ARE LIKED")

        console.log(sneaks)
        return sneaks;
    }
)


