import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./likes-service"


export const createLikeThunk = createAsyncThunk(
    'createLikes',
    async (like) => {
        const actualLike = await service.createLike(like)
        return actualLike
    }
)
