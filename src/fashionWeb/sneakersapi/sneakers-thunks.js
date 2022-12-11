import {createAsyncThunk} from "@reduxjs/toolkit";
import {findSneakerBySearchTerm} from "./sneakers-service";

export const findSneakerBySearchTermThunk = createAsyncThunk(
    'findSneakerBySearchTerm', async (term) => {
        console.log(term);
         return await findSneakerBySearchTerm(term)
    }


)