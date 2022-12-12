import {createAsyncThunk} from "@reduxjs/toolkit";
import {findSneakersPopular} from "./popular-sneakers-service";

export const findSneakersPopularThunk = createAsyncThunk(
    'findSneakerBySearchTerm',
    () => findSneakersPopular()
)