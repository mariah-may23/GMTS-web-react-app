import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./likes-service";

export const userLikesSneakerThunk = createAsyncThunk(
    'createLike',
    async (like) => {
        const actualLiked = await service.createLike(like)
        return actualLiked;
    }
)


