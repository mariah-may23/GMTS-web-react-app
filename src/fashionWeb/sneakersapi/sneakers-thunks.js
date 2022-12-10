import {createAsyncThunk} from "@reduxjs/toolkit";
import {findSneakerBySearchTerm} from "./sneakers-service";

export const findSneakerBySearchTermThunk = createAsyncThunk(
    'findSneakerBySearchTerm',
    (term) => findSneakerBySearchTerm(term)
)