import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./details-service"

export const updateLikeThunk = createAsyncThunk(
    'details/updateLike',
    async (details) =>
        await service.updateLike(details)
)