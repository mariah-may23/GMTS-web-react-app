import { createSlice } from "@reduxjs/toolkit";
import details from "./details.json";

const detailSlice = createSlice({
                                    name: 'details',
                                    initialState: details
                                });

export default detailSlice.reducer;